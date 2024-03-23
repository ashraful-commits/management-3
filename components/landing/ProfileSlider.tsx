"use client"

import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import Link from "next/link"
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules"

const sliderData = [
  {
    name: "Frederic Hill",
    avatar: "./slider_profile_1.png",
    designation: "Founder & CEO",
    content:
      "Incredible efficiency boost! Our team's productivity skyrocketed since we started using SalesFam’s SaaS solution. Seamless integration and intuitive features make our workflow a breeze.",
    social: {
      fb: "https://facebook.com",
      tw: "https://twitter.com",
      ln: "https://linkedin.com",
    },
  },
  {
    name: "Emma Smith",
    avatar: "./slider_profile_2.png",
    designation: "Founder & CEO",
    content:
      "Game-changer for our business! With this SalesFam SaaS platform, we've streamlined our operations and gained valuable insights. Highly recommend for anyone seeking to scale up effortlessly.",
    social: {
      fb: "https://facebook.com",
      tw: "https://twitter.com",
      ln: "https://linkedin.com",
    },
  },
  {
    name: "Liam Johnson",
    avatar: "./slider_profile_3.png",
    designation: "Founder & CEO",
    content:
      "Top-notch support and results! From onboarding to ongoing assistance, the team behind the SalesFam SaaS has been phenomenal. Our ROI has exceeded expectations, thanks to their innovative approach.",
    social: {
      fb: "https://facebook.com",
      tw: "https://twitter.com",
      ln: "https://linkedin.com",
    },
  },
  {
    name: "Olivia Williams",
    avatar: "./slider_profile_4.png",
    designation: "Founder & CEO",
    content:
      "Incredible efficiency boost! Our team's productivity skyrocketed since we started using SalesFam’s SaaS solution. Seamless integration and intuitive features make our workflow a breeze.",
    social: {
      fb: "https://facebook.com",
      tw: "https://twitter.com",
      ln: "https://linkedin.com",
    },
  },
  {
    name: "Noah Brown",
    avatar: "./slider_profile_1.png",
    designation: "Founder & CEO",
    content:
      "Game-changer for our business! With this SalesFam SaaS platform, we've streamlined our operations and gained valuable insights. Highly recommend for anyone seeking to scale up effortlessly.",
    social: {
      fb: "https://facebook.com",
      tw: "https://twitter.com",
      ln: "https://linkedin.com",
    },
  },
  {
    name: "Ava Jones",
    avatar: "./slider_profile_2.png",
    designation: "Founder & CEO",
    content:
      "Top-notch support and results! From onboarding to ongoing assistance, the team behind the SalesFam SaaS has been phenomenal. Our ROI has exceeded expectations, thanks to their innovative approach.",
    social: {
      fb: "https://facebook.com",
      tw: "https://twitter.com",
      ln: "https://linkedin.com",
    },
  },
  {
    name: "William Davis",
    avatar: "./slider_profile_3.png",
    designation: "Founder & CEO",
    content:
      "Incredible efficiency boost! Our team's productivity skyrocketed since we started using SalesFam’s SaaS solution. Seamless integration and intuitive features make our workflow a breeze.",
    social: {
      fb: "https://facebook.com",
      tw: "https://twitter.com",
      ln: "https://linkedin.com",
    },
  },
  {
    name: "Sophia Miller",
    avatar: "./slider_profile_4.png",
    designation: "Founder & CEO",
    content:
      "Game-changer for our business! With this SalesFam SaaS platform, we've streamlined our operations and gained valuable insights. Highly recommend for anyone seeking to scale up effortlessly.",
    social: {
      fb: "https://facebook.com",
      tw: "https://twitter.com",
      ln: "https://linkedin.com",
    },
  },
  {
    name: "James Wilson",
    avatar: "./slider_profile_4.png",
    designation: "Founder & CEO",
    content:
      "Top-notch support and results! From onboarding to ongoing assistance, the team behind the SalesFam SaaS has been phenomenal. Our ROI has exceeded expectations, thanks to their innovative approach.",
    social: {
      fb: "https://facebook.com",
      tw: "https://twitter.com",
      ln: "https://linkedin.com",
    },
  },
]

export default function ProfileSlider() {
  return (
    <>
      <div className="prifile_wrap overflow-hidden bg-[#FBFCFD] pb-[100px] pt-[40px] md:pt-[50px]">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-6 items-center gap-5 pb-10">
            <div className="col-span-6 lg:col-span-2">
              <h2 className="text-center text-[30px] font-semibold leading-[1.3] sm:text-[34px] md:text-[45px] lg:text-left">
                Testimonials
              </h2>
            </div>
            <div className="col-span-6 lg:col-span-3">
              <p className="ml-[0px] max-w-[100%] text-center text-lg text-[#4F4F4F] lg:ml-[50px] lg:max-w-[450px] lg:text-left xl:ml-[100px]">
                We offer a variety of interesting features to help increase your
                productivity at work and manage your project effectively and
                efficiently
              </p>
            </div>
            <div className="col-span-6 text-center lg:col-span-1">
              <Link
                className="text-md shadow-[0_10px_60px_-15px_rgba(0,0,0,0.3) mt-2 inline-block rounded-lg bg-[#267596] px-6 py-3 text-lg font-bold text-white transition duration-300 hover:bg-[#000] lg:mt-7"
                href="/login"
              >
                Get Started
              </Link>
            </div>
          </div>

          <Swiper
            pagination={true}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="profileSlider !pb-14"
          >
            {sliderData.map((singleSlider, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="swiper-slide">
                    <div className="border-1 rounded-xl border  border-[#ddd] p-10 transition duration-300 hover:border-[#267596]">
                      <img
                        className="w-[60px] rounded-full"
                        src={singleSlider.avatar}
                      />
                      <h4 className="mt-2 text-[20px] font-bold text-[#181B1F]">
                        {singleSlider.name}
                      </h4>
                      <p className="mb-4 text-sm text-[#7C878E]">
                        {singleSlider.designation}
                      </p>
                      <p className="text-[#7C878E]">{singleSlider.content}</p>
                      <ul className="mt-5 flex gap-4">
                        <li>
                          <Link href={singleSlider.social.fb}>
                            <img className="w-[30px]" src="./facebook.svg" />
                          </Link>
                        </li>
                        <li>
                          <Link href={singleSlider.social.tw}>
                            <img className="w-[30px]" src="./twitter.svg" />
                          </Link>
                        </li>
                        <li>
                          <Link href={singleSlider.social.ln}>
                            <img className="w-[30px]" src="./linkedin.svg" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}
