export default function Footer() {
    const copyYear = new Date().getFullYear() || 2023;
    return (
        <footer className="p-6 container mx-auto flex flex-col text-right md:flex-row">
            <div className="grow">
                <p className="md:text-left">
                    <a href="https://github.com/bfrymire/burning-knight-cheat-sheet">
                        Source code available on GitHub
                    </a>
                </p>
            </div>
            <div className="grow">
                <p>
                    Created by <a href="https://brentfrymire.com/" target="_blank">Brent Frymire </a> &copy; {copyYear}
                </p>
            </div>
        </footer>
    );
}
