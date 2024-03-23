import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer bg-[#141F39] py-[60px]" id="contact">
      <div className="container">
        {/* footer layer one  */}
        <div className="layer_1 border-1 mb-10 border-b border-[#ffffff26] pb-10">
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-10 lg:col-span-6">
              <h3 className="text-[30px] font-medium leading-[1.2] text-[#ffffffb3] md:text-[40px]">
                Ready to Transform Your Business?
              </h3>
              <p className="text-md mb-1 mt-4 text-[#ffffff99]">
                Explore a range of exciting features designed to enhance your
                productivity and simplify project management
              </p>
              <Link
                className="text-md mt-7 inline-block rounded-lg bg-[#267596] px-6 py-3 font-bold text-white transition duration-300 hover:bg-[#000]"
                href="/login"
              >
                Get Started
              </Link>
            </div>
            <div className="col-span-10 mt-4 lg:col-span-4 lg:mt-0">
              <h4 className="mb-4 text-[20px] font-medium text-[#ffffffb3]">
                Find us on Social Media
              </h4>
              <ul className="flex flex-col gap-[20px] sm:flex-row lg:gap-[40px] xl:gap-[90px]">
                <li>
                  <p className="text-[#ffffff99]">Call Us</p>
                  <Link
                    className="inline-block text-[18px] text-[#267596] transition hover:text-[#fff]"
                    href="tel:(209) 890-8565"
                  >
                    (209) 890-8565
                  </Link>
                </li>
                <li>
                  <p className="text-[#ffffff99]">Email Us</p>
                  <Link
                    className="inline-block text-[18px] text-[#267596] transition hover:text-[#fff]"
                    href="mailto:info@salesfam.com"
                  >
                    info@salesfam.com
                  </Link>
                </li>
              </ul>
              <h4 className="mt-[40px] text-[20px] font-medium text-[#ffffffb3]">
                Find us on Social Media
              </h4>
              <ul className="mt-4 flex gap-5">
                <li>
                  <Link href="#">
                    <img className="" src="./landing/facebook_icon.svg" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img className="" src="./landing/twitter_icon.svg" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img className="" src="./landing/linkedin_icon.svg" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* footer layer two  */}
        <div className="layer_2 border-1 mb-10 border-b border-[#ffffff26] pb-9">
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2">
              <h3 className="mb-4 text-[24px] font-normal text-[#ffffffb3]">
                Quick Link
              </h3>
              <ul>
                <li>
                  <Link
                    className="mb-2 inline-block text-[#ffffff99] transition hover:text-[#fff]"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-2 inline-block text-[#ffffff99] transition hover:text-[#fff]"
                    href="#"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-2 inline-block text-[#ffffff99] transition hover:text-[#fff]"
                    href="#"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-2 inline-block text-[#ffffff99] transition hover:text-[#fff]"
                    href="#"
                  >
                    Solution
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-2 inline-block text-[#ffffff99] transition hover:text-[#fff]"
                    href="#"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2">
              <h3 className="mb-4 text-[24px] font-normal text-[#ffffffb3]">
                Services
              </h3>
              <ul>
                <li>
                  <Link
                    className="mb-2 inline-block text-[#ffffff99] transition hover:text-[#fff]"
                    href="#"
                  >
                    Commerce
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-2 inline-block text-[#ffffff99] transition hover:text-[#fff]"
                    href="#"
                  >
                    Payments
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-2 inline-block text-[#ffffff99] transition hover:text-[#fff]"
                    href="#"
                  >
                    Point of sale
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-2 inline-block text-[#ffffff99] transition hover:text-[#fff]"
                    href="#"
                  >
                    Stock Management
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-2 inline-block text-[#ffffff99] transition hover:text-[#fff]"
                    href="#"
                  >
                    Customer Directory
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2">
              <h3 className="mb-4 text-[24px] font-normal text-[#ffffffb3]">
                Resource
              </h3>
              <ul>
                <li>
                  <Link
                    className="mb-2 inline-block text-[#ffffff99] transition hover:text-[#fff]"
                    href="#"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-2 inline-block text-[#ffffff99] transition hover:text-[#fff]"
                    href="#"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-2 inline-block text-[#ffffff99] transition hover:text-[#fff]"
                    href="#"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-2 inline-block text-[#ffffff99] transition hover:text-[#fff]"
                    href="#"
                  >
                    Tutorials
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-10 sm:col-span-5 md:col-span-10 lg:col-span-4">
              <h3 className="mb-1 text-[24px] font-normal text-[#ffffffb3]">
                Join our newsletter
              </h3>
              <p className="mb-4 text-sm text-[#ffffff99]">
                Keep up to date with everything Reflect
              </p>
              <div className="flex">
                <input
                  className="mr-4 w-full rounded-md border border-[#ffffff26] bg-transparent px-5 py-3"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="rounded-md border border-[#ffffff26] bg-[#141F39] px-5 text-white delay-300 hover:bg-black">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* footer layer three  */}
        <div className="layer_3">
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-10 md:col-span-5">
              <ul className="flex items-center justify-center gap-4 md:justify-start">
                <li>
                  <Link
                    href="#"
                    className="inline-block text-sm text-[#ffffff99]"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <p className="text-md text-[#ffffff99]">.</p>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-block text-sm text-[#ffffff99]"
                  >
                    Terms of Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-10 text-center md:col-span-5 md:text-right">
              <p className="text-sm text-[#ffffff99]">
                © 2010-2024 SalesFam - All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
