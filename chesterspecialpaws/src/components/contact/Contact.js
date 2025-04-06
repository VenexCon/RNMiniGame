"use client";
import React from "react";
import Image from "next/image";
import "../../styles/contactStyles.css";

export default function Contact() {
  return (
    <section id="contact-1105">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Contact Us</span>
          <h2 className="cs-title">Make An Appointment</h2>
          {/*  <!--Form--> */}
          <form
            className="cs-form"
            id="cs-form-1105"
            name="Contact Form"
            method="POST"
            data-netlify="true"
          >
            <label className="cs-label">
              Name
              <input
                className="cs-input"
                required
                type="text"
                id="name-1105"
                name="name"
                placeholder="Name"
              />
            </label>
            <label className="cs-label cs-email">
              Email
              <input
                className="cs-input"
                required
                type="email"
                id="email-1105"
                name="email"
                placeholder="Email"
              />
            </label>
            <label className="cs-label cs-phone">
              Phone
              <input
                className="cs-input"
                required
                type="phone"
                id="phone-1105"
                name="phone"
                placeholder="Phone"
              />
            </label>
            <label className="cs-label">
              Message
              <textarea
                className="cs-input cs-textarea"
                required
                name="Message"
                id="message-1105"
                placeholder="Please state the desired treatments and the best number to contact you on!"
              ></textarea>
            </label>
            <button className="cs-button-solid cs-submit" type="submit">
              Make an Appointment
            </button>
          </form>
        </div>
        <ul className="cs-ul">
          <li className="cs-li">
            <picture className="cs-icon-wrapper">
              <Image
                aria-hidden="true"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-phone.svg"
                alt="phone icon"
                className="cs-icon"
                width="40"
                height="40"
                decoding="async"
              />
            </picture>
            <div className="cs-flex-group">
              <span className="cs-header">Phone</span>
              <a
                href="tel:07518 56 20 27
                    "
                className="cs-link"
              >
                07518 56 20 27
              </a>
            </div>
          </li>
          <li className="cs-li">
            <picture className="cs-icon-wrapper">
              <Image
                aria-hidden="true"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-email.svg"
                alt="mail icon"
                className="cs-icon"
                width="40"
                height="40"
                decoding="async"
              />
            </picture>
            <div className="cs-flex-group">
              <span className="cs-header">Email</span>
              <a href="mailto:chesterspecialpaws@gmail.com" className="cs-link">
                chesterspecialpaws@gmail.com
              </a>
            </div>
          </li>
          <li className="cs-li">
            <picture className="cs-icon-wrapper">
              <Image
                aria-hidden="true"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-pin.svg"
                alt="address icon"
                className="cs-icon"
                width="40"
                height="40"
                decoding="async"
              />
            </picture>
            <div className="cs-flex-group">
              <span className="cs-header">Address</span>
              <a href="" className="cs-link">
                Watling Court, Vicars Cross, Chester
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
