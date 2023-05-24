export default function Item({ item, handleOnMouseOver }) {
    const { id, name, description, color, file, image, pool, quality } = item;
    const imageSource = `/assets/images/items/${file}`;

    return (
        <div
            className="w-24 h-24 p-1 flex justify-center"
            onMouseEnter={() => handleOnMouseOver({ imageSource: imageSource, ...item })}
            onMouseLeave={() => handleOnMouseOver({})}
        >
            <img
                className="pixelate mx-auto aspect-auto"
                src={imageSource}
                alt={`Item ${name}`}
            />
        </div>
    );
}
