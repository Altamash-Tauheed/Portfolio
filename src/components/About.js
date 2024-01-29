import React from "react";
import aboutImage from "./aboutImage.jpg";

function About() {
  const handleDownload = () => {
    // Path to your PDF file
    const pdfPath = "/Altamash_resume.pdf";

    // Create a new anchor element
    const link = document.createElement("a");

    // Set the href attribute to the path of the PDF file
    link.href = pdfPath;

    // Set the download attribute with the desired file name
    link.download = "/Altamash_resume.pdf";

    // Append the anchor element to the document
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Remove the anchor element from the document
    document.body.removeChild(link);
  };
  
  return (
    <div>
      <section id="about">
        <div className="lg:flex pb-10 pt-16">
          <div className="sm:m-6 md:m-24 lg:m-0 flex-1 flex justify-center items-center ">
            <img 
              className="p-4"
              src={aboutImage}
              alt="img"
            />
          </div>

          <div className="lg:flex-1 lg:flex-col px-4">
            <h5 className="text-blue-300 font-semibold mb-0">ABOUT ME</h5>
            <h1 className="font-bold mb-8">I Develope Websites</h1>
            <p>
              I am a passionate and innovative technologist with a deep love for
              problem-solving and a keen interest in cutting-edge technologies.
              With a background in Your Field or Specialization, I am dedicated
              to pushing the boundaries of what's possible in the digital world.
              My journey in the tech industry began Mention how and when you
              started in tech. Since then, I have continuously evolved and
              adapted to the fast-paced nature of this field. I thrive in
              collaborative environments and have a strong track record of
              working with cross-functional teams to deliver solutions that not
              only meet but exceed expectations. I am a firm believer in
              lifelong learning and keep myself updated with the latest trends
              and developments in the tech landscape. Whether it's [Mention a
              few technologies or areas you're passionate about], I am committed
              to staying at the forefront of innovation. In addition to my
              technical skills, I understand the importance of clear
              communication and effective project management. I enjoy
              translating complex technical concepts into plain language that
              everyone can understand, and I take pride in delivering projects
              on time and within budget. Outside of work, I'm a Mention a few
              personal interests or hobbies enthusiast and a strong advocate for
              Any relevant cause or community involvement.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-0">
                <p className="font-semibold mb-0">NAME</p>
                <p>Md Altamash Touheed</p>
              </div>
              <div className="p-0">
                <p className="font-semibold mb-0">EDUCATION</p>
                <p>R.V.S College of Engineering and Technology</p>
              </div>
              <div className="p-0">
                <p className="font-semibold mb-0">EMAIL</p>
                <p>altamashtauheed501@gmail.com</p>
              </div>
              <div className="p-0">
                <p className="font-semibold mb-0">EMPLOYMENT</p>
                <p>Available</p>
              </div>
            </div>

            <button
              className="px-8 py-2 bg-[#26a4ee] text-[#Ffffff] font-bold text-base rounded-md  hover:text-[#26a4ee] hover:bg-white transition-transform duration-300 transform hover:scale-105 border-2 border-[#26a4ee]"
              onClick={handleDownload}
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
