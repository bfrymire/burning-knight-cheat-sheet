# Burning Knight Cheat Sheet

## Setup

Burning Knight Cheat Sheet Git does not host the images and data used to display the items. The images and data are pulled from the [BkWikiData](https://github.com/RexcellentGames/BkWikiData).

GitHub REST API is rate limited. By providing your auth token, you're able to increase the number of requests per hour.

1. Create a `.env` file and add your GitHub PAT:

```
GITHUB_PAT="github_pat_xxxxxxxxxxxxxxxxxxxxxx_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

2. Install Python dependancies. It's recommended to use a virtual environment like `venv` or `virtualenv`:

```bash
pip install -r ./src/scripts/requirements.txt
```

3. Run `main.py` to download images and JSON data:

```bash
python ./src/scripts/main.py
```

4. Install Node Modules:

```bash
yarn install
```

5. You're all set!

```bash
npm run preview
```

## Attributions

- Thanks to [Egor Dorichev](https://github.com/egordorichev) for making the items' images and data available on [BkWikiData](https://github.com/RexcellentGames/BkWikiData)
- Thanks to Taake for their [Burning Knight - Master Guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2138181453) that helped in understanding the items
- Thanks to [Isaac Cheat Sheet - Platinum God](https://platinumgod.co.uk/) for inspiring the project

## Disclaimer

Burning Knight Cheat Sheet is not endorced or affiliated with the game Burning Knight, developer [Rexcellent Games](https://rexcellentgames.com/), or publisher [2Awesome Studio](https://www.2awesomestudio.com/).

All images and data are property of their respective owners.
