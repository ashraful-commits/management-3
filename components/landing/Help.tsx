"use client"

import { useRef, useState } from "react"
import { Play } from "lucide-react"

export default function Help() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const togglePlayPause = () => {
    const video = videoRef.current

    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }

      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="help_wrap ">
      <div className="help_section bg-[#141F39] pb-[50px] pt-[70px] sm:pt-[100px] md:pt-[100px]">
        <div className="container px-5 mx-auto">
          {/* Video Start */}
          <div className="relative text-center video">
            {/* <div className="absolute z-50 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <button onClick={togglePlayPause}>
                {isPlaying ? (
                  ""
                ) : (
                  <>
                    <div className="flex items-center justify-center text-white rounded-full size-20 bg-primary">
                      <Play size="30" className="ml-1" />
                    </div>
                  </>
                )}
              </button>
            </div>
            <div className="rounded-xl bg-[url('./../public/landing/intro.jpg')] bg-cover bg-center">
              <video ref={videoRef} controls className="mx-auto max-h-[678px]">
                <source src="/landing/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> */}
            <iframe
              className="w-full overflow-hidden rounded-md aspect-video"
              src="https://www.youtube.com/embed/yyJm5IRYGgE?si=nK8kLria5qdcHUy6&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          {/* Video End */}
          {/* Manage  start*/}
          <div className="manage grid grid-cols-10 gap-4 pb-7 pt-8 text-[#fff]">
            <div className="col-span-10 pr-[0px] lg:col-span-5 lg:pr-[80px]">
              <h2 className="mb-3 mt-[0px] text-[30px] font-semibold leading-[1.3] sm:text-[34px] md:text-[42px] lg:mt-[50px]">
                Manage Sales effectively on our dashboard through SaaS
              </h2>
              <p className="text-lg text-[#A6A6A6]">
                The Software as a Service (SaaS) delivery model has become
                prevalent across various business applications, encompassing
                office software, messaging tools, payroll processing systems,
                database management software, and management solutions
              </p>
              <div className="mt-10 grid max-w-[500px] grid-cols-10 gap-4">
                <div className="col-span-10 md:col-span-5">
                  <div className="flex gap-2 rating">
                    <img className="w-[26px]" src="./landing/star.svg" />
                    <img className="w-[26px]" src="./landing/star.svg" />
                    <img className="w-[26px]" src="./landing/star.svg" />
                    <img className="w-[26px]" src="./landing/star.svg" />
                    <img className="w-[26px]" src="./landing/star.svg" />
                  </div>
                  <h3 className="mt-3 text-[22px]">4.9 / 5 rating</h3>
                  <p className="text-lg text-[#A6A6A6]">databricks</p>
                </div>
                <div className="col-span-10 md:col-span-5">
                  <div className="flex gap-2 rating">
                    <img className="w-[26px]" src="./landing/star.svg" />
                    <img className="w-[26px]" src="./landing/star.svg" />
                    <img className="w-[26px]" src="./landing/star.svg" />
                    <img className="w-[26px]" src="./landing/star.svg" />
                    <img className="w-[26px]" src="./landing/star_blank.svg" />
                  </div>
                  <h3 className="mt-3 text-[22px]">4.9 / 5 rating</h3>
                  <p className="text-lg text-[#A6A6A6]">databricks</p>
                </div>
              </div>
            </div>
            {/* Right side */}
            <div className="col-span-10 pl-0 lg:col-span-5 lg:pl-7">
              <div className="mt-[60px] flex items-start gap-4">
                <img
                  className="w-[40px] sm:w-[60px]"
                  src="./landing/publishing.svg"
                />
                <div className="text">
                  <h4 className="mb-3 mt-[-3px] text-[25px] font-semibold">
                    Publishing
                  </h4>
                  <p className="text-lg text-[#A6A6A6]">
                    Plan, collaborate, and publish your content to foster
                    meaningful engagement and growth for your brand. A
                    structured approach to delivering changes to the software
                    while minimizing disruption to users and maximizing the
                    value delivered by the updates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mt-8">
                <img
                  className="w-[40px] sm:w-[60px]"
                  src="./landing/analytics.svg"
                />
                <div className="text">
                  <h4 className="mb-3 mt-[-3px] text-[25px] font-semibold">
                    Analytics
                  </h4>
                  <p className="text-lg text-[#A6A6A6]">
                    Analyze your performance; create effective, detailed and
                    relevant reports. Gain valuable insights into user behavior,
                    make data-driven decisions to improve the software, and
                    ultimately enhance the overall user experience and business
                    performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mt-8">
                <img
                  className="w-[40px] sm:w-[60px]"
                  src="./landing/engagement.svg"
                />
                <div className="text">
                  <h4 className="mb-3 mt-[-3px] text-[25px] font-semibold">
                    Engagement
                  </h4>
                  <p className="text-lg text-[#A6A6A6]">
                    Creating an environment that encourages active
                    participation, fosters a sense of community, and delivers
                    ongoing value to users.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Manage End */}
        </div>
      </div>
    </div>
  )
}
