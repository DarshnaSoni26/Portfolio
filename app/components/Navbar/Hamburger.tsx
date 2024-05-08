"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false); // Add a state to track menu state

  const closeMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };
  return (
    <>
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={menuOpen}
        />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn drawer-button"
            style={{ background: "rgba(168, 128, 128, 1)" }}
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-8 h-8 text-white animate__animated animate__fadeInLeft"
              id="hamburgerIcon"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </label>
        </div>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul
            className={`menu p-4 w-80 min-h-full bg-red-50 text-black text-xl ${
              menuOpen ? "block" : "hidden" // Show/hide menu based on menuOpen
            }`}
          >
            <li onClick={closeMenu}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#about">About</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#skills">Skills</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#projects">Projects</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#contact">Contacts</Link>
            </li>
            <li>
              <Link href="../../Resume">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
