import { NavLink, Link } from "react-router-dom";
import NavItem from "./NavItem"
import bkcs_logo from "../assets/images/bkcs_logo.png";

const styles = {
    logoContainer: "flex items-center",
    logo: "pixelate h-10 w-auto"
};

export default function Header() {
    return (
        <nav className="w-full h-12 text-sm flex drop-shadow-md px-4">
            <div className="p-2 flex items-center pr-12">
                <Link to="/">
                    <img className="pixelate h-10 w-auto" src={bkcs_logo} alt="Burning Knight Cheat Sheet Logo" />
                </Link>
            </div>
            <NavItem href="/">
                Home
            </NavItem>
            <NavItem href="/about">
                About
            </NavItem>
            {/* <div className={styles.nav}>
                <NavLink to="/" className={styles.navLink}>
                    Home
                </NavLink>
            </div>
            <div className={styles.nav}>
                <NavLink to="/about" className={styles.navLink}>
                    About
                </NavLink>
            </div> */}
        </nav>
    );
}
