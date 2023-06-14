import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GamePurchase() {
    return (
        <motion.div
            className="absolute right-0 p-10 bg-red-600"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, type: "spring" }}
        >
            <p>
                <Link to="https://store.steampowered.com/app/851150/Burning_Knight/" rel="nofollow" target="_blank">
                    Purchase Burning Knight on Steam!
                </Link>
            </p>
        </motion.div>
    );
}
