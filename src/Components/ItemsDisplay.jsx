import { useState, useEffect } from "react";
import itemsData from "../data/items.json";
import Item from "./Item";

export default function ItemsDisplay() {
    const itemTypes = [1, 6, 7, 10];
    const itemsBlacklist = ["bk:the_sword", "bk:pouch"];
    const [items, setItems] = useState([]);
    const [gap, setGap] = useState(16);

    useEffect(() => {
        // Convert keys to an array of objects
        const convertedItems = Object.keys(itemsData).map((key) => ({
            id: key,
            ...itemsData[key],
        }));

        const filteredTypes = convertedItems.filter((item) => !item.type || itemTypes.includes(item.type));
        const filteredBlacklist = filteredTypes.filter((item) => !itemsBlacklist.includes(item.id));
        const sortedColor = filteredBlacklist.sort((a, b) => a.color.hsv[0] < b.color.hsv[0]);

        setItems(sortedColor);
        console.log("Number of items:", sortedColor.length);
    }, [gap]);

    return (
        <div className="bg-slate-600 flex-1">
            <div className="text-center">
                <h1 className="text-3xl font-bold">
                    Burning Knight Cheat Sheet
                </h1>
            </div>
            <div
                className="p-4 flex flex-wrap"
                style={{ gap: `${gap}px` }} // Set the gap dynamically using inline style
            >
                {items.map((item, index) => {
                    return (
                        <Item key={index} item={item} />
                    );
                })}
            </div>
        </div>
    );
}
