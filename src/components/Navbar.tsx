import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import Logo from "../assets/amazon.png";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  return (
    <header className="flex justify-between bg-black text-white p-2 text-center">
      <div>
        <img src={Logo} alt="logo" className="w-40" />
      </div>
      <div>
        <form action="">
          <fieldset>
            <input type="text" />
            <button>Seacrh</button>
          </fieldset>
        </form>
      </div>
      <div>cart</div>
    </header>
  );
}

