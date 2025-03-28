import React from "react";
import Image from "next/image";
import "../../styles/heroIndex.css";
import HeroImage from "../../../public/images/heroImage.jpg";

export default function HeroIndex() {
  return (
    <section id="hero-408">
      <div className="cs-container">
        <div className="cs-content">
          <h2 className="cs-title">
            <span className="cs-color">Chester Special Paws</span> for your best
            friend
          </h2>
          <p className="cs-text">The best place to give your pooch a pamper.</p>
          <a href="" className="cs-button-solid">
            Contact
          </a>
          <a href="" className="cs-button-transparent">
            Our Services
          </a>
          <span className="cs-header">
            Trusted by: <span>100+ Pooches!</span>
          </span>
          <div className="cs-logo-group"></div>
        </div>
        <div className="cs-stat-group">
          <picture className="cs-background">
            <Image
              src={HeroImage}
              alt="leaves"
              width={842}
              height={737}
              loading="lazy"
              decoding="async"
              aria-hidden="true"
              style={{ width: "100%", height: "auto" }}
            />
          </picture>
          <div className="cs-stat-box">
            <span className="cs-stat">
              112
              <span className="cs-desc">Pooches Pampered</span>
            </span>
          </div>
          <div className="cs-stat-box">
            <span className="cs-stat">
              5/5
              <span className="cs-desc">Google Rating</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
