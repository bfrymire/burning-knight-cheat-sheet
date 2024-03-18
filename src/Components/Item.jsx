import { useDispatch } from "react-redux";
import { setItem, clearItem } from "../features/item/itemSlice";
import { showModal, setModalItem } from "../features/modal/modalSlice";

export default function Item({ item }) {
    const { name, file } = item;
    const imageSource = `/assets/images/items/${file}`;
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch(setItem({ item: { imageSource: imageSource, ...item } }));
        dispatch(setModalItem({ item: { imageSource: imageSource, ...item } }));
        dispatch(showModal());
    }

    return (
        <div
            className="h-12 p-0 flex items-center hover:cursor-pointer"
            onMouseEnter={() => dispatch(setItem({ item: { imageSource: imageSource, ...item } }))}
            onClick={() => dispatch(() => { handleOnClick() })}
            onMouseLeave={() => dispatch(clearItem())}
        >
            <img
                className="pixelate max-h-full"
                src={imageSource}
                alt={`xItem ${name}`}
            />
        </div>
    );
}
