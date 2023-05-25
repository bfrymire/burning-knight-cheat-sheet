export default function Sidebar({ item }) {
    const { name, description, id, color, lock, uprice } = item;

    return (
        <div className="bg-slate-800 w-48 md:w-64 p-4 flex-initial relative">
            <div className="sticky top-4 left-0 right-0">
                {false && id && <p className="absolute text-sm left-1 top-0">{id}</p>}
                <h3 className="underline text-xl text-center pb-2">
                    {name && name}
                </h3>
                {description &&
                    <p className="text-sm text-center text-green-500">
                        {description}
                    </p>
                }
                {lock && uprice > 0 &&
                    <p className="text-sm text-red-500 pt-4">
                        Unlock Price: {uprice}
                    </p>
                }
            </div>
        </div>
    );
}
