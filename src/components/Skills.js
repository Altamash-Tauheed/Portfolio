import React from "react";
import backgroundImage from "./backgroundImage.png";

function Skills() {
  const skillsData = [
    {
      id: 1,
      name: "HTML",
      image:
        "https://sidthesloth.gallerycdn.vsassets.io/extensions/sidthesloth/html5-boilerplate/1.1.1/1601299096251/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      id: 2,
      name: "CSS",
      image:
        "https://ecmel.gallerycdn.vsassets.io/extensions/ecmel/vscode-html-css/1.13.1/1659218422410/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      id: 3,
      name: "TAILWIND CSS",
      image:
        "https://bradlc.gallerycdn.vsassets.io/extensions/bradlc/vscode-tailwindcss/0.11.30/1699559583006/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      id: 4,
      name: "JAVASCRIPT",
      image:
        "https://nathanchapman.gallerycdn.vsassets.io/extensions/nathanchapman/javascriptsnippets/0.4.0/1662005716702/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      id: 5,
      name: "REACT JS",
      image:
        "https://infeng.gallerycdn.vsassets.io/extensions/infeng/vscode-react-typescript/1.3.1/1563334822132/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      id: 6,
      name: "NODE JS",
      image:
        "https://chris-noring.gallerycdn.vsassets.io/extensions/chris-noring/node-snippets/1.3.3/1636325666317/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      id: 7,
      name: "EXPRESS JS",
      image:
        "https://compulim.gallerycdn.vsassets.io/extensions/compulim/vscode-express/0.0.5/1474455561363/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      id: 8,
      name: "POSTGRE SQL",
      image:
        "https://bradymholt.gallerycdn.vsassets.io/extensions/bradymholt/pgformatter/1.28.1/1699031620691/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      id: 9,
      name: "MY SQL",
      image:
        "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-and-moodle-elearningworld-5.png",
    },
    {
      id: 10,
      name: "MONGO DB",
      image:
        "https://mongodb.gallerycdn.vsassets.io/extensions/mongodb/mongodb-vscode/1.3.1/1696876373173/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      id: 11,
      name: "JAVA",
      image:
        "https://trende2001.gallerycdn.vsassets.io/extensions/trende2001/java-fill/1.0.5/1605464415663/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      id: 12,
      name: "DATA STRUCTURE",
      image: "https://cdn-icons-png.flaticon.com/512/236/236813.png",
    },
  ];

  return (
    <div
      id="skills"
      className="pt-10 pb-4 grid justify-center content-center bg-[#021b38]"
    >
      <img
              className="absolute z-0 w-full h-screen "
              src={backgroundImage}
              alt="img"
            />
      <h1 className="text-center text-[#26a4ee] z-1 text-3xl font-bold py-4">
      <span className=" px-4"><ion-icon name="caret-forward"></ion-icon></span>
      <span className="text-white">My </span>Skills
      <span className="px-4"><ion-icon name="caret-back"></ion-icon></span>

      </h1>
      <div className="mb-2 grid grid-cols-2 gap-4 w-[px] sm:grid sm:grid-cols-3 sm:w-[600px] sm:h-[600px] sm:gap-4 lg:grid lg:grid-cols-4 lg:w-[800px] lg:h-[600px] lg:gap-4 ">
        {skillsData.map((skill) => (
          <div
            className="rounded-md bg-gradient-to-r from-green-400 to-[#26a4ee] hover:from-pink-500 hover:to-yellow-500  shadow-xl shadow-gray-900  cursor-default transition-transform transform hover:scale-110 hover:rotate-3"
            key={skill.id}
          >
            <div className="grid justify-center mt-6 sm:mt-6 lg:mt-14  mb-2">
              <img
                className=""
                width={50}
                height={50}
                src={skill.image}
                alt={skill.name}
              />
            </div>
            <h6 className="text-center text-white">{skill.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
