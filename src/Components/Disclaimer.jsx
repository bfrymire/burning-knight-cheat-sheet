import { Link } from "react-router-dom";

export default function Disclaimer() {
    return (
        <div className="container mx-auto text-center p-6">
            <p>
                Burning Knight Cheat Sheet is not endorced or affiliated with the game Burning Knight,
                developer <Link to="https://rexcellentgames.com/" rel="nofollow" target="_blank">Rexcellent Games</Link>,
                or publisher <Link to="https://www.2awesomestudio.com/" rel="nofollow" target="_blank">2Awesome Studio</Link>.
            </p>
            <p>
                All images and data are property of their respective owners.
            </p>
        </div>
    );
}
