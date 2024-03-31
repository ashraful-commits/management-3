import React from "react"
import Link from "next/link"

export default function Software() {
  return (
    <div
      className="software_wrap pb-[60px] pt-[70px] sm:pt-[100px] md:py-[100px]"
      id="solution"
    >
      <div className="px-5 mx-auto container-fluid">
        {/* top start*/}
        <div className="grid items-center grid-cols-10 gap-4 pb-7">
          <div className="col-span-10 md:col-span-6">
            <h2 className="mb-10 pr-[0px] text-[30px] font-semibold leading-[1.3] sm:text-[34px] md:text-[45px] xl:pr-[150px]">
              Multiple Software <br />
              Integration - 1 Dashboard
            </h2>
            <p className="max-w-[400px] text-lg text-[#4F4F4F]">
              Join over 2,000 rapidly expanding brands leveraging Client Management to
              accelerate growth through centralized data analysis and
              dissemination
            </p>
            <ul className="flex gap-6">
              <li>
                <Link
                  className="text-md shadow-[0_10px_60px_-15px_rgba(0,0,0,0.3) mt-7 inline-block rounded-lg bg-[#267596] px-6 py-3 text-lg font-bold text-white transition duration-300 hover:bg-[#000]"
                  href="/login"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  className="text-md mt-7 inline-block rounded-lg bg-[#fff] px-6 py-3 text-lg font-bold text-[#141F39] shadow-[0px_0px_40px_-15px_rgba(0,0,0,0.3)] transition duration-300 hover:bg-[#000] hover:text-[#fff] "
                  href="/#pricing "
                >
                  View Pricing
                </Link>
              </li>
            </ul>
          </div>
          {/* Right side */}
          <div className="col-span-10 pl-0 mt-5 text-center md:col-span-4 md:mt-0 lg:pl-7">
            <img className="inline-block" src="./landing/sales_fam.svg" />
          </div>
        </div>
        {/* top End */}
        {/* mid start */}
        <div className="grid items-center grid-cols-6 gap-5 pb-7">
          <div className="col-span-6 lg:col-span-2">
            <h2 className="text-center text-[30px] font-semibold leading-[1.3] sm:text-[34px] md:text-[45px] lg:text-left">
              Features you get On Client Management
            </h2>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <p className="ml-[0px] max-w-[100%] text-center text-lg text-[#4F4F4F] lg:ml-[50px] lg:max-w-[450px] lg:text-left xl:ml-[100px]">
              Explore a range of exciting features designed to enhance your
              productivity and simplify project management
            </p>
          </div>
          <div className="col-span-6 text-center lg:col-span-1">
            <Link
              className="text-md shadow-[0_10px_60px_-15px_rgba(0,0,0,0.3) mt-2 inline-block rounded-lg bg-[#267596] px-6 py-3 text-lg font-bold text-white transition duration-300 hover:bg-[#000] lg:mt-7"
              href="#"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* mid end */}
        <div className="grid grid-cols-6 gap-5 mt-5">
          <div className="col-span-6 mt-5 sm:col-span-2">
            <img
              className="w-full rounded-2xl"
              src="./landing/sales_img_1.svg"
            />
            <h3 className="mb-2 mt-5 text-[20px] font-semibold leading-[1.3] md:text-[24px]">
              Team Collaboration
            </h3>
            <p className="max-w-[100%] text-lg text-[#4F4F4F] lg:max-w-[400px]">
              Virtually and collectively manage projects with your team. Enable
              organizations to leverage the collective knowledge, skills, and
              expertise of team members to achieve shared goals, drive
              innovation, and deliver high-quality outcomes
            </p>
          </div>
          <div className="col-span-6 mt-5 sm:col-span-2">
            <img
              className="w-full rounded-2xl"
              src="./landing/sales_img_2.svg"
            />
            <h3 className="mb-2 mt-5 text-[20px] font-semibold leading-[1.3] md:text-[24px]">
              Cloud Storage
            </h3>
            <p className="max-w-[100%] text-lg text-[#4F4F4F] lg:max-w-[400px]">
              Storage concerns - we offer up to 2 TB Provide a convenient,
              scalable, and secure solution for storing, accessing, and sharing
              data, enabling individuals and organizations to leverage the
              benefits of cloud computing for their storage needs
            </p>
          </div>
          <div className="col-span-6 mt-5 sm:col-span-2">
            <img
              className="w-full rounded-2xl"
              src="./landing/sales_img_3.svg"
            />
            <h3 className="mb-2 mt-5 text-[20px] font-semibold leading-[1.3] md:text-[24px]">
              Daily Analytics
            </h3>
            <p className="max-w-[100%] text-lg text-[#4F4F4F] lg:max-w-[400px]">
              We consistently deliver valuable insights to simplify your daily
              operations. Enable organizations to harness the power of data to
              drive continuous improvement, innovation, and competitive
              advantage in today&lsquo;s fast-paced business environment
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
