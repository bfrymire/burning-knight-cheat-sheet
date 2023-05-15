export default function Item({ item }) {
    const handleOnHover = (e) => {

    }
    const { name, description, image } = item;
    const imageSource = `../assets/items/${image}`;
    return (
        <div className="bg-slate-800 p-5">
            <div className="relative overflow-visible">
                {/* <img className="w-full pixelate" src={imageSource} alt={name} /> */}
                <img className="absolute top-0 left-0 w-full pixelate sprite-outline hover:scale-110" src={imageSource} />
            </div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-sm">{description}</p>
        </div>
    );
}
