import React from "react";

const currentYear = new Date().getFullYear();

const HomeFooter = () => {
  
  return (
    <div className="bg-[#021b38] py-4">
      <div className="flex justify-center items-center">
        {/* <div className="text-center">
          <p className="mb-1">
            <strong>Phone:</strong> +91 8797023058
          </p>
          <p className="mb-1">
            <strong>Email:</strong> khanshadman7777@gmail.com
          </p>
          <p className="mb-1">
            <strong>Address:</strong> Cross Road Number 14, Jawaharnagar, Mango,
            Jamshedpur, Jharkhand, India.
          </p>
        </div> */}
      </div>
      <div className="flex justify-center items-center gap-12">
        <a className="text-white text-2xl mt-2  -mb-2 hover:transform hover:scale-125"
          href="https://github.com/Altamash-Tauheed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-github"></ion-icon>
          
        </a>
        <a
          className="text-white text-2xl mt-2  -mb-2 hover:transform hover:scale-125"
          href="https://www.linkedin.com/in/md-altamash-touheed-42a106212/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>

        <a 
          className="text-white text-2xl mt-2  -mb-2 hover:transform hover:scale-125" 
          href="https://gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          >
          <ion-icon name="mail" ></ion-icon>
        </a>
        {/* <a
          className="text-white text-2xl mt-2 mr-8 -mb-2 hover:transform hover:scale-125"
          href="https://linkedin.com/in/shadman-khan-a0a5221b8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="code-slash" ></ion-icon>
        </a> */}
      </div>
      <div className="flex justify-center mt-8">
        <h1 className="text-base text-[#Ffffff]">@ {currentYear} <span className="text-[#26a4ee] underline">Md Altamash Touheed.</span> All right reserved.</h1>
      </div>
    </div>
  );
};

export default HomeFooter;
