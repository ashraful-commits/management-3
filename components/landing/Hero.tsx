import React from "react"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="hero_wrap ">
      <div className="hero_area bg-[url('./../public/landing/hero_bg.svg')] bg-cover bg-center pb-[170px] pt-[100px] text-center sm:pt-[130px] md:pt-[180px]">
        <div className="container px-5 mx-auto">
          <div className="hero_top mx-auto max-w-[800px]">
            <h1 className="mb-6 text-[30px] font-bold leading-[1.2] sm:text-[40px] lg:text-[60px]">
              Unleash Your Sales Potential with{" "}
              <span className="inline-block text-transparent bg-gradient-to-r from-gray-700 via-cyan-400 to-orange-400 bg-clip-text">
                Sales Fam
              </span>
            </h1>
            <p className="mb-2 text-lg text-[#4F4F4F]">
              Welcome to our dynamic sales platform where commission-based
              representatives connect with top-tier companies ready to
              supercharge their sales efforts
            </p>
            <ul className="flex justify-center gap-6 max-sm:gap-5 ">
              <li>
                <Link
                  className="text-md shadow-[0_10px_60px_-15px_rgba(0,0,0,0.3) mt-7 max-sm:text-[15px] max-sm:px-5 max-sm:py-3 inline-block rounded-lg bg-[#267596] px-6 py-3 text-lg font-bold text-white transition duration-300 hover:bg-[#000]"
                  href="/login"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  className="text-md max-sm:text-[15px] max-sm:px-5 max-sm:py-3 mt-7 inline-block rounded-lg bg-[#fff] px-6 py-3 text-lg font-bold text-[#141F39] shadow-[0px_0px_40px_-15px_rgba(0,0,0,0.3)] transition duration-300 hover:bg-[#000] hover:text-[#fff] "
                  href="/#pricing"
                >
                  View Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container px-5 mx-auto text-center">
        <img
          className="mt-[-140px] inline-block pb-5 sm:pb-0"
          src="./landing/hero_img.svg"
        />
      </div>
    </div>
  )
}
