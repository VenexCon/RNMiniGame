"use client";
import React from "react";
import "../../styles/footer.css";
import Image from "next/image";
import Logo from "../../../public/logo/logo500.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer-1390">
      <div className="cs-container">
        <div className="cs-top">
          <a aria-label="go back to home" className="cs-logo" href="">
            <Image
              className="cs-logo-img"
              loading="lazy"
              decoding="async"
              src={Logo}
              alt="logo"
              width="209"
              height="40"
            />
          </a>
          <ul className="cs-ul">
            <li className="cs-li">
              <a href="" className="cs-link">
                Home
              </a>
            </li>
            <li className="cs-li">
              <a href="" className="cs-link">
                About
              </a>
            </li>
            <li className="cs-li">
              <a href="" className="cs-link">
                Services
              </a>
            </li>
            <li className="cs-li">
              <a href="" className="cs-link">
                Blog
              </a>
            </li>
            <li className="cs-li">
              <a href="" className="cs-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="cs-bottom">
          <ul className="cs-social">
            <li className="cs-social-li">
              <a
                href=""
                className="cs-social-link"
                aria-label="facebook"
                target="_blank"
                rel="noopener"
              >
                <Image
                  className="cs-social-icon cs-default"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-ba.svg"
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li className="cs-social-li">
              <a
                href=""
                className="cs-social-link"
                aria-label="twitter"
                target="_blank"
                rel="noopener"
              >
                <Image
                  className="cs-social-icon cs-default"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-ba.svg"
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li className="cs-social-li">
              <a
                href=""
                className="cs-social-link"
                aria-label="instagram"
                target="_blank"
                rel="noopener"
              >
                <Image
                  className="cs-social-icon cs-default"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-ba.svg"
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li className="cs-social-li">
              <a
                href=""
                className="cs-social-link"
                aria-label="twitter"
                target="_blank"
                rel="noopener"
              >
                <Image
                  className="cs-social-icon cs-default"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube-ba.svg"
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
          <span className="cs-copyright">
            © Copyright 2025 -{" "}
            <a href="" className="cs-copyright-link">
              Chester Special Paws
            </a>
          </span>
          <div className="cs-flex">
            <a href="" className="cs-copyright-link">
              Privacy Policy
            </a>
            <span className="cs-separater">|</span>
            <a href="" className="cs-copyright-link">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
