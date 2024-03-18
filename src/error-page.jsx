import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import burningKnightLost from "./assets/images/burning-knight-lost.png";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="container mx-auto flex flex-col min-h-full justify-center items-center text-center">
            <div>
                <img src={burningKnightLost} className="w-full pixelate p-5 pb-8" alt="Burning Knight goblin sitting in a deserted place feeling lost" />
                <h1 className="text-3xl pb-5">Oops!</h1>
                <p className="pb-3">
                    Sorry, an unexpected error has occurred.
                </p>
                <p className="pb-3 opacity-60">
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to="/">
                    Go back somewhere safe!
                </Link>
            </div>
        </div>
    );
}
