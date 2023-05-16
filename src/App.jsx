import Disclaimer from "./Components/Disclaimer";
import Header from "./Components/Header";
import GamePurchase from "./Components/GamePurchase";
import ItemsManager from "./Components/ItemsManager";
import Footer from "./Components/Footer";

export default function App() {
    return (
        <div className="flex flex-col min-h-full">
            <main className="flex-1 flex flex-col">
                {/* <GamePurchase /> */}
                <Header />
                <ItemsManager />
            </main>
            <Disclaimer />
            <Footer />
        </div>
    );
}
