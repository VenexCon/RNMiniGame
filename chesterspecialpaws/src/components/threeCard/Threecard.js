"use client";
import React from "react";
import Image from "next/image";
import "../../styles/threecardStyles.css";
import dogIcon from "../../../public/icons/dog.svg";
import waterIcon from "../../../public/icons/droplets.svg";
import washIcon from "../../../public/icons/shower-head.svg";

export default function Threecard() {
  return (
    <section id="services-1117">
      <div className="cs-container">
        <ul className="cs-card-group">
          <li className="cs-item">
            <div className="cs-image-group">
              <Image
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src={dogIcon}
                alt="Grooming Icon"
                width="78"
                height="78"
              />
            </div>
            <div className="cs-flex">
              <h2 className="cs-h2">Full Grooming</h2>
              <p className="cs-item-text">
                A professional trim, brush, and style tailored to your dog’s
                breed and needs.
              </p>
            </div>
          </li>
          <li className="cs-item">
            <div className="cs-image-group">
              <Image
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src={washIcon}
                alt="Washing Icon"
                width="48"
                height="48"
              />
            </div>
            <div className="cs-flex">
              <h2 className="cs-h2">Dog Washing</h2>
              <p className="cs-item-text">
                A gentle wash with premium shampoos to keep your pup clean and
                fresh.
              </p>
            </div>
          </li>
          <li className="cs-item">
            <div className="cs-image-group">
              <Image
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src={waterIcon}
                alt="Teeth Cleaning Icon"
                width="48"
                height="48"
              />
            </div>
            <div className="cs-flex">
              <h2 className="cs-h2">Teeth Cleaning</h2>
              <p className="cs-item-text">
                Help maintain your dog's oral health with our gentle, thorough
                teeth cleaning service.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
