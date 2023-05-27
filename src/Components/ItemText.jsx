export default function ItemText({ item }) {
    const { name, pickup, id, lock, uprice } = item;

    return (
        <>
            {false && id && <p className="absolute text-sm left-1 top-0">{id}</p>}
            <h3 className="underline text-xl text-center pb-2">
                {name && name}
            </h3>
            {pickup &&
                <p className="text-sm text-center text-green-500">
                    {pickup}
                </p>
            }
            {lock && uprice > 0 &&
                <p className="text-sm text-red-500 pt-4">
                    Unlock Price: {uprice}
                </p>
            }
        </>
    );
}
