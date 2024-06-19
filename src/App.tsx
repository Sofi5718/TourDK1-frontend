import { Route, Routes } from "react-router-dom";
import NavBar from "./Componets/NavBar";
//import ProductForm from "./Componets/ProductForm";
//import ProductList from "./Componets/ProductList";
import RidersList from "./Componets/RidersList";

export default function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={"hello"} />
                <Route path="riders" element={<RidersList />} />
            </Routes>
        </div>
    );
}
