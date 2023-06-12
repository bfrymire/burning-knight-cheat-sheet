import bkcs_logo from "../assets/image/bkcs_logo.png";

export default function Header() {
    return (
        <div className="w-full h-12 text-sm flex drop-shadow-md px-4">
            <div className="p-2">
                <a href="/">
                    <img className="max-h-full" src={bkcs_logo} alt="Burning Knight Cheat Sheet Logo" />
                </a>
            </div>
        </div>
    );
}
