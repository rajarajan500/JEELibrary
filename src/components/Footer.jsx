import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="bg-[#fdf0d5] py-3  flex-col flex justify-center px-2">
        <div>
            <h1 className="text-[10px] font-bold">UG_CREATIONS</h1>
        </div>
      <div className="text-center justify-between flex flex-row">
        <Link href="" to="home" smooth={true} duration={1000}>
          <h1>Home</h1>
        </Link>
        <Link to="mat" href="" smooth={true} duration={1000}>
          <h1>math</h1>
        </Link>
        <Link to="che" href="" smooth={true} duration={1000}>
          <h1>chemistry</h1>
        </Link>
        <Link to="phy" href="" smooth={true} duration={1000}>
          <h1>Physics</h1>
        </Link>
        <Link to="pyqs" href="" smooth={true} duration={1000}>
          <h1>PYQs</h1>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
