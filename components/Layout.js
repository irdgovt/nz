import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <div className="w-full h-full">
          <div className="bg-[#0d8390] w-full h-[.65rem]"></div>
          <div className="bg-primary w-full">
            <div className=" flex justify-between items-center w-full py-2 px-20 ">
              <div className="">
                <img src="/logo.svg" className="h-[3rem]" alt="" srcset="" />
              </div>
              <div className="">
                <div className="w-[27px] h-[27px] rounded-full bg-white flex justify-center items-center text-center">
                  <p className="text-2xl question  text-primary text-center justify-center">
                    ?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
