export default function Item({ item, handleOnMouseOver }) {
    const { image } = item;
    const imageSource = `../assets/items/${image}`;

    return (
        <div className="bg-slate-500 p-5 rounded" onMouseEnter={() => handleOnMouseOver({ imageSource: imageSource, ...item })} onMouseLeave={() => handleOnMouseOver({})}>
            <img className="pixelate" src={imageSource} alt={`Item {name}`} />
        </div>
    );
}
