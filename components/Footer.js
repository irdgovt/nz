import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#e9e9e9] md:px-16 px-5 py-12">
      <div className="">
        <div className="flex justify-between md:flex-row flex-col md:text-start text-center items-center">
          <div className="">
            <div className="flex gap-2">
              <p className="underline">Privacy and Security Policy</p> |{" "}
              <p className="underline">Contact us</p>{" "}
            </div>
            <div className="flex gap-2">
              <p className="underline">© Copyright 2021</p>
              <p>Inland Revenue.</p>
            </div>
            <p>Conditions of use</p>
          </div>
          <div className="md:text-start text-center">
            <p className="">For more info on government services go to</p>
            <div className="flex md:justify-end justify-center w-full">
              <img className="w-[200px] " src="./footer.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
