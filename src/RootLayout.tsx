import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/cartContext";


export default function RootLayout() {
  return (
    <CartProvider>
         <Navbar />
         <Outlet />
    </CartProvider>
  )
}
