"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronUp  , ChevronRight } from "lucide-react"

import ListComponent from "./ListComponent"

export default function TrainingPage() {
  const salesSkillsArray = [
    // Beginner Level
    {
      level: "Foundational Level: Establishing Strong Groundwork",
      title: "The Art of Establishing Connections",
      video: "https://www.youtube.com/embed/ABC123?si=22L4QsXh0awsLbrX",
      importance: "Establishing genuine connections is fundamental for successful sales endeavors.",
      actionSteps: [
        "Participate in team-building activities to foster camaraderie with colleagues.",
        "Practice active listening during conversations to understand clients' needs effectively.",
      ],
    },
    {
      level: "",
      title: "Essentials of Networking",
      video: "https://www.youtube.com/embed/DEF456?si=22L4QsXh0awsLbrX",
      importance: "Expanding your professional network is pivotal for unlocking new opportunities.",
      actionSteps: [
        "Attend industry events to connect with peers and industry leaders.",
        "Utilize LinkedIn to cultivate relationships with potential clients and thought leaders.",
      ],
    },
    {
      level: "",
      title: "Acknowledging Milestones",
      video: "https://www.youtube.com/embed/GHI789?si=22L4QsXh0awsLbrX",
      importance: "Recognizing achievements fosters a culture of excellence and motivation.",
      actionSteps: [
        "Celebrate individual and team successes during meetings to boost morale.",
        "Implement a rewards system to incentivize and acknowledge outstanding performance.",
      ],
    },
    // Intermediate Level
    {
      level: "Intermediate Level: Advancing Performance",
      title: "In-Depth Product Familiarization",
      video: "https://www.youtube.com/embed/JKL012?si=22L4QsXh0awsLbrX",
      importance: "Comprehensive product knowledge enhances credibility and confidence.",
      actionSteps: [
        "Participate in advanced product training sessions to deepen understanding.",
        "Stay abreast of industry developments to provide informed solutions to clients.",
      ],
    },
    {
      level: "",
      title: "Mastering Presentation Techniques",
      video: "https://www.youtube.com/embed/MNO345?si=22L4QsXh0awsLbrX",
      importance: "Compelling presentations effectively convey the value proposition and engage the audience.",
      actionSteps: [
        "Refine presentation skills through practice and feedback from peers.",
        "Tailor presentations to resonate with specific audience demographics and interests.",
      ],
    },
    {
      level: "",
      title: "Refining Negotiation Skills",
      video: "https://www.youtube.com/embed/PQR678?si=22L4QsXh0awsLbrX",
      importance: "Effective negotiation drives mutually beneficial agreements and fosters trust.",
      actionSteps: [
        "Study negotiation tactics and strategies to navigate complex discussions.",
        "Role-play negotiation scenarios to develop confidence and adaptability.",
      ],
    },
    {
      level: "",
      title: "Fostering Collaborative Relationships",
      video: "https://www.youtube.com/embed/STU901?si=22L4QsXh0awsLbrX",
      importance: "Collaboration amplifies collective performance and fosters innovation.",
      actionSteps: [
        "Engage in cross-functional collaboration to leverage diverse expertise.",
        "Establish open channels of communication to encourage idea sharing and feedback.",
      ],
    },
    // Advanced Level
    {
      level: "Advanced Level: Mastery and Leadership",
      title: "Strategic Planning and Analysis",
      video: "https://www.youtube.com/embed/VWX234?si=22L4QsXh0awsLbrX",
      importance: "Strategic thinking guides long-term success and competitive advantage.",
      actionSteps: [
        "Analyze market trends and competitor strategies to inform strategic decisions.",
        "Encourage innovation and forward-thinking within the organization.",
      ],
    },
    {
      level: "",
      title: "Effective Executive Communication",
      video: "https://www.youtube.com/embed/YZA567?si=22L4QsXh0awsLbrX",
      importance: "Clear and concise communication with executives is crucial for driving impactful sales.",
      actionSteps: [
        "Craft tailored messages that resonate with executive priorities and concerns.",
        "Seek mentorship from seasoned leaders to enhance executive communication skills.",
      ],
    },
    {
      level: "",
      title: "Mentorship and Leadership Development",
      video: "https://www.youtube.com/embed/BCD890?si=22L4QsXh0awsLbrX",
      importance: "Mentorship cultivates talent and fosters a culture of continuous growth and development.",
      actionSteps: [
        "Provide guidance and support to junior colleagues to nurture their professional growth.",
        "Lead by example, embodying leadership qualities and promoting teamwork and collaboration.",
      ],
    },
    {
      level: "",
      title: "Advanced Deal Closure Strategies",
      video: "https://www.youtube.com/embed/EFG123?si=22L4QsXh0awsLbrX",
      importance: "Expert deal closure techniques are essential for securing high-value agreements.",
      actionSteps: [
        "Analyze successful deal closures to identify effective strategies and best practices.",
        "Collaborate with interdisciplinary teams to address client needs comprehensively and strategically.",
      ],
    },
  ];

  const [active, setActive] = useState("")
  const [top, setTop] = useState(false)
  const handleScroll = () => {
    if (window.scrollY > 250) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="container-fluid  relative min-h-[100vh] z-0">
      <div className="flex min-w-[1536px]">
        <div className="relative flex w-full min-h-screen mt-5 top-[10%]">
          <div className="w-full h-full pl-10 mb-10">
            <div className="">
              {salesSkillsArray.map((item, index) => {
                return (
                  <ListComponent
                    setActive={setActive}
                    key={index}
                    id={index + 1}
                    video={item.video}
                    level={item.level}
                    title={item.title}
                    importance={item.importance}
                    actionSteps={item.actionSteps}
                  />
                )
              })}
            </div>
          </div>
          {/* //============================left sidebar  */}
          <div className="w-[480px] h-[80vh] sticky top-[10%] right-0">
            <ul className="min-h-full p-8 bg-white border-l-2 ">
              {salesSkillsArray.map((item, index) => (
                <div key={index}>
                  <li
                    className={
                      item.level !== ""
                        ? "mt-5 font-bold text-[16px] hover:text-orange-500 hover:font-bold transition-all duration-500 ease-in-out first:mt-0"
                        : "text-orange-500"
                    }
                  >
                    <Link href={`#${item.title}`}>{item.level}</Link>
                  </li>
                  <li className={"my-2 group"}>
                    <a
                      href={`#${item.title}`}
                      className={`flex items-start text-sm group-hover:text-orange-500 hover:font-bold hover:pl-2 transition-all duration-500 ease-in-out gap-x-2 ${
                        active === item.title
                          ? "text-orange-500 font-bold pl-2 underline"
                          : ""
                      }`}
                    >
                      <ChevronRight
                        size={20}
                        className="hover:text-primary transition-all duration-500 ease-in-out mt-[3px]"
                      />
                      {item.title}
                    </a>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {top && (
        <button
          className="sticky bottom-5 w-9 h-9 flex border justify-center items-center ml-auto bg-white shadow-md rounded-full z-[999]"
          onClick={scrollToTop}
        >
          <ChevronUp   className="text-white transition-all duration-500 ease-in-out bg-orange-500 rounded-full hover:bg-white size-8 hover:text-primary" />
        </button>
      )}
    </div>
  )
}
