import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i072z9o",
        "template_7adl373",
        form.current,
        "0SgWQmcO4Tvr5YxaX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-white">
      <div className="lg:flex justify-center items-center mx-16 my-10">
        <div className="lg:flex-1 mb-4">
          <h1>Let's Chat.</h1>
          <h1>Tell me about your Project.</h1>
          <p>Let's create something together</p>
          <div className="flex flex-1  mr-2 border-0 rounded-lg shadow-sm p-1 w-9/10 hover:transform hover:scale-105 duration-300">
            <a
              className="text-black text-3xl ml-2 mt-2 no-underline"
              href="mailto:altamashtauheed501@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="mail"></ion-icon>
            </a>
            <a
              className="flex items-center no-underline ml-2 "
              href="mailto:altamashtauheed501@gmail.com"
            >
              altamashtauheed501@gmail.com
            </a>
            
          </div>
        </div>
        <div className="w-5/6 lg:w-1/2 mr-12">
          <div className="lg:flex-1  ml-4 border-1 px-4 py-2 rounded-lg shadow-md ">
            <h4 className="mb-4 mt-2 ">Send me a message</h4>
            <form className="" ref={form} onSubmit={sendEmail}>
              <input
                className="w-full my-2 p-2 border-0 rounded-md text-white bg-[#021b38] focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                placeholder="Name"
                name="to_name"
              />
              <input
                className="w-full my-2 p-2 border-0 rounded-md bg-[#021b38] text-white focus:outline-none focus:ring focus:border-blue-300"
                type="email"
                placeholder="Email"
                name="to_email"
              />
              <textarea
                className="w-full my-1 p-2 border-0 rounded-md bg-[#021b38] resize-none text-white focus:outline-none focus:ring focus:border-blue-300"
                name="message"
                placeholder="Message"
              />
              <button
                type="submit"
                className="mb-2 bg-[#26a4ee] text-[#Ffffff] font-bold text-base border border-inherit py-2 px-4 rounded-lg mt-2 mr-2 hover:bg-[#Ffffff] hover:text-[#26a4ee] transition-transform duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
