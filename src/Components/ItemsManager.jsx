import Sidebar from "./Sidebar";
import ItemsDisplay from "./ItemsDisplay";

export default function ItemsManager() {
    return (
        <div className="flex flex-1">
            <Sidebar />
            <ItemsDisplay />
        </div>
    );
}
