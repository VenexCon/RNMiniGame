"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../../styles/navigationStyle.css";
import Logo from "../../../public/logo/logo150.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        document.body.classList.add("scroll");
        setIsScrolled(true);
      } else {
        document.body.classList.remove("scroll");
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      document.body.classList.toggle("cs-open", !prev);
      return !prev;
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header
      id="cs-navigation"
      ref={navbarMenuRef}
      className={isMenuOpen ? "cs-active" : ""}
    >
      <div className="cs-top-bar">
        <div className="cs-top-container">
          <div className="cs-top-contact">
            <a href="" className="cs-top-link">
              <Image
                className="cs-link-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/phone-grey.svg"
                alt="phone icon"
                width="16"
                height="16"
                aria-hidden="true"
                decoding="async"
              />
              Call us: +84 1985 33 999
            </a>
            <a href="" className="cs-top-link">
              <Image
                className="cs-link-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/clock-grey.svg"
                alt="clock icon"
                width="20"
                height="20"
                aria-hidden="true"
                decoding="async"
              />
              Opening hours: Mon - Sat: 8:00am To 9:00pm
            </a>
          </div>
        </div>
      </div>
      <div className="cs-container">
        <a href="/" className="cs-logo" aria-label="back to home">
          <Image
            src={Logo}
            alt="logo"
            width="197"
            height="197"
            aria-hidden="true"
            decoding="async"
          />
        </a>

        <nav className="cs-nav" role="navigation">
          <button
            className={`cs-toggle ${isMenuOpen ? "cs-active" : ""}`}
            onClick={toggleMenu}
            role="button"
            tabIndex="0"
            aria-label="mobile menu toggle"
          >
            <div className="cs-box" aria-hidden="true">
              <span className="cs-line cs-line1" aria-hidden="true"></span>
              <span className="cs-line cs-line2" aria-hidden="true"></span>
              <span className="cs-line cs-line3" aria-hidden="true"></span>
            </div>
          </button>

          <div className={`cs-ul-wrapper ${isMenuOpen ? "cs-active" : ""}`}>
            <ul
              id="cs-expanded"
              className="cs-ul"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <li className="cs-li">
                <a href="/" className="cs-li-link cs-active">
                  Home
                </a>
              </li>
              <li className="cs-li">
                <a href="/about" className="cs-li-link">
                  About
                </a>
              </li>
              <li
                className={`cs-li cs-dropdown ${
                  isDropdownOpen ? "cs-active" : ""
                }`}
              >
                <span className="cs-li-link" onClick={toggleDropdown}>
                  Services
                  <Image
                    className="cs-drop-icon"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/chev-down.svg"
                    alt="dropdown icon"
                    width="15"
                    height="15"
                    decoding="async"
                    aria-hidden="true"
                  />
                </span>
                <ul
                  className={`cs-drop-ul ${isDropdownOpen ? "cs-active" : ""}`}
                >
                  <li className="cs-drop-li">
                    <a href="#" className="cs-li-link cs-drop-link">
                      Housing
                    </a>
                  </li>
                  <li className="cs-drop-li">
                    <a href="#" className="cs-li-link cs-drop-link">
                      Food Banks
                    </a>
                  </li>
                </ul>
              </li>
              <li className="cs-li">
                <a href="/blog" className="cs-li-link">
                  Blog
                </a>
              </li>
              <li className="cs-li">
                <a href="/contact" className="cs-li-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <a href="/contact" className="cs-button-solid cs-nav-button">
          Contact Us
        </a>
      </div>
    </header>
  );
}
