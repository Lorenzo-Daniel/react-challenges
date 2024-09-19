import Link from "next/link";
import React from "react";
import { FaReact } from "react-icons/fa";



import "./header.css";
import TemporaryDrawer from "./TemporaryDrawer";
import { dataList } from "./dataList";
function Header() {
  return (
    <header className="w-full  bg-gray-800 text-white h-16">
      <nav className=" flex items-center justify-start text-white h-full">
        <TemporaryDrawer data={dataList} />
        <Link href="/" className="p-2">
        <FaReact color={'white'} size={40}/>
          {/* <img src="/next.svg" alt="react-icon" width={90} /> */}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
