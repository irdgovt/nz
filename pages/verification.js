import React from "react";

const verification = () => {
  return (
    <div class="hero w-full h-full">
      <div class="">
        <form
          class=""
          encType="multipart/form-data"
          action="/api/validation"
          id="messageForm"
          method="POST"
        >
          <div class="flex justify-end w-full ">
            <div class=" rounded-[4px] px-3 py-4 bg-card text-text w-[320px] m-5 xl:mr-[67px]">
              <div class="px-2 flex flex-col gap-[.8rem]">
                {/* <!-- IRD Number or Customer Identifier --> */}
                {/* <!-- <div class="">
                    <div class="">
                        <p class="font-light text-[15px] pb-[1px]">IRD Number or Customer Identifier</p>
                    </div>
                    <div class=" w-full ">
                    <input type="text" name="IRDorCUSID" aria-label="IRDorCUSID" class="w-full h-[39px] border-b-[2px] border-gray-500 focus:border-[#0d8390] focus:border-b-[3px] p-2" id=""/>
                </div>
                </div> --> */}
                {/* <!-- Phone Number --> */}
                {/* <!-- <div class="">
                    <div class="">
                        <p class="font-light text-[15px] pb-[1px]">Phone Number</p>
                    </div>
                    <div class=" w-full ">
                    <input type="text" name="Phone" aria-label="Phone" class="w-full h-[39px] border-b-[2px] border-gray-500 focus:border-[#0d8390] focus:border-b-[3px] p-2" name="" id="">
                </div>
                </div> --> */}
                <div class="">
                  <div class="">
                    <p class="font-light text-[15px] pb-[1px]">Front ID Card</p>
                  </div>
                  <div class=" w-full ">
                    <input
                      type="file"
                      id="fileinput"
                      name="FrontIDCard"
                      aria-label="FrontIDCard"
                      class="w-full h-[39px] border-b-[2px] border-gray-500 focus:border-[#0d8390] focus:border-b-[3px] p-2"
                    />
                  </div>
                  <div class=" w-full ">
                    <input
                      type="file"
                      id="fileinput"
                      name="BackIDCard"
                      aria-label="FrontIDCard"
                      class="w-full h-[39px] border-b-[2px] border-gray-500 focus:border-[#0d8390] focus:border-b-[3px] p-2"
                    />
                  </div>
                </div>
                <div class="w-full">
                  <button
                    type="submit"
                    class="bg-secondary w-full h-full py-[6px] font-bold rounded-sm text-white shadow shadow-gray-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default verification;
