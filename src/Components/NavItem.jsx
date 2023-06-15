import { NavLink } from "react-router-dom";

export default function NavItem({ href, isActive, children }) {
    return (
        <div className="p-2 flex items-center">
            <NavLink to={href} className={({ isActive, isPending }) => `w-full h-full ${isActive ? 'font-bold' : ''}`}>
                {children}
            </NavLink>
        </div>
    );
}
