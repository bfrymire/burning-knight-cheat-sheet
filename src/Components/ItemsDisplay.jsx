import { items } from "../Data/items.json";
import Item from "./Item";

export default function ItemsDisplay() {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                {items.map((item, index) => {
                    return (
                        <Item key={index} item={item} />
                    );
                })}
            </div>
        </div >
    );
}
