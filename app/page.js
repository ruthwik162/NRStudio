"use client"
import React, { useEffect, useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ReactLenis } from "@studio-freight/react-lenis"
import { images } from "../public/assets/assets"
import { SplitText } from "gsap/SplitText"
import Footer from "./Components/Footer"
import TextY from "./Components/TextY"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function Page() {
  const mainRef = useRef(null)


  useGSAP(() => {

    gsap.ticker.fps(60)

    // GPU acceleration
    gsap.set("*", { force3D: true, willChange: "transform" })

    const splitNum = new SplitText(".text2025", {
      type: "words,chars",
      wordsClass: "word++",
      charsClass: "char++"
    })

    gsap.set(".char", { y: 200, force3D: true });
    gsap.to(splitNum.chars, {
      y: 0,
      duration: 1.8,
      ease: "power4.out",
      stagger: 0.03,
      delay: 0.85,
      force3D: true,
      scrollTrigger: {
        trigger: ".text2025",
        start: "top 80%",
      }
    })



    gsap.from(".textH", {
      y: 200,
      duration: 1.8,
      ease: "power4.out",
      stagger: 0.08,
      delay: 0.85,
      force3D: true
    })


  }, { scope: mainRef })

  useEffect(() => {
    document.fonts.ready.then(() => {
    });
  }, []);

  return (
    <ReactLenis root>
      <div ref={mainRef} className="w-full overflow-hidden min-h-screen main  bg-[#16181B] text-white">
        <section className="w-full min-h-screen relative  md:px-[2vw] bg-white px-[5vw]">
          {/* Hero Text */}
          <div className="overflow-hidden w-full h-full grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-8 pt-[20vw] xl:pt-[5vw] ">
            <div className="border-wrapper col-start-1 md:col-start-1 col-span-4 md:col-span-4 flex flex-col text-black overflow-hidden">
              {/* Hero Text */}
              <div className="overflow-hidden xl:text-[3vw] xl:leading-[3vw] 2xl:text-[3vw]  font-[PPNeueMontreal] font-semibold lg:text-[3vw] 2xl:leading-[3vw] lg:leading-[3vw] md:text-[5vw] text-[6vw] leading-[6vw] md:leading-[5vw] ">
                <h1 className="textH ">
                  Every Innovation
                </h1>
              </div>
              <div className="overflow-hidden xl:text-[3vw] xl:leading-[3vw] 2xl:text-[3vw] xl:-mt-[1vw] font-[PPNeueMontreal] font-semibold lg:text-[3vw] 2xl:leading-[4vw] lg:leading-[3vw] md:text-[5vw] text-[6vw] leading-[6vw] md:leading-[5vw] ">
                <h1 className="textH">
                  Deserves Thoughtful
                </h1>
              </div>
              <div className="overflow-hidden xl:text-[3vw] xl:leading-[3vw] 2xl:text-[3vw] xl:-mt-[1vw] font-[PPNeueMontreal] font-semibold lg:text-[3vw] 2xl:leading-[3vw] lg:leading-[3vw] md:text-[5vw] text-[6vw] leading-[6vw] md:leading-[5vw] ">
                <h1 className="textH">
                  Developers
                </h1>
              </div>
            </div>

            <div className="w-full h-full justify-end items-end pt-[5vw] xl:pt-[8vw] text-black col-start-1 md:col-start-6  col-span-3 md:col-span-3">
              <div className="overflow-hidden">
                <p className="textH xl:text-[5vw] text-[7vw] leading-[7vw] xl:leading-[4.5vw] xl:pt-[10vw] lg:text-[5vw] font-[PPNeueMontreal] font-bold lg:leading-[5.5vw]">
                  2025©
                </p>
              </div>
            </div>
            <div className="w-full md:col-start-9 col-start-3 mix-blend-normal md:col-span-4 col-span-4 overflow-hidden bg-red-500 h-full">
              <img
                className="w-full h-full object-center object-cover overflow-hidden"
                src={images.studioipad.src}  // image path
                alt="description"
                width={500}             // required
                height={500}            // required
              />

            </div>
            <div className="w-full col-start-1 overflow-hidden text-black pt-[2vw] col-span-3">
              <p className="xl:text-[1.2vw] xl:leading-[1.3vw] text-[4vw] leading-[4vw] textH">
                We turn your vision into meaningful digital experiences.
              </p>
            </div>
            <div className="w-full col-start-3 md:col-start-6 overflow-hidden text-black pt-[2vw] col-span-4 md:col-span-3">
              <p className="xl:text-[1.2vw] xl:leading-[1.3vw] text-[4vw] leading-[4vw] textH">
                Crafting intuitive, human-focused interfaces — from pixels to backend logic
              </p>
            </div>
            <div className="w-full col-start-3 md:col-start-11 text-black pt-[2vw] overflow-hidden col-span-4 md:col-span-2">
              <h1 className="xl:text-[2.2vw] text-[5.5vw] textH font-[PPNeueMontreal] font-bold justify-start ">Asthetic</h1>
            </div>
            <div className="w-full col-start-2 md:col-start-6 text-black relative col-span-4 md:col-span-6">
              <h1 className="xl:text-[9.2vw]  lg:text-[9vw] text-[13.5vw] tracking-tight font-[PPNeueMontreal] font-bold uppercase">ELEGANCE*</h1>
              <h1 className="xl:text-[2.2vw] text-[4vw] absolute bottom-0 right-0 font-[PPNeueMontreal] font-bold ">Speaks</h1>
            </div>
          </div>
        </section>

        <section className="w-full min-h-screen bg-white px-[5vw] md:px-[2vw]  ">
          <div className="overflow-hidden pt-[10vw] xl:pt-[5vw]">
            <h1 className="uppercase xl:text-[5vw] text-[8vw] font-bold font-[PPNeueMontreal] text-black">Intro</h1>
          </div>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-8 ">
            <div className="md:col-start-1 col-start-5 col-span-2 overflow-hidden pt-[5vw]">
              <img src={images.feviconico.src} className="w-full h-full object-center object-cover" />
            </div>
            <div className="md:col-start-4 col-start-1 col-span-5 md:col-span-4 overflow-hidden pt-[5vw]">
              <TextY>
                <p className="xl:text-[1.2vw] text-[4vw] leading-[4.5vw]  w-full xl:leading-[1.2vw] font-[Helvetica]  text-black">
                  At our approach, we transform ideas into powerful digital experiences. Whether we build your website from the ground up or elevate your existing design, every decision we make is intentional
                </p>
              </TextY>
            </div>
            <div className="md:col-start-9 md:col-span-3 col-start-4 col-span-3 overflow-hidden pt-[5vw]">
              <TextY>
                <h1 className="xl:text-[5vw] xl:leading-[5vw] text-[11vw] font-[PPNeueMontreal] font-bold text-black">Elevate</h1>
                <h2 className="xl:text-[2vw] text-[5vw] -mt-[2vw] md:-mt-[1vw] font-[PPNeueMontreal] font-bold text-black">Designs</h2>
              </TextY>
            </div>
            <div className="md:col-start-1 col-start-1 col-span-2 overflow-hidden pt-[5vw]">
              <h1 className="xl:text-[4vw] text-[7vw] text2025 font-[Helvetica] text-black font-bold">2025©</h1>
            </div>
            <div className="md:col-start-9 col-span-4 overflow-hidden pt-[5vw]">
              <TextY>
                <p className="xl:text-[1.2vw] xl:leading-[1.2vw] text-[4vw] leading-[4.5vw] font-[Helvetica]  text-black">
                  At our approach, we transform ideas into powerful digital experiences. Whether we build your website from the ground up or elevate your existing design, every decision we make is intentional
                </p>
              </TextY>
            </div>
          </div>
        </section>

        <section className="min-h-screen w-full md:px-[2vw] px-[5vw] bg-white">
          <div className="overflow-hidden pt-[5vw]">
            <h1 className="uppercase xl:text-[5vw] font-bold font-[PPNeueMontreal] text-black">Services</h1>
          </div>
        </section>

        <section className="w-full min-h-screen md:h-screen">
          <Footer />
        </section>


      </div>
    </ReactLenis>
  )
}
