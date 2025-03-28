"use client";
import Image from "next/image";
import React from "react";
import "../../styles/sidebysideone.css";

export default function SidebySideOne() {
  return (
    <section id="sbs-1125">
      <div className="cs-container">
        {/* <!-- Left Image Section --> */}
        <div className="cs-image-group">
          {/* <!--Main Image--> */}
          <picture className="cs-picture cs-picture1">
            <source
              media="(max-width: 600px)"
              srcSet="https://images.unsplash.com/photo-1625277743460-43716b93507a?w=600&auto=format&fit=crop&q=60"
            />
            <source
              media="(min-width: 601px)"
              srcSet="https://images.unsplash.com/photo-1625277743460-43716b93507a?w=600&auto=format&fit=crop&q=60"
            />
            <Image
              loading="lazy"
              decoding="async"
              src="https://images.unsplash.com/photo-1625277743460-43716b93507a?w=600&auto=format&fit=crop&q=60"
              alt="Professional dog groomer"
              width="657"
              height="676"
              aria-hidden="true"
            />
          </picture>
        </div>
        {/* <!-- Right Content Section--> */}
        <div className="cs-content">
          <span className="cs-topper">Premium Dog Grooming</span>
          <h2 className="cs-title">
            Professional Care for Happy, Healthy Dogs
          </h2>
          <p className="cs-text">
            We provide expert dog grooming services tailored to your pet’s
            needs. From a refreshing wash to full grooming and teeth cleaning,
            we ensure every pup looks and feels their best.
          </p>
          <ul className="cs-ul">
            <li className="cs-li">
              Gentle and stress-free grooming experience
            </li>
            <li className="cs-li">Coat trimming and styling for all breeds</li>
            <li className="cs-li">Deep cleaning and deshedding treatments</li>
            <li className="cs-li">
              Teeth cleaning for fresh breath and oral health
            </li>
          </ul>
          <a
            className="cs-button-solid"
            aria-label="learn more about our grooming services"
            href="/services"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
