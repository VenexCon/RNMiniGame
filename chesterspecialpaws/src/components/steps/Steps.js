"use";
import React from "react";
import Image from "next/image";
import "../../styles/steps.css";
import phone from "../../../public/icons/phone.svg";
import deshedding from "../../../public/images/deshedding.svg";

export default function Steps() {
  return (
    <section id="steps-1173">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Booking Process</span>
          <h2 className="cs-title">How to Book Your Dog's Grooming</h2>
          <p className="cs-text">
            Booking a grooming appointment is simple! Just follow these three
            easy steps to ensure your dog gets the best care possible.
          </p>
        </div>
        <ul className="cs-card-group">
          <li className="cs-item">
            <picture className="cs-picture">
              <Image
                className="cs-icon"
                src={phone}
                alt="icon"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
            </picture>
            <h3 className="cs-h3">Give Us a Call</h3>
            <p className="cs-item-text">
              Contact us to schedule an appointment. We’ll discuss available
              slots and answer any questions you may have.
            </p>
          </li>
          <li className="cs-item">
            <picture className="cs-picture">
              <Image
                className="cs-icon"
                src={deshedding}
                alt="icon"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
            </picture>
            <h3 className="cs-h3">Discuss Your Dog's Needs</h3>
            <p className="cs-item-text">
              Let us know about your dog's breed, coat type, and the specific
              grooming services you’d like.
            </p>
          </li>
          <li className="cs-item">
            <picture className="cs-picture">
              <Image
                className="cs-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/calendar.svg"
                alt="icon"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
            </picture>
            <h3 className="cs-h3">Bring Your Dog In</h3>
            <p className="cs-item-text">
              Arrive at your scheduled time, and we’ll take care of the rest!
              Your dog will be pampered and groomed to perfection.
            </p>
          </li>
        </ul>
      </div>
      <Image
        className="cs-graphic"
        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/tire-mark.svg"
        alt="icon"
        width="840"
        height="357"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
    </section>
  );
}
