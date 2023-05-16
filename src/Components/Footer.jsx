export default function Footer() {
    const copyYear = new Date().getFullYear() || 2023;
    return (
        <footer className="p-6 container mx-auto flex">
            <div className="grow">
                <p>&copy; {copyYear}. All Rights Reserved.</p>
            </div>
            <div className="grow">
                <p className="md:text-right">
                    Created by <a href="https://brentfrymire.com/" target="_blank">Brent Frymire</a>
                </p>
            </div>
        </footer>
    );
}
