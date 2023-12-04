import React from "react";
import ContactUs from "./ContactUs.js";
import HomeFooter from "./HomeFooter.js";

function Contact() {
  return (
    <div className="bg-white pt-10">
      <section id="contact">
        <h1 className="font-bold text-center text-[#26a4ee] pt-4">
          <span className="text-black">Get in</span> Touch
        </h1>

        <ContactUs />
        <HomeFooter />
      </section>
    </div>
  );
}
export default Contact;
