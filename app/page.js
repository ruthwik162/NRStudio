"use client"
import React, { useRef } from "react"
import PageWrapper from "./Components/PageWrapper"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ReactLenis } from "@studio-freight/react-lenis"
import { images } from "../public/assets/assets"
import { SplitText } from "gsap/SplitText"
import TextY from "./Components/TextY"
import { ArrowDown } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function Page() {
  const mainRef = useRef(null)
  const logoRef = useRef(null);
  const hoverRef = useRef(null);
  const hoverFill = useRef(null);
  const hoverFill2 = useRef(null);
  const hoverText = useRef(null);

  useGSAP(() => {

    gsap.ticker.fps(60)

    // GPU acceleration
    gsap.set("*", { force3D: true, willChange: "transform" })


    gsap.from(".textH", {
      y: 200,
      duration: 1.8,
      ease: "power4.out",
      stagger: 0.08,
      delay: 0.85,
      force3D: true
    })

    const split = new SplitText(".textL", {
      type: "words,chars",
      charsClass: "char++",
    })

    gsap.from(split.chars, {
      y: 130,
      duration: 1,
      opacity: 0.8,
      ease: "power4.inOut",
      rotateY: -90,
      stagger: 0.02,
      delay: 1,
      force3D: true
    })

    // ScrollTrigger animation for logo
    gsap.to(logoRef.current, {
      scrollTrigger: {
        trigger: mainRef.current,
        start: "80% top",  // when hero section leaves the viewport
        end: "bottom top",
        scrub: true,
        force3D: true
      },
      position: "absolute",
      top: "2vw",
      left: "2vw",
      scale: 0.6,
      color: "#000",
      ease: "power4.out",
      transformOrigin: "top left",
    })

    // Animate border line from 0% width to full width
    gsap.set(".border-line", { width: "0%" })

    gsap.to(".border-line", {
      width: "100%",
      duration: 1.5,
      ease: "power4.inOut",
      delay: 1,
      force3D: true
    });

    const hover1 = hoverFill.current;
    const hover2 = hoverFill2.current;
    const Text = hoverText.current;

    // Initial setup
    gsap.set(hover1, { xPercent: 0 })
    gsap.set(hover2, { xPercent: 300 })
    gsap.set(Text,{xPercent:-10})

    // Hover enter animation
    hoverRef.current.addEventListener("mouseenter", () => {
      gsap.to(Text,{
        xPercent:10,
        duration:0.6,
        ease:"power3.out",
        force3D: true
      })
      gsap.to(hover1, {
        xPercent: 100,
        duration: 0.6,
        ease: "power3.out",
        force3D: true
      });
      gsap.to(hover2, {
        xPercent: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.3,
        force3D: true
      });
    });

    // Hover leave animation
    hoverRef.current.addEventListener("mouseleave", () => {
      gsap.to(Text,{
        xPercent:-10,
        duration:0.6,
        ease:"power3.out",
        force3D: true
      })
      gsap.to(hover1, {
        xPercent: 0,
        duration: 0.6,
        ease: "power3.inOut",
        force3D: true
      });
      gsap.to(hover2, {
        xPercent: -100,
        duration: 0.6,
        ease: "power3.inOut",
        delay: 0.05,
        force3D: true

      });
    });





  }, { scope: mainRef })

  return (
    <ReactLenis root>
      <div ref={mainRef} className="w-full overflow-hidden min-h-screen main  bg-[#16181B] text-white">
        <section className="w-full h-screen relative flex flex-col px-[2vw] bg-[#BFCCD8]  justify-center">
          <div className="2xl:w-[19.5vw] 2xl:h-[17vw] xl:w-[19.5vw] xl:h-[18vw] lg:w-[25vw] lg:h-[23vw] md:w-[35vw] md:h-[26vw]  absolute 2xl:top-[5vw] xl:top-[5vw] lg:top-[8vw] md:top-[20vw] left-0 bg-black"></div>

          {/* Hero Text */}
          <div className="overflow-hidden w-full h-full xl:pt-[5vw]  2xl:pt-[5vw] lg:pt-[8vw]   md:pt-[20vw] pt-[45vw]  text-white mix-blend-difference">
            <div className="border-wrapper  overflow-hidden">
              {/* Hero Text */}
              <div className="overflow-hidden xl:text-[6vw] xl:leading-[6vw] 2xl:text-[5vw] lg:text-[6vw] 2xl:leading-[5vw] lg:leading-[6vw] md:text-[8vw] text-[10vw] leading-[8vw] md:leading-[8vw] ">
                <h1 style={{ fontFamily: "Alliance-meduim" }} className="textH">
                  Every Innovation
                </h1>
              </div>
              <div className="overflow-hidden  xl:ml-[25%] lg:ml-[27%] 2xl:ml-[22%] md:ml-[18%] xl:text-[6vw] xl:leading-[6vw] 2xl:text-[5vw] lg:text-[6vw] text-[10vw] leading-[10vw] 2xl:leading-[5vw] lg:leading-[6vw] md:text-[8vw] md:leading-[8vw] ">
                <h1 style={{ fontFamily: "Alliance-meduim" }} className="textH">
                  Deserves Thoughtfull
                </h1>
              </div>
              <div className="overflow-hidden xl:text-[6vw] xl:leading-[6vw]  2xl:text-[7vw] 2xl:leading-[7vw] lg:text-[7vw] lg:leading-[7vw] md:text-[10vw] text-[10vw] leading-[8vw] md:leading-[10vw]">
                <h1 style={{ fontFamily: "Alliance-meduim" }} className="textH">
                  Developers
                </h1>
              </div>
              <div className="overflow-hidden xl:text-[1.5vw] xl:leading-[2vw] lg:text-[2vw] text-[4vw] leading-[4vw] mt-[5vw] md:mt-[1vw] lg:leading-[2vw] md:text-[3vw] md:leading-[3vw] md:w-[70%] lg:w-[40%] xl:w-[30%]">
                <p style={{ fontFamily: "Alliance-semibold" }} className="textH">
                  We turn your vision into meaningful digital experiences.
                </p>
              </div>

              <div className="border-line  w-0 h-[1.2px] mt-[2vw] xl:mt-[0.5vw] lg:mt-[1vw]  bg-white"></div>
            </div>
          </div>



          {/* NR Studio + Image */}
          <div className="overflow-full  w-full  h-full relative flex flex-col items-end justify-between ">
            <div className="overflow-hidden xl:text-[2vw] 2xl:text-[1.5vw] mt-[1vw] text-[4vw] lg:text-[2vw] lg:leading-[3vw] flex items-end justify-start text-end xl:leading-[2vw]">
              <p
                className="max-w-xl  text-end font-[Alliance-meduim]"
              >
                Crafting intuitive, human-focused interfaces — from pixels to backend logic
              </p>
            </div>
            <div className="w-full md:pb-[3vw] px-[5vw] flex items-center justify-between">
              <div ref={hoverRef} className="relative overflow-hidden cursor-pointer group">
                <h1 ref={hoverText} className="xl:text-[1.3vw] text-white mix-blend-difference flex items-center justify-center gap-2">
                  <ArrowDown /> &nbsp; Scroll Down &nbsp; <ArrowDown />
                </h1>
                <span ref={hoverFill} className="absolute bottom-0 left-0 w-full h-[2.5px] bg-white  " ></span>
                <span ref={hoverFill2} className="absolute bottom-0 left-0 w-full h-[2.5px] bg-white "></span>
              </div>

              <h1 className="text-[1vw]">We are from HYD</h1>
              <h1 className="text-[1vw]">We are from HYD</h1>
            </div>


          </div>
        </section>

        <section className="w-full min-h-screen px-[5vw] md:px-[2vw] pt-[7vw]">
          <div className="overflow-hidden xl:text-[8vw] text-[12vw] leading-[11vw] lg:text-[8vw] lg:leading-[7.5vw] md:w-[75%] xl:leading-[7vw] uppercase">
            <h1
              style={{ fontStretch: "85%" }}
              className="font-[dbsharp] font-bold"
            >
              Focused Design & Development
            </h1>
          </div>

          <div className="grid md:grid-cols-12 grid-cols-1 gap-4 pt-[5vw] w-full h-full">
            <div className="w-full h-full col-start-1 md:col-span-5 xl:col-span-4">
              <div className="overflow-hidden xl:text-[1.4vw] text-[4vw] mt-[5vw] leading-[4vw] text-white/70 lg:text-[2.5vw] lg:leading-[2.5vw] xl:leading-[1.5vw] xl:mt-[3vw]">
                <TextY>
                  <p style={{ fontFamily: "MyFont2" }} className="text-white/70">
                    At <span style={{ fontStretch: "75%" }} className="text-white font-bold font-[dbsharp]">NR Studios</span>, we craft purposeful digital experiences that combine strategic thinking with refined design and technology. Our approach ensures that every interaction feels intentional, engaging, and seamlessly functional.
                  </p>
                </TextY>
              </div>

              <div className="overflow-hidden xl:text-[1.4vw] text-[4vw] mt-[5vw] leading-[4vw] text-white/70 lg:text-[2.5vw] lg:leading-[2.5vw] xl:leading-[1.5vw] xl:mt-[3vw]">
                <TextY>
                  <p style={{ fontFamily: "MyFont2" }} className="text-white/70">
                    From the earliest stages of collaboration, we maintain open, transparent communication—aligning creative vision with business goals. Our team remains committed to providing guidance and technical support long after project delivery.
                  </p>
                </TextY>
              </div>

              <div className="overflow-hidden xl:text-[1.4vw] text-[4vw] mt-[5vw] leading-[4vw] text-white/70 lg:text-[2.5vw] lg:leading-[2.5vw] xl:leading-[1.5vw] xl:mt-[3vw]">
                <TextY>
                  <p style={{ fontFamily: "MyFont2" }}>
                    We work in close partnership with designers, developers, and QA specialists to ensure precision and harmony at every stage. The result is a final product that not only meets expectations—but elevates them through design clarity, performance, and purpose.
                  </p>
                </TextY>
              </div>
            </div>

            <div className="md:col-start-6 flex md:col-span-7 items-start justify-start">
              <div className="md:w-[80vw] md:h-[40vw] w-[90vw] h-auto overflow-hidden">
                <img
                  className="w-full h-full object-center object-cover"
                  loading="lazy"
                  src={images.twoBanner.src}
                  alt="NR Studios team working on digital experience design"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen px-[2vw] ">
          <div className="w-full min-h-screen mt-[2vw] ">

          </div>
        </section>


      </div>
    </ReactLenis>
  )
}
