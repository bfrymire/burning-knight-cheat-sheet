import { items } from "../Data/items.json";
import Item from "./Item";

export default function ItemsDisplay({ setItem }) {
    return (
        <div className="bg-slate-600 flex-1">
            <div className="text-center">
                <h1 className="text-3xl font-bold">
                    Burning Knight Cheat Sheet
                </h1>
            </div>
            <div className="p-4 flex gap-3">
                {items.map((item, index) => {
                    return (
                        <Item key={index} item={item} handleOnMouseOver={setItem} />
                    );
                })}
            </div>
        </div>
    );
}
