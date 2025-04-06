"use client";
import React from "react";
import Image from "next/image";
import deshedding from "../../public/images/deshedding.svg";
import dogcuts from "../../public/images/dogcuts.svg";
import grooming from "../../public/images/grooming.svg";
import nailclipping from "../../public/images/nailclipping.svg";
import sanitarytrims from "../../public/images/sanitarytrims.svg";
import teethcleaning from "../../public/images/teethcleaning.svg";

export default function SixCardService() {
  return (
    <section id="services-964">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Our Services</span>
          <h2 className="cs-title">Professional Care for Your Dog</h2>
          <p className="cs-text">
            We offer a full range of grooming services to keep your dog looking
            and feeling great. From deshedding to teeth cleaning, our
            experienced team provides gentle and professional care.
          </p>
        </div>
        <ul className="cs-card-group">
          <li className="cs-item">
            <Image
              className="cs-icon"
              loading="lazy"
              decoding="async"
              src={deshedding}
              alt="Deshedding"
              width="40"
              height="40"
            />
            <h3 className="cs-h3">Deshedding</h3>
            <p className="cs-item-text">
              Reduce excessive shedding and keep your dog's coat healthy with
              our thorough deshedding treatments.
            </p>
          </li>
          <li className="cs-item">
            <Image
              className="cs-icon"
              loading="lazy"
              decoding="async"
              src={grooming}
              alt="Grooming"
              width="40"
              height="40"
            />
            <h3 className="cs-h3">Grooming</h3>
            <p className="cs-item-text">
              Full-service grooming including washing, trimming, and brushing
              for a fresh and healthy coat.
            </p>
          </li>
          <li className="cs-item">
            <Image
              className="cs-icon"
              loading="lazy"
              decoding="async"
              src={teethcleaning}
              alt="Teeth Cleaning"
              width="40"
              height="40"
            />
            <h3 className="cs-h3">Teeth Cleaning</h3>
            <p className="cs-item-text">
              Keep your pup’s teeth clean and healthy with our gentle teeth
              cleaning service.
            </p>
          </li>
          <li className="cs-item">
            <Image
              className="cs-icon"
              loading="lazy"
              decoding="async"
              src={nailclipping}
              alt="Nail Clipping"
              width="40"
              height="40"
            />
            <h3 className="cs-h3">Nail Clipping</h3>
            <p className="cs-item-text">
              Prevent discomfort and injuries with regular nail trimming for
              your dog.
            </p>
          </li>
          <li className="cs-item">
            <Image
              className="cs-icon"
              loading="lazy"
              decoding="async"
              src={sanitarytrims}
              alt="Sanitary Trims"
              width="40"
              height="40"
            />
            <h3 className="cs-h3">Sanitary Trims</h3>
            <p className="cs-item-text">
              Keep your dog clean and comfortable with hygienic trims in
              sensitive areas.
            </p>
          </li>
          <li className="cs-item">
            <Image
              className="cs-icon"
              loading="lazy"
              decoding="async"
              src={dogcuts}
              alt="Dog Cuts"
              width="40"
              height="40"
            />
            <h3 className="cs-h3">Dog Cuts</h3>
            <p className="cs-item-text">
              Custom haircuts to match your dog’s breed and style preferences.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
