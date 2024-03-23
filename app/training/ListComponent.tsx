"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"

const ListComponent = (props: any) => {
  const highLightRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      const rect = highLightRef?.current?.getBoundingClientRect()
      const isVisible = rect?.top >= 0 && rect?.bottom <= window.innerHeight
      if (isVisible) {
        props.setActive(highLightRef?.current?.getAttribute("id"))
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [highLightRef])

  return (
    <div className="w-full p-10 mb-20 bg-white border rounded-md shadow-md ">
      {/* {props.level && (
        <h2 id={props.level} className="font-bold text-[24px]">
          {props.level}
        </h2>
      )} */}

      <ol className="w-full list-inside">
        <li ref={highLightRef} id={props.title} className="w-full">
          <Link className="font-[600] text-xl" href="#">
            <span className="inline-block mr-2">{props.id}.</span>
            {props.title}
          </Link>
          <div className="flex items-center justify-center w-full my-5">
            <iframe
              width="560"
              height="315"
              src={props.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <ul className="ml-5 list-inside">
            <li>
              <span className="inline-block font-[500] mr-1 ">
                Importance :
              </span>{" "}
              {props.importance}
            </li>
            <li>
              <span className="inline-block font-[500] mr-1 ">
                Action Steps:
              </span>
              <ul className="ml-5 list-disc list-inside list">
                {props.actionSteps?.map((item, index) => {
                  return (
                    <li key={index} className=" text-[15px]">
                      {item}
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  )
}

export default ListComponent
