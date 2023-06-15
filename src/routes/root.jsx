import Modal from "../components/Modal";
import Header from "../components/Header";
import Disclaimer from "../components/Disclaimer";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className="flex flex-col min-h-full">
            <Modal />
            <main className="flex-1 flex flex-col">
                <Header />
                <Outlet />
            </main>
            <Disclaimer />
            <Footer />
        </div>
    );
}
