export default function Item({ item, handleOnMouseOver }) {
    const { image } = item;
    const imageSource = `../assets/items/${image}`;

    return (
        <div className="bg-slate-500 rounded aspect-w-1 w-12 p-1" onMouseEnter={() => handleOnMouseOver({ imageSource: imageSource, ...item })} onMouseLeave={() => handleOnMouseOver({})}>
            <img className="pixelate mx-auto h-auto" src={imageSource} alt={`Item {name}`} />
        </div>
    );
}
