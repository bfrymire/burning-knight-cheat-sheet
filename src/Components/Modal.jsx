import { useEffect } from "react";
import ItemText from "./ItemText";

export default function Modal() {
    return (
        <div className="fixed flex items-center left-0 top-0 right-0 bottom-0 p10 z-10 inset-0 overflow-y-auto bg-[#0000009e]">
            <div className="p-10 w-[90%] sm:w-[65%] mx-auto rounded bg-slate-700 drop-shadow-xl">
                {/* <h1 className="underline text-xl text-center pb-2">TEST</h1> */}
                {/* <p className="text-sm text-center text-green-500">DESCRIPTION</p> */}
                <ItemText item={{name:"test"}} />
            </div>
        </div>
    );
}
