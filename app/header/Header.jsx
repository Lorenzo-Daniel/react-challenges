import Link from "next/link";
import React from "react";
import "./header.css";
function Header() {
  return (
    <header className="header">
      <Link href="/" className="p-2">
        <img src="/next.svg" alt="react-icon" width={90} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/challenges/select-checkbox" className="nav-link">
              Select Checkbox
            </Link>
            <Link href="/challenges/text-generate" className="nav-link">
              Typewriter Effect{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
