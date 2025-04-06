"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../../styles/navigationStyle.css";
import Logo from "../../../public/logo/logo150.png";
import Link from "next/link";

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
            <Link href="/" className="cs-top-link">
              <Image
                className="cs-link-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/phone-grey.svg"
                alt="phone icon"
                width="16"
                height="16"
                aria-hidden="true"
                decoding="async"
              />
              Call us: 07518 56 20 27
            </Link>
            <Link href="" className="cs-top-link">
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
            </Link>
          </div>
        </div>
      </div>
      <div className="cs-container">
        <Link href="/" className="cs-logo" aria-label="back to home">
          <Image
            src={Logo}
            alt="logo"
            width="197"
            height="197"
            aria-hidden="true"
            decoding="async"
          />
        </Link>

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
                <Link href="/" className="cs-li-link cs-active">
                  Home
                </Link>
              </li>
              <li className="cs-li">
                <Link href="#sbs-1125" className="cs-li-link">
                  About
                </Link>
              </li>
              {/* <li
                className={`cs-li cs-dropdown ${
                  isDropdownOpen ? "cs-active" : ""
                }`}
              > */}
              <li className="cs-li">
                <Link href="#services-964" className="cs-li-link">
                  Services
                </Link>
              </li>
              {/*  <ul
                  className={`cs-drop-ul ${isDropdownOpen ? "cs-active" : ""}`}
                >
                  <li className="cs-drop-li">
                    <Link href="#" className="cs-li-link cs-drop-link">
                      Housing
                    </Link>
                  </li>
                  <li className="cs-drop-li">
                    <Link href="#" className="cs-li-link cs-drop-link">
                      Food Banks
                    </Link>
                  </li>
                </ul>
              </li> */}
              {/* <li className="cs-li">
                <Link href="/blog" className="cs-li-link">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
        <Link href="#contact-1105" className="cs-button-solid cs-nav-button">
          Contact Us
        </Link>
      </div>
    </header>
  );
}
