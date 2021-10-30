import React from "react";
import Navbar from "./navbar/Navbar"
import Tagline from "./tagline/Tagline";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Tagline />
      </div>
    </div>
  )
}

export default Header;