export default function Item({ item, handleOnMouseOver }) {
    const { id, name, description, color, file, image, pool, quality } = item;
    const imageSource = `/assets/images/items/${file}`;

    return (
        <div
            className="h-12 p-0 flex items-center"
            onMouseEnter={() => handleOnMouseOver({ imageSource: imageSource, ...item })}
            onMouseLeave={() => handleOnMouseOver({})}
        >
            <img
                className="pixelate max-h-full"
                src={imageSource}
                alt={`Item ${name}`}
            />
        </div>
    );
}
