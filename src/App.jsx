import Disclaimer from "./components/Disclaimer";
import Header from "./components/Header";
import GamePurchase from "./components/GamePurchase";
import ItemsManager from "./components/ItemsManager";
import Footer from "./components/Footer";

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
