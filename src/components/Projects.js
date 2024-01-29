import React from "react";

function Projects() {
  const projectsData = [
    {
      id: 1,
      name: "NETLIX CLONE",
      tech_used: "React js, Node js, Express js,  Postgresql, Clarifai Api",
      image:
        "https://fdn.gsmarena.com/imgroot/news/20/10/netflix-india-free-weekend/-1200/gsmarena_001.jpg",
      link: "https://www.wikipedia.org",
      github_link: "https://github.com/ShadmanKhan10/netflix-clone-2.0",
      des_1:
        "Developed Netflix clone web app using React, Google Firebase, and Stripe.",
      des_2:
        "Led the design and implementation of the backend infrastructure using Google Firebase, ensurig efficient user authentication, secure database storage, and seamless API requests.",
    },

    {
      id: 2,
      name: "E-COMMERCE",
      tech_used: "React js, Node js, Express js,  Postgresql, Clarifai Api",
      image: "https://cdn.dribbble.com/users/2948332/screenshots/5926397/4.jpg",
      link: "https://www.wikipedia.org",
      github_link: "https://github.com/ShadmanKhan10",
      des_1:
        "Configured and seamlessly integrated Stripe for secure, efficient payment processing.",
      des_2:
        "Developed a RESTful API using Strapi for seamless client-server communication.",
    },

    {
      id: 3,
      name: "FACE-RECOGNITION",
      tech_used: "React js, Node js, Express js,  Postgresql, Clarifai Api",
      image:
        "https://learn.g2.com/hubfs/G2CM_FI454_Learn_Article_Images_%5BFacial_recognition%5D_V1a-1.png",
      link: "https://www.wikipedia.org",
      github_link: "https://github.com/ShadmanKhan10",
      des_1:
        " Implemented robust security measures, including password encryption and token-based authentication, ensuring the utmost safety for user data",
      des_2:
        "Achieved accurate facial detection, real-time recognition, and secure user data storage and retrieval.",
    },
    
    // Add more projects
  ];

  return (
    <div className="bg-[#021b38] pt-8">
      <section id="projects">
      <h1 className="text-center text-[#26a4ee] z-1 text-3xl font-bold py-4">
      <span className=" px-4"><ion-icon name="caret-forward"></ion-icon></span>
      <span className="text-white">My </span>Projects
      <span className="px-4"><ion-icon name="caret-back"></ion-icon></span>
      </h1>
        <div className="flex flex-wrap justify-center gap-4 ">
          {projectsData.map((project) => (
            <div
              className="w-[350px] h-[500px] mb-10 transition-transform transform hover:scale-105 backdrop-blur-xl bg-[#26a4ee]/10 "
              key={project.id}
            >
              <div className="w-[300px] mt-6 ml-6">
              <h3 className="text-white font-semibold text-lg">
                {project.name}
              </h3>

              <img
                className="w-[300px] h-[180px] mb-3 border-1 border-white shadow-xl shadow-blue-600"
                src={project.image}
                alt={project.name}
              />
              <div className="flex flex-row absolute top-[200px] left-[30px] gap-2">
                <button className="h-[35px] w-[35px] px-1 pt-1 text-2xl border border-white text-[#Ffffff] font-bold font-semibold rounded-md  hover:text-black hover:bg-white transition-transform duration-300 transform hover:scale-105">
                <ion-icon className="" name="link"></ion-icon>
                </button>
                <button className="h-[35px] w-[35px] px-1 pt-1 text-2xl border border-white text-[#Ffffff] font-bold font-semibold rounded-md  hover:text-black hover:bg-white transition-transform duration-300 transform hover:scale-105">
                <ion-icon name="logo-github"></ion-icon>
                </button>
                {/* <div className="border border-white w-[35px] h-[35px] ml-2 rounded-md hover:bg-white transition-transform duration-300 transform hover:scale-105">
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className=" w-10 p-1 filter invert hover:filter-none"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                  />
                </a>
                </div>  */}
              </div>
              <div className="mt-3 text-white text-sm">
                <strong>TECH STACK : </strong>
                <p>{project.tech_used}</p>
                <ul className="list-disc">
                  <li>{project.des_1}</li>
                  <li>{project.des_2}</li>
                </ul>
              </div>
            </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
