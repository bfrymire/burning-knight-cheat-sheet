import { Link } from "react-router-dom";

export default function Footer() {
    const copyYear = new Date().getFullYear() || 2023;
    return (
        <footer className="p-6 container mx-auto flex flex-col text-right md:flex-row">
            <div className="grow">
                <p className="md:text-left">
                    <Link to="https://github.com/bfrymire/burning-knight-cheat-sheet">
                        Source code available on GitHub
                    </Link>
                </p>
            </div>
            <div className="grow">
                <p>
                    Created by <Link to="https://brentfrymire.com/" target="_blank">Brent Frymire </Link> &copy; {copyYear}
                </p>
            </div>
        </footer>
    );
}
