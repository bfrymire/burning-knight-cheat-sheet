import os
import json
import colorsys
from collections import Counter
from dotenv import load_dotenv

import requests
from PIL import Image


load_dotenv()

data_dir = '../data/'
git_api_url = 'https://api.github.com/'
bk_owner = 'RexcellentGames'
bk_repo = 'BkWikiData'
bk_repo_url = f'{git_api_url}repos/{bk_owner}/{bk_repo}/'
bk_repo_data_url = f'{bk_repo_url}data/'
bk_repo_items_url = f'{bk_repo_data_url}items/'
bk_repo_images_url = f'{bk_repo_data_url}images/'
bk_items_file = 'items.json'

debugging = True


def create_dotenv():
    if os.path.exists('../../.env'):
        print('The .env file already exists.')
        return
    with open('../../.env', 'w') as file:
        file.write('# Add your GitHub Personal Access Token\n')
        file.write('GITHUB_PAT=""\n')
    print('Created .env file. Add your GitHub Personal Access Token to it.')

def call_api(url) -> bytes:
    """
    Calls the URL and returns the response.
    
    :param str url: The URL to call.
    """
    headers = {}
    if credentials['github_pat']:
        headers['Authorization'] = f'Bearer {credentials["github_pat"]}'
    r = requests.get(url, headers=headers)
    if r.status_code != 200:
        raise Exception(f'API r: {r.status_code}')
    return r

def get_repo_contents(owner, repo, path=''):
    api_url = f'{bk_repo_url}/{path}'
    r = call_api(api_url)
    if r.status_code == 200:
        contents = r.json()
        files = [item['name'] for item in contents if item['type'] == 'file']
        if debugging:
            print(f'Files in {owner}/{repo}/{path}:')
            for file in files:
                print(file)
        return files
    else:
        print(f'Error: {r.status_code}')
        return None

def download_items_data():
    api_url = f'{bk_repo_url}contents/data/items/items.json'
    r = call_api(api_url).json()
    download_file(r['download_url'], f'{data_dir}items.json')

    api_url = f'{bk_repo_url}contents/data/en.json'
    r = call_api(api_url).json()
    download_file(r['download_url'], f'{data_dir}en.json')

def download_item_images():
    api_url = f'{bk_repo_url}contents/data/images/'
    print(api_url)
    r = call_api(api_url).json()
    images = [x for x in r if x['type'] == 'file' and x['name'].startswith('bk') and x['name'].endswith('.png')]
    for image in images:
        download_file(image['download_url'], f'../../public/assets/images/items/items.json')

def resize_item_images():
    scalar = 0.25
    images_dir = f'../../public/assets/images/items/'
    for image in os.listdir(images_dir):
        if image.endswith('.png'):
            with open(f'{images_dir}{image}', 'r+b') as file:
                with Image.open(file) as img:
                    (width, height) = (int(img.width * scalar), int(img.height * scalar))
                    img = img.resize((width, height), resample=Image.NEAREST)
                    img.save(f'{images_dir}{image}', img.format)

def download_file(url, filename):
    r = call_api(url)
    r.raise_for_status()  # Check if the request was successful

    dir = os.path.dirname(filename)
    if not os.path.exists(dir):
        os.makedirs(dir)

    with open(filename, 'wb') as file:
        file.write(r.content)

    print(f'File "{filename}" downloaded successfully.')

def format_items_data():
    with open(f'../data/items.json', 'r') as file:
        items = json.load(file)
    with open(f'../data/en.json', 'r') as file:
        english = json.load(file)
    # Get name and pick up text from english file
    for _id in items:
        item = items[_id]
        item['file'] = f'{_id.replace(":", "_")}.png'
        if _id in english:
            item['name'] = english[_id]
        if f'{_id}_desc' in english:
            item['pickup'] = english[f'{_id}_desc']
        # Get image colors
        img = Image.open(f'../../public/assets/images/items/{item["file"]}')
        average_color = calculate_average_color(img)
        common_color = find_most_common_color(img)
        item['color'] = {
            'average': average_color,
            'common': common_color,
            'rgb': average_color,
            'hex': rgb_to_hex(average_color),
            'hsv': rgb_to_hsv(average_color),
            'scalar': rgb_to_scalar(average_color)
        }
    with open(f'{data_dir}{bk_items_file}', 'w') as file:
        json.dump(items, file, indent=4)
    print(items['bk:sword'])

def calculate_average_color(image) -> tuple:
    width, height = image.size
    total = 0
    red = 0
    green = 0
    blue = 0

    for x in range(width):
        for y in range(height):
            try:
                r, g, b, a = image.getpixel((x, y))
            except TypeError:
                r, g, b, a = (0, 0, 0, 0)

            # Skip not fully opaque pixels
            if a < 255:
                continue

            # Skip black pixels
            if r == 0 and g == 0 and b == 0:
                continue

            total += 1
            red += r
            green += g
            blue += b

    if total == 0:
        return (0, 0, 0)  # No valid pixels found

    average_red = red // total
    average_green = green // total
    average_blue = blue // total

    return (average_red, average_green, average_blue)

def find_most_common_color(image) -> tuple:
    # Convert image to RGBA mode if it's not already
    image = image.convert("RGBA")

    # Iterate over each pixel and count the occurrences of each color
    color_counter = Counter()
    width, height = image.size
    for x in range(width):
        for y in range(height):
            r, g, b, a = image.getpixel((x, y))

            # Skip fully transparent pixels
            if image.mode == "RGBA" and (r, g, b) == (0, 0, 0):
                continue

            # Skip black pixels
            if (r, g, b) == (0, 0, 0):
                continue

            color_counter[(r, g, b)] += 1

    # Find the color with the highest count
    most_common_color = color_counter.most_common(1)[0][0]
    return most_common_color

def rgb_to_hex(rgb) -> str:
    r, g, b = rgb
    hex_color = '#{:02x}{:02x}{:02x}'.format(r, g, b)
    return hex_color

def rgb_to_hsv(rgb_color) -> list:
    r, g, b = rgb_color
    r /= 255.0
    g /= 255.0
    b /= 255.0
    hsv_color = colorsys.rgb_to_hsv(r, g, b)
    h, s, v = hsv_color
    h *= 360.0
    s *= 100.0
    v *= 100.0
    return [h, s, v]

def rgb_to_scalar(color) -> float:
    # Scale the RGB values to the range [0, 1]
    r, g, b = [value / 255 for value in color]

    # Calculate the scalar value based on the color's position on the ROYGBIV scale
    max_value = max(r, g, b)
    min_value = min(r, g, b)
    chroma = max_value - min_value

    scalar = 0.0
    if chroma != 0:
        if max_value == r:
            scalar = ((g - b) / chroma) % 6 / 6
        elif max_value == g:
            scalar = ((b - r) / chroma + 2) / 6
        else:
            scalar = ((r - g) / chroma + 4) / 6

    return scalar

def main():
    # download_item_images()
    # resize_item_images()

    # download_items_data()
    format_items_data()


if __name__ == '__main__':
    main()
