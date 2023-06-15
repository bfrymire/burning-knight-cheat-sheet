const removePickupFormatting = (pickup) => {
    let pickupText = pickup;
    const formats = ["^^", "##", "%%"];
    for(let i = 0; i < formats.length; i++) {
        pickupText = pickupText.split(formats[i]).join("");
    }
    return pickupText;
}

export default function ItemText({ item }) {
    const { name, pickup, id, lock, uprice } = item;
    const pickupText = pickup ? removePickupFormatting(pickup) : "";

    return (
        <>
            {false && id && <p className="absolute text-sm left-1 top-0">{id}</p>}
            <h3 className="underline text-xl text-center pb-2">
                {name && name}
            </h3>
            {pickupText &&
                <p className="text-sm text-center text-green-500">
                    "{pickupText}"
                </p>
            }
            {lock && uprice > 0 &&
                <p className="text-sm pt-4">
                    Unlock Price: <img className="inline-block pixelate h-6" src="../../assets/images/items/bk_emerald.png" alt="Emerald" /> <span className="text-red-500">{uprice}</span>
                </p>
            }
        </>
    );
}
