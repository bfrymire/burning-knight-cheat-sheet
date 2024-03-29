import ItemText from "./ItemText";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../features/modal/modalSlice";
import { motion } from "framer-motion";
import itemShadow from "../assets/images/item_shadow.png";

export default function Modal() {
    const show = useSelector((state) => state.modal.show);
    const item = useSelector((state) => state.modal.item);
    const dispatch = useDispatch();

    return (
        <div
            className={`fixed flex items-center p-4 left-0 top-0 right-0 bottom-0 p10 z-10 inset-0 overflow-y-auto bg-[#0000009e] ${show ? "block" : "hidden"}`}
            onClick={() => dispatch(hideModal())}
        >
            <div
                className="p-10 max-w-screen mx-auto rounded bg-slate-700 drop-shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                {item &&
                    <div className="flex gap-10">
                        <div className="">
                            <ItemText item={item} />
                        </div>
                        <div className="flex-col items-center justify-center">
                            <div className="relative">
                                <motion.img
                                    className="relative z-20 pixelate"
                                    src={item.imageSource}
                                    alt={`${item.name}`}
                                    animate={{
                                        rotate: [0, 20, 0, -20, 0],
                                        y: [0, -45, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <img className="mx-auto opacity-50 pixelate" src={itemShadow} alt="Item Shadow" />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
