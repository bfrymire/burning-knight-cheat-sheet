import Modal from "./components/Modal";
import Header from "./components/Header";
import Disclaimer from "./components/Disclaimer";
import ItemsManager from "./components/ItemsManager";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="flex flex-col min-h-full">
            <Modal/>
            <main className="flex-1 flex flex-col">
                <Header />
                <ItemsManager />
            </main>
            <Disclaimer />
            <Footer />
        </div>
    );
}
