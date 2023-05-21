import os
import json

import requests
from ratelimit import limits, sleep_and_retry
from PIL import Image


from credentials import credentials


ONE_MINUTE = 60

data_dir = '../Data/'
git_api_url = 'https://api.github.com/'
bk_owner = 'RexcellentGames'
bk_repo = 'BkWikiData'
bk_repo_url = f'{git_api_url}repos/{bk_owner}/{bk_repo}/'
bk_repo_data_url = f'{bk_repo_url}data/'
bk_repo_items_url = f'{bk_repo_data_url}items/'
bk_repo_images_url = f'{bk_repo_data_url}images/'
bk_items_file = 'items.json'

debugging = True


def create_credentials_file():
    with open('./credentials.py', 'w') as file:
        file.write('credentials = {\n')
        file.write('    "github_pat": ""\n')
        file.write('}')
    print('Created credentials.py file. Please add your GitHub PAT to it.')

# @sleep_and_retry
# @limits(calls=15, period=ONE_MINUTE)
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
    download_file(f'{bk_repo_url}data/items/{bk_items_file}', f'{data_dir}{bk_items_file}')

def download_item_images():
    api_url = f'{bk_repo_url}contents/data/images/'
    print(api_url)
    r = call_api(api_url).json()
    images = [x for x in r if x['type'] == 'file' and x['name'].startswith('bk') and x['name'].endswith('.png')]
    i = 0
    for image in images:
        download_file(image['download_url'], f'{data_dir}images/{image["name"].replace("bk:", "bk_")}')
        i += 1
        if i >= 5:
            break

def resize_item_images():
    scalar = 0.25
    images_dir = f'{data_dir}/images/'
    for image in os.listdir(images_dir):
        if image.endswith('.png'):
            with open(f'{images_dir}{image}', 'r+b') as file:
                with Image.open(file) as img:
                    (width, height) = (int(img.width * scalar), int(img.height * scalar))
                    img.Resampling = Image.NEAREST
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

def main():
    download_items_data()
    download_item_images()
    resize_item_images()

if __name__ == '__main__':
    main()
