import Link from "next/link";
import React from "react";
import "./header.css";
import TemporaryDrawer from "./TemporaryDrawer";
import { dataList } from "./dataList";
function Header() {
  return (
    <header >
      <nav className="navbar"> 
        <TemporaryDrawer data={dataList} />
        <Link href="/" className="p-2">
          <img src="/next.svg" alt="react-icon" width={90} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
