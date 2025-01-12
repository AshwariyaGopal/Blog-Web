"use client"
import Link from "next/link";
import { useState } from "react"; // State for toggling menu

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  // Function to handle link click (close the menu)
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-white border-b-2 border-black flex items-center z-10">
      {/* Hamburger Icon (Visible on Mobile only) */}
      <button
        className="block lg:hidden text-2xl text-black ml-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu
      >
        &#9776; {/* Three vertical lines icon */}
      </button>

      {/* Logo (Fashion Store) */}
      <div className="ml-28 lg:ml-20">
        <Link href="/#">
          <h1 className="font-bold text-xl text-black">
            FASHION <br /> STORE
          </h1>
        </Link>
      </div>

      {/* Navbar Links */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-20 left-0 w-full bg-white border-t-2 border-black lg:border-none lg:static lg:w-auto lg:flex lg:ml-auto lg:mr-40`}
      >
        <ul className="flex flex-col lg:flex-row gap-6 lg:gap-12 font-semibold p-4 lg:p-0">
          <li className="text-gray-700">
            <Link href="/#" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="text-gray-700">
            <Link href="/About" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li className="text-gray-700">
            <Link href="/Blog" onClick={handleLinkClick}>
              Blogs
            </Link>
          </li>
          <li className="text-gray-700">
            <Link href="/Contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          <li className="text-gray-700">
            <Link href="/FAQ" onClick={handleLinkClick}>
              FAQ
            </Link>
          </li>
        </ul>
      </nav>

      {/* Search Box (Hidden on Mobile, Visible on Larger Screens) */}
      <div className="hidden lg:block xl:w-80 xl:h-10 rounded-[40px] bg-gray-50 lg:mr-10 xl:mr-20">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 pl-6"
        />
      </div>
    </div>
  );
}
