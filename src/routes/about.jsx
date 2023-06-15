import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="container mx-auto p-10">
            <div className="pb-5">
                <h1 className="text-xl">About</h1>
                <p>
                    Burning Knight Cheat Sheet is an interactive item wiki to be used alongside the game Burning Knight. Just hover over an item to display info about it in the box to the left.
                </p>
            </div>
            <div className="pb-5">
                <h1 className="text-xl">Attributions</h1>
                <p>
                    <ul>
                        <li>
                            <Link to="https://github.com/egordorichev" rel="nofollow" target="_blank">Egor Dorichev</Link> for making the items' images and data available on <Link to="https://github.com/RexcellentGames/BkWikiData" rel="nofollow" target="_blank">BkWikiData</Link>.
                        </li>
                        <li>
                            Taake for their <Link to="https://steamcommunity.com/sharedfiles/filedetails/?id=2138181453" rel="nofollow" target="_blank">Burning Knight - Master Guide</Link> that helped in understanding the items.
                        </li>
                        <li>
                            <Link to="https://platinumgod.co.uk/" rel="nofollow" target="_blank">Isaac Cheat Sheet - Platinum God</Link> for inspiring the project.
                        </li>
                    </ul>
                </p>
            </div>
            <div className="pb-5">
                <h1 className="text-xl">Notice an issue with an item?</h1>
                <p>
                    The items are a combination from <i>BkWikiData</i>, <i>Burning Knight - Master Guide</i>, and my own playthroughs. There may be issues with item descriptions. If you spot something's wrong, <Link to="https://github.com/bfrymire/burning-knight-cheat-sheet/issues/new" target="_blank">open an issue</Link> on the GitHub.
                </p>
            </div>
        </div>
    );
}
