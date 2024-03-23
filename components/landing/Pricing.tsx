"use client"

import React, { useState } from "react"

export default function Pricing() {
  const [active, setActive] = useState("monthly")

  const handleClick = (value) => {
    setActive(value)
  }

  return (
    <div className="pricing_wrap pb-[50px] pt-[40px] md:pt-[50px]" id="pricing">
      <div className="container px-5 mx-auto">
        <div className="pt-8 pb-7">
          <div className="col-span-10 pr-[0px] font-medium lg:col-span-5">
            <p className="border-1 mx-auto w-[150px] rounded-2xl border border-[#ddd] py-1 text-center text-sm font-bold text-[#267596]">
              Flexible Pricing
            </p>
            <h2 className="mb-4 text-center text-[30px] font-semibold leading-[1.3] text-[#141F39] sm:text-[34px] md:text-[45px]">
              Choose the pricing plan that fits your needs
            </h2>
            <p className="mx-auto text-center text-lg text-[#4F4F4F] lg:max-w-[630px]">
              Our Plans - Individual, Small team, Growing Enterprise - Tailored
              to your goals
            </p>
            <div className="border-1 mx-auto mt-7 flex w-[220px] gap-1 rounded-xl border border-[#ddd] p-1">
              <button
                className={`rounded-xl  px-6  py-3 text-center text-base font-semibold transition duration-300 hover:bg-[#000] hover:text-[#fff]
                ${active === "monthly" ? "bg-[#267596] text-white" : ""}`}
                onClick={() => handleClick("monthly")}
              >
                Monthly
              </button>
              <button
                className={`font-semibol  rounded-xl  px-6 py-3 text-center text-base transition duration-300 hover:bg-[#000] hover:text-[#fff]
                ${active === "yearly" ? "bg-[#267596] text-white" : ""}`}
                onClick={() => handleClick("yearly")}
              >
                Yearly
              </button>
            </div>
            <div className="grid grid-cols-6 gap-4 mt-4">
              <div className="col-span-6 mt-5 sm:col-span-3 md:col-span-2 lg:col-span-2">
                <div className="border-1 rounded-xl border border-[#ddd] bg-white p-10 transition duration-300 hover:border-[#ddd] sm:border-[#fff]">
                  <h4 className="mb-2 text-[24px] font-bold text-[#181B1F]">
                    Lite
                  </h4>
                  <p className="text-[#4F4F4F]">
                    For individuals and small teams trying out for an unlimited
                    period.
                  </p>
                  <h3 className="mt-4 text-[34px] font-semibold md:text-[40px] lg:text-[50px]">
                    <sup className="top-[-20px] text-[24px]">$</sup>
                    {active == "monthly" && "29"}
                    {active == "yearly" && "50"}
                    <span className="text-[16px]">
                      /{active == "monthly" && "month"}
                      {active == "yearly" && "year"}
                    </span>
                  </h3>
                  <a
                    className="shadow-[0_10px_60px_-15px_rgba(0,0,0,0.3) mb-7 mt-3 block rounded-3xl border bg-[#F5F8FE] px-6 py-3 text-center text-sm font-semibold text-[#181B1F] transition duration-300  hover:bg-[#267596] hover:text-[#fff] lg:mt-5"
                    href="#"
                  >
                    Get Started
                  </a>
                  <ul>
                    <li className="flex items-center gap-3 mb-2">
                      <img className="" src="./landing/checkmark.svg" /> Own
                      terms selling
                    </li>
                    <li className="flex items-center gap-3 mb-2">
                      <img className="" src="./landing/checkmark.svg" /> Robust
                      integrations
                    </li>
                    <li className="flex items-center gap-3">
                      <img className="" src="./landing/checkmark.svg" /> One
                      time payment
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-6 mt-5 sm:col-span-3 md:col-span-2 lg:col-span-2">
                <div className="border-1 rounded-xl border border-[#ddd] bg-white p-10 transition duration-300 hover:border-[#ddd]">
                  <h4 className="mb-2 text-[24px] font-bold text-[#181B1F]">
                    Basic
                  </h4>
                  <p className="text-[#4F4F4F]">
                    For individual account executives who want increased
                    productivity.
                  </p>
                  <h3 className="mt-4 text-[34px] font-semibold md:text-[40px] lg:text-[50px]">
                    <sup className="top-[-20px] text-[24px]">$</sup>
                    {active == "monthly" && "49"}
                    {active == "yearly" && "120"}
                    <span className="text-[16px]">
                      /{active == "monthly" && "month"}
                      {active == "yearly" && "year"}
                    </span>
                  </h3>
                  <a
                    className="shadow-[0_10px_60px_-15px_rgba(0,0,0,0.3) mb-7 mt-3 block  rounded-3xl border bg-primary px-6 py-3 text-center text-sm font-semibold text-[#fff] transition duration-300 hover:bg-[#267596] hover:text-[#fff] lg:mt-5"
                    href="#"
                  >
                    Get Started
                  </a>
                  <ul>
                    <li className="flex items-center gap-3 mb-2">
                      <img className="" src="./landing/checkmark.svg" /> Live
                      streaming
                    </li>
                    <li className="flex items-center gap-3 mb-2">
                      <img className="" src="./landing/checkmark.svg" /> No
                      bandwidth
                    </li>
                    <li className="flex items-center gap-3">
                      <img className="" src="./landing/checkmark.svg" />{" "}
                      Marketing tools
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-6 mt-5 md:col-span-2 lg:col-span-2">
                <div className="border-1 rounded-xl border border-[#ddd] bg-white p-10 transition duration-300 hover:border-[#ddd] sm:border-[#fff]">
                  <h4 className="mb-2 text-[24px] font-bold text-[#181B1F] transition duration-300">
                    Plus
                  </h4>
                  <p className="text-[#4F4F4F]">
                    For medium and large sales organizations with advanced
                    needs.
                  </p>
                  <h3 className="mt-4 text-[34px] font-semibold md:text-[40px] lg:text-[50px]">
                    <sup className="top-[-20px] text-[24px]">$</sup>
                    {active == "monthly" && "99"}
                    {active == "yearly" && "200"}
                    <span className="text-[16px]">
                      {" "}
                      /{active == "monthly" && "month"}
                      {active == "yearly" && "year"}
                    </span>
                  </h3>
                  <a
                    className="shadow-[0_10px_60px_-15px_rgba(0,0,0,0.3) mb-7 mt-3 block rounded-3xl border bg-[#F5F8FE] px-6 py-3 text-center text-sm font-semibold text-[#181B1F] transition duration-300 hover:bg-[#267596] hover:text-[#fff] lg:mt-5"
                    href="#"
                  >
                    Get Started
                  </a>
                  <ul>
                    <li className="flex items-center gap-3 mb-2">
                      <img className="" src="./landing/checkmark.svg" /> Own
                      terms selling
                    </li>
                    <li className="flex items-center gap-3 mb-2">
                      <img className="" src="./landing/checkmark.svg" /> Robust
                      integrations
                    </li>
                    <li className="flex items-center gap-3">
                      <img className="" src="./landing/checkmark.svg" /> One
                      time payment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
