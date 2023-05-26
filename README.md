# Burning Knight Cheat Sheet

## Setup

The GitHub does not host the images and data used to display the items. The images and data are pulled from the [BkWikiData](https://github.com/RexcellentGames/BkWikiData).

GitHub REST API is rate limited. By providing your auth token, you're able to increase the number of requests per hour.

1. Install Python dependancies:

```bash
pip install -r ./src/scripts/requirements.txt
```

2. Create a `.env` file and add your GitHub PAT:

```
GITHUB_PAT="github_pat_xxxxxxxxxxxxxxxxxxxxxx_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

3. Run `main.py` to download images and JSON data

```bash
python ./src/scripts/main.py
```

4. Install Node Modules:

```bash
yarn install
```

\- _or_ -

```bash
npm install
```

5. You're all set!

## Attributions

- Thanks for making the item's images and data available on [BkWikiData](https://github.com/RexcellentGames/BkWikiData)
- Thanks to Taake's work on their [Burning Knight - Master Guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2138181453) helped with understanding the items
- Thanks to [Isaac Cheat Sheet - Platinum God](https://platinumgod.co.uk/) for inspiring the project
