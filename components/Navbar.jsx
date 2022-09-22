import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">EliteX</Link>
      </p>
      <button type="button" className="cart-icon" onClick={() => console.log("clicked")}>
        <AiOutlineShopping />
      </button>
    </div>
  );
};

export default Navbar;
