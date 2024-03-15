import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navlink from "./Navlink";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const trigger = useRef(null);
  const aboutVyom = useRef(null);
  const aboutaec = useRef(null);

  useEffect(() => {
    if (trigger.current) {
      gsap.fromTo(
        trigger.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: trigger.current,
            start: window.innerWidth > 768 ? "top 80%" : "top 20%",
            end: "bottom 80%",
            ease: "power4.easeInOut",
          },
        }
      );
    }
  }, []);

  return (
    <div className="h-fit relative pt-4 px-[3rem] xl:px-20  ">
      <div className="about flex flex-wrap text-white tracking-wide xl:tracking-[.5rem]  text-[2.7rem] sm:text-[4.3rem] md:text-[6rem] lg:text-[5.5rem] xl:text-[6.7rem]  leading-[normal] md:leading-[5rem] font-clash font-bold mt-16">
        <span>Okay cool! But</span>
        <span> hold on, what is</span>
        <span
          ref={trigger}
          className="text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[12.5rem] md:mt-4 lg:mt-12"
        >
          <span className="text-main_primary">VYOM</span>
        </span>
        <span className="text-[3.7rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[12rem] md:mt-4 lg:mt-8">
          ?
        </span>
      </div>
      <div className="font-chakra text-base py-8 leading-[5px] xl:mt-4">
        <span
          ref={aboutVyom}
          className="text-base font-medium text-white xl:text-xl"
        >
          <b>VYOM'24</b> is the upcoming inaugural tech fest conducted by
          Rungta Educational Foundation. It is an exciting adventure created to inspire the creativity
          and passion of tech enthusiasts in India. Inviting students from all over the
          Rungta Insitution to join in a celebration of technology, creativity, and
          teamwork. The <b>three-day</b> event encompasses activities such as
          Hackathons, Cultural programs, Sports events and various other competitions to
          enrich the overall learning experience. VYOM offers its diverse
          attendees the option to choose these events based on their own
          individual interests and learning styles. VYOM is one of its kind as
          it promises to leave a lasting impact on the individual and open new
          pathways for students to propel their careers. Come lets solve, create
          and thrive together!
        </span>
      </div>
      <div className="absolute font-clash font-bold text-white">
        <span className="flex gap-6 text-[2.3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem]">
          About <Navlink name={"RUNGTA"} link={"/#about"} />{" "}
        </span>
      </div>
      <div
        ref={aboutaec}
        className="flex flex-col mt-8 lg:flex-row items-center gap-8 py-8"
      >
        <p className="text-white text-base xl:text-xl font-chakra font-medium">
        Santosh Rungta Group of Institutions, Bhilai is an Epitome of Success, A temple of knowledge that inculcates excellence in its students, through a meticulously designed process, wherein its ensured that all students graduate with futuristic skills, stay ahead of times and are way ahead in terms of their technical and professional competency.
        </p>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="abvideo w-[22rem] h-[20rem] md:w-[24rem] xl:w-[28rem] xl:h-[18rem] object-cover rounded-2xl border border-gray/50"
        >
          <source src="/about.webm" type="video/webm" />
          
        </video>
      </div>
    </div>
  );
}
