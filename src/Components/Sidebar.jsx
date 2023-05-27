import { useSelector } from "react-redux";
import ItemText from "./ItemText";

export default function Sidebar() {
    const item = useSelector((state) => state.item.activeItem);
    return (
        <div className="bg-slate-800 w-48 md:w-64 p-4 flex-initial relative hidden sm:block">
            <div className="sticky top-4 left-0 right-0">
                {item && <ItemText item={item} />}
            </div>
        </div>
    );
}
