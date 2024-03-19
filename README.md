<div align="center" style="margin-bottom:2.5rem;">
    <img src="./LOGO.png" style="margin:auto;" alt="BKCS Logo">
</div>

<h1 align="center">
    Burning Knight Cheat Sheet
</h1>

<p align="center">
   Burning Knight Cheat Sheet is an interactive item wiki to be used alongside the game Burning Knight.
</p>

## Setup

The Burning Knight item images and data are pulled from the [BkWikiData](https://github.com/RexcellentGames/BkWikiData).

GitHub REST API is rate limited. By providing your auth token, you're able to increase the number of requests per hour.

Click to learn more about [GitHub's Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

1. Create a `.env` file and add your GitHub Personal Access Token:

```
GITHUB_PAT=""
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
yarn preview
```

## Attributions

- Thanks to [Egor Dorichev](https://github.com/egordorichev) for making the items' images and data available on [BkWikiData](https://github.com/RexcellentGames/BkWikiData)
- Thanks to Taake for their [Burning Knight - Master Guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2138181453) that helped in understanding the items
- Thanks to [Isaac Cheat Sheet - Platinum God](https://platinumgod.co.uk/) for inspiring the project

## Disclaimer

Burning Knight Cheat Sheet is not endorced or affiliated with the game Burning Knight, developer [Rexcellent Games](https://rexcellentgames.com/), or publisher [2Awesome Studio](https://www.2awesomestudio.com/).

All images and data are property of their respective owners.
