import React, { useState, useEffect } from "react";
import "./Home.css";
import profileimage from "./profilepic.jpg";
import react from "./HomeLogo/react.png";
import tailwind from "./HomeLogo/tailwind.jpg";
import javascript from "./HomeLogo/javascript.png";
import mongodb from "./HomeLogo/mongodb.png";
import backgroundImage from "./backgroundImage.png";

function Home() {
  const handleDownload = () => {
    // Path to your PDF file
    const pdfPath = "/Altamash_resume.pdf";

    // Create a new anchor element
    const link = document.createElement("a");

    // Set the href attribute to the path of the PDF file
    link.href = pdfPath;

    // Set the download attribute with the desired file name
    link.download = "Altamash_resume.pdf";

    // Append the anchor element to the document
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Remove the anchor element from the document
    document.body.removeChild(link);
  
  };

  const [style, setStyle] = useState({ transform: '', WebkitTransform: '', MozTransform: '' });
  
    function handleMouseMove(event) {
      const e = -(window.innerWidth / 2 - event.pageX) / 30;
      const n = -(window.innerHeight / 2 - event.pageY) / 10;
  
      const newStyle = {
        transform: `rotateY(${e}deg) rotateX(${n}deg)`,
        WebkitTransform: `rotateY(${e}deg) rotateX(${n}deg)`,
        MozTransform: `rotateY(${e}deg) rotateX(${n}deg)`
      };
  
      setStyle(newStyle);
    }

  const [text, setText] = useState("React.js");
  const texts = [
    "React.js",
    "Node.js",
    "Express.js",
    "postgreSQL",
    "mySQL",
    "MongoDB",
  ];

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    }, 1300);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div>
      <section id="home">
        <div className="lg:h-screen flex flex-wrap-reverse justify-center items-center bg-[#021b38] pt-2">
        <img
              className="absolute z-0 w-full h-screen"
              src={backgroundImage}
              alt="img"
            />
          <div className="lg:flex-1 mt-6 pb-8 lg:pb-0 z-1">
            <div className="lg:ml-24">
              <h2 className="mt-8 mb-2 text-white font-bold md:text-2xl lg:text-3xl">
                Hello, I'm
              </h2>
              <h1 className=" text-white font-extrabold md:text-6xl lg:text-7xl">
                MD Altamash
              </h1>
              <h1 className=" text-[#26a4ee] font-extrabold md:text-6xl lg:text-7xl">
                Touheed
              </h1>

              <h3 className="mt-3 mb-2 text-white md:text-xl lg:text-2xl">
                I develop websites using....
              </h3>

              <h2 className="text-white font-bold md:text-xl lg:text-2xl mb-4">
              {text}
              </h2>
            </div>
            <div className="lg:ml-24">
              <button
                className="mb-2 mt-1 bg-[#26a4ee] text-[#Ffffff] font-bold text-base py-3 px-5 rounded-md  hover:text-[#26a4ee] hover:bg-white transition-transform duration-300 transform hover:scale-105"
                onClick={handleDownload}
              >
                Download CV
              </button>
            </div>
          </div>

          <div className="lg:flex-1 flex justify-center pt-24 lg:pt-20 z-1">
            <div className="top" onMouseMove={handleMouseMove}>
              <div className="perspective">
                <div className="cards" style={style}>
                <img
              className="thumb"
              src={profileimage}
              alt="img"
                />
                <img
              className="logo1"
              src={react}
              alt="img"
                />
                <img
              className="logo2"
              src={javascript}
              alt="img"
                />
                <img
              className="logo3"
              src={mongodb}
              alt="img"
                />
                <img
              className="logo4"
              src={tailwind}
              alt="img"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-16 ">
          <div className="flex flex-wrap justify-center m-6 lg:pt-4">
            {/* <h1 className="text-white">Welcome to my World</h1> */}

            <h1 className="text-center font-bold text-3xl">
              <span className="text-[#26a4ee] px-2"><ion-icon name="caret-forward"></ion-icon></span>
              Welcome to my World!
              <span className="text-[#26a4ee] px-2"><ion-icon name="caret-back"></ion-icon></span>
            </h1>
            <p className="lg:px-40 mt-4 mb-8">
              I am a young Full-stack Developer looking to take on the tech
              world by storm. I grew up in Jamshedpur, India. I am a young
              Full-stack Developer looking to take on the tech world by storm. I
              grew up in Jamshedpur, India. I am a young Full-stack Developer
              looking to take on the tech world by storm. I grew up in
              Jamshedpur, India.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center m-4">
            <div className="bg-[#26a4ee] rounded-xl hover:-rotate-[8deg]  ">
            <div className=" text-center border border-inherit w-[350px] h-[300px] pt-8 rounded-xl bg-white hover:rotate-[8deg] ">
              <h2 className="text-xl font-bold">Certification</h2>
              <strong className="font-semibold">Web Development</strong>
              <p>The Complete 2023 Web Development Bootcamp</p>
              <strong className="font-semibold">Issue Organization</strong>
              <p>Udemy</p>
              <a
                href="https://www.udemy.com/certificate/UC-a4d4aef4-ae7e-4d40-9514-f742c9e7b6c2/"
                className="no-underline font-semibold text-[#Ffffff] hover:text-[#26a4ee]"
              >
                <button className="p-2 bg-[#26a4ee] border border-inherit rounded-md  hover:bg-white transition-transform duration-300 transform hover:scale-110">
                  Certificate
                </button>
              </a>
            </div>
            </div>

            <div className="bg-[#26a4ee] rounded-xl hover:-rotate-[8deg]  ">
            <div className="border border-inherit text-center w-[350px] h-[300px] pt-8 rounded-xl bg-white hover:rotate-[8deg] ">              
            <h2 className="text-xl font-bold">Education</h2>
              <strong className="font-semibold">B TECH - CSE [ 2020 - 2024 ]</strong>
              <p>R.V.S College of Engineering and Technology, Jamshedpur</p>
              <strong className="font-semibold">Intermediate [ JAC ] [ 63% ]</strong>
              <p>Kholhan Inter College</p>
              <strong className="font-semibold">Matriculation [ CBSE ] [ 7.8 CGPA ]</strong>
              <p>Kasidih High School</p>
            </div>
            </div>

            <div className="bg-[#26a4ee] rounded-xl hover:-rotate-[8deg]  ">
            <div className="border border-inherit text-center w-[350px] h-[300px] pt-8 rounded-xl bg-white hover:rotate-[8deg] ">              
            <h3 className="text-xl font-bold pb-2">Achievements & Soft Skills</h3>
              <strong className="font-semibold">Achievement</strong>
              <p className="mb-6">
                Among the Winners in HACK WITH RVSCET (2021) coding competition.
              </p>
              {/* <strong>College</strong>
              <p>Studying in RVS college</p> */}
              <strong className="font-semibold">Soft-Skills</strong>
              <p className="px-4"> 
                Fluent English, Communication, Problem-Solving, Team player,
                Adaptibility
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
