export default function Footer() {
    const copyYear = new Date().getFullYear() || 2023;
    return (
        <footer className="p-6 container mx-auto flex flex-col text-right md:flex-row md:text-left">
            <div className="grow">
                <p className="md:text-right">
                    Created by <a href="https://brentfrymire.com/" target="_blank">Brent Frymire </a> &copy; {copyYear}
                </p>
            </div>
        </footer>
    );
}
