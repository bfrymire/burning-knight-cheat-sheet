import { useState } from "react";
import Sidebar from "./Sidebar";
import ItemsDisplay from "./ItemsDisplay";

export default function ItemsManager() {
    const [item, setItem] = useState({});

    return (
        <div className="flex flex-1">
            <Sidebar item={item} />
            <ItemsDisplay setItem={setItem} />
        </div>
    );
}
