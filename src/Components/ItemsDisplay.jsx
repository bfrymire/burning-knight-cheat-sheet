import { useState, useEffect } from "react";
import itemsData from "../data/items.json";
import Item from "./Item";

export default function ItemsDisplay({ setItem }) {
    const itemTypes = [1, 6, 7, 10];
    const itemsBlacklist = ["bk:the_sword"];
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Convert keys to an array of objects
        const convertedItems = Object.keys(itemsData).map((key) => ({
            id: key,
            ...itemsData[key],
        }));

        const filteredTypes = convertedItems.filter((item) => !item.type || itemTypes.includes(item.type));
        const filteredBlacklist = filteredTypes.filter((item) => !itemsBlacklist.includes(item.id));
        const sortedAlphabetically = filteredBlacklist.sort((a, b) => a.id > b.id);
        // const sortedColor = sortedAlphabetically.sort((a, b) => a.color.rgb < b.color.rgb);
        const sortedColor = sortedAlphabetically.sort((a, b) => a.color.hsv[0] < b.color.hsv[0]);

        setItems(sortedColor);
        console.log("Number of items:", sortedColor.length);
    }, []);

    return (
        <div className="bg-slate-600 flex-1">
            <div className="text-center">
                <h1 className="text-3xl font-bold">
                    Burning Knight Cheat Sheet
                </h1>
            </div>
            <div className="p-4 flex flex-wrap gap-3">
                {items.map((item, index) => {
                    return (
                        <Item key={index} item={item} handleOnMouseOver={setItem} />
                    );
                })}
            </div>
        </div>
    );
}
