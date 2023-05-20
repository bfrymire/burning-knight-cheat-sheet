export default function Sidebar({ item }) {
    const { name, description, image } = item;

    return (
        <div className="bg-slate-800 w-72 p-4 flex-initial">
            <h3 className="underline text-xl text-center pb-2">
                {name && name}
            </h3>
            <p className="text-sm">
                {description && description}
            </p>
        </div>
    );
}
