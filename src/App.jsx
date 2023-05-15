// import './App.css'
import Disclaimer from './Components/Disclaimer';
import Header from './Components/Header';
import GamePurchase from './Components/GamePurchase';
import ItemsDisplay from './Components/ItemsDisplay';

export default function App() {
    return (
        <div className="flex flex-col min-h-full w-full">
            <div className="flex-1">
                <main>
                    {/* <GamePurchase /> */}
                    <Header />
                    <div className="text-center py-2">
                        <h1 className="text-3xl font-bold">
                            Burning Knight Cheat Sheet
                        </h1>
                    </div>
                    <ItemsDisplay />
                </main>
            </div>
            <Disclaimer />
        </div>
    );
}
