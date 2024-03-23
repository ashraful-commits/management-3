import React from "react"

export default function Clients() {
  return (
    <div
      className="clients_wrap bg-[url('./../public/landing/client_bg.png')] bg-cover bg-[0px_0px]"
      id="why-salesfam"
    >
      <div className="container px-5 mx-auto">
        <div className="grid items-center grid-cols-10 gap-4 pb-10 client_inner">
          <div className="flex col-span-10 lg:col-span-3">
            <h3 className="w-[100%] text-center text-[26px] font-semibold leading-[1.3] text-[#001A32] lg:w-[350px] lg:text-left ">
              Trusted by Countless Businesses Worldwide
            </h3>
          </div>
          <div className="col-span-10 marquee lg:col-span-7">
            <ul className="flex flex-wrap items-center justify-center gap-2 max-sm:flex-nowrap md:flex-nowrap md:justify-between ">
              <li className="marquee__inner">
                <img
                  className="w-[160px] opacity-50 transition duration-300 hover:opacity-100 "
                  src="./landing/l1.png"
                />
              </li>
              <li className="marquee__inner">
                <img
                  className="w-[160px] opacity-50 transition duration-300 hover:opacity-100 "
                  src="./landing/l2.png"
                />
              </li>
              <li className="marquee__inner">
                <img
                  className="w-[160px] opacity-50 transition duration-300 hover:opacity-100 "
                  src="./landing/l3.png"
                />
              </li>
              <li className="marquee__inner">
                <img
                  className="w-[160px] opacity-50 transition duration-300 hover:opacity-100  "
                  src="./landing/l4.png"
                />
              </li>
             
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-4 pt-8 client_bottom pb-7">
          <div className="col-span-10 lg:col-span-5">
            <img
              className="ml-[-15px] w-full md:ml-[-25px] lg:ml-[-40px]"
              src="./landing/client_img.svg"
            />
          </div>
          <div className="col-span-10 pl-0 lg:col-span-5 lg:pl-7">
            <h2 className="mb-3 mt-[0px] pr-10 text-[30px] font-bold leading-[1.3] text-[#141F39] sm:text-[34px] md:text-[36px] lg:mt-[50px]">
              Join a thriving ecosystem where your expertise meets opportunity
            </h2>
            <div className="flex items-start gap-4 mt-10">
              <img
                className="w-[25px] sm:w-[37px]"
                src="./landing/check_blue.svg"
              />
              <div className="text">
                <p className="text-lg">
                  No need for spreadsheets, manual data entry, and sales chaos
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-10">
              <img
                className="w-[25px] sm:w-[37px]"
                src="./landing/check_blue.svg"
              />
              <div className="text">
                <p className="text-lg">
                  Our cutting-edge software is designed to empower your sales
                  team and drive revenue growth
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-10">
              <img
                className="w-[25px] sm:w-[37px]"
                src="./landing/check_blue.svg"
              />
              <div className="text">
                <p className="text-lg">
                  We match you with companies offering lucrative commissions for
                  promoting their products and services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
