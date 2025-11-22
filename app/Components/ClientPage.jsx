"use client"
import React, { useEffect, useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ReactLenis } from "@studio-freight/react-lenis"
import { SplitText } from "gsap/SplitText"



gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function ClientPage() {
  const mainRef = useRef(null)
  const hoverRef = useRef(null);
  const hoverFill = useRef(null);
  const hoverFill2 = useRef(null);
  const hoverText = useRef(null);
  const image = useRef(null);
  const filterRef = useRef(null);

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
    gsap.set(Text, { xPercent: -10 })

    // Hover enter animation
    hoverRef.current.addEventListener("mouseenter", () => {
      gsap.to(Text, {
        xPercent: 10,
        duration: 0.6,
        ease: "power3.out",
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
      gsap.to(Text, {
        xPercent: -10,
        duration: 0.6,
        ease: "power3.out",
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

    const img = image.current;
    const filter = filterRef.current;

    // Initial states
    gsap.set(".img", { scale: 1, filter: "blur(0px)", willChange: "transform, filter" });
    gsap.set(".img2", { opacity: 0, scale: 0.9, willChange: "transform, opacity", force3D: true });
    gsap.set(filter, { opacity: 0, force3D: true })

    // Hover Enter
    const handleEnter = () => {
      gsap.to(".img", {
        scale: 1.05,
        filter: "blur(6px)",
        duration: 0.2,
        ease: "power4.out",
        force3D: true,
      });
      gsap.to(filter, {
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        force3D: true
      })
      gsap.to(".img2", {
        scale: 1.2,
        opacity: 1,
        duration: 0.6,
        ease: "expo.inOut",
        force3D: true,
      });
    };

    // Hover Leave
    const handleLeave = () => {
      gsap.to(".img", {
        scale: 1,
        filter: "blur(0px)",
        duration: 0.2,
        ease: "power3.out",
        force3D: true,
      });
      gsap.to(filter, {
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
        force3D: true
      })
      gsap.to(".img2", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        force3D: true,
      });
    };

    // Event listeners
    img.addEventListener("mouseenter", handleEnter);
    img.addEventListener("mouseleave", handleLeave);

    // Cleanup
    return () => {
      img.removeEventListener("mouseenter", handleEnter);
      img.removeEventListener("mouseleave", handleLeave);
    };






  }, { scope: mainRef })

  useEffect(() => {
    document.fonts.ready.then(() => {
    });
  }, []);

  return (
    <ReactLenis root>
      <div ref={mainRef} className="w-full overflow-hidden min-h-screen main  bg-[#16181B] text-white">
        <section className="w-full min-h-screen relative flex flex-col px-[2vw] bg-white justify-center">

          {/* Hero Text */}
          <div className="overflow-hidden w-full h-full grid grid-cols-12 gap-8 xl:pt-[5vw] ">


            <div className="border-wrapper md:col-start-1 col-span-4 flex flex-col text-black overflow-hidden">
              {/* Hero Text */}
              <div className="overflow-hidden xl:text-[3vw] xl:leading-[3vw] 2xl:text-[3vw]  font-[PPNeueMontreal] font-semibold lg:text-[3vw] 2xl:leading-[3vw] lg:leading-[3vw] md:text-[5vw] text-[8vw] leading-[8vw] md:leading-[5vw] ">
                <div className="textH">
                  <h1>Every Innovation</h1>
                </div>

              </div>
              <div className="overflow-hidden xl:text-[3vw] xl:leading-[3vw] 2xl:text-[3vw] xl:-mt-[1vw] font-[PPNeueMontreal] font-semibold lg:text-[3vw] 2xl:leading-[4vw] lg:leading-[3vw] md:text-[5vw] text-[8vw] leading-[8vw] md:leading-[5vw] ">
                <div className="textH">
                  Deserves Thoughtful
                </div>
              </div>
              <div className="overflow-hidden xl:text-[3vw] xl:leading-[3vw] 2xl:text-[3vw] xl:-mt-[1vw] font-[PPNeueMontreal] font-semibold lg:text-[3vw] 2xl:leading-[3vw] lg:leading-[3vw] md:text-[5vw] text-[8vw] leading-[8vw] md:leading-[5vw] ">
                <h1 className="textH">
                  Developers
                </h1>
              </div>



            </div>

            <div className="w-full h-full justify-end items-end pt-[8vw] text-black md:col-start-6  col-span-2">
              <p className="textH xl:text-[5vw] xl:leading-[4.5vw] pt-[10vw] lg:text-[5vw] font-[PPNeueMontreal] font-bold lg:leading-[5.5vw]">
                2025©
              </p>
            </div>
            <div className="w-full md:col-start-9 mix-blend-normal col-span-4 overflow-hidden bg-red-500 h-full">
              <img
                className="w-full h-full object-center object-cover overflow-hidden"
                src={images.studioipad.src}  // image path
                alt="description"
                width={500}             // required
                height={500}            // required
              />

            </div>


            <div className="w-full col-start-1 text-black pt-[2vw] col-span-3">
              <p className="xl:text-[1.2vw]">
                We turn your vision into meaningful digital experiences.
              </p>
            </div>
            <div className="w-full col-start-6 text-black pt-[2vw] col-span-3">
              <p className="xl:text-[1.2vw]">
                Crafting intuitive, human-focused interfaces — from pixels to backend logic
              </p>
            </div>
            <div className="w-full col-start-11 text-black pt-[2vw] col-span-2">
              <h1 className="xl:text-[2.2vw] font-[PPNeueMontreal] font-bold justify-start uppercase">PERFECTION</h1>
            </div>
            <div className="w-full col-start-6 text-black relative col-span-6">
              <h1 className="xl:text-[9.2vw] lg:text-[9vw] tracking-wide font-[PPNeueMontreal] font-bold uppercase">ELEGANCE*</h1>
              <h1 className="xl:text-[2.2vw] absolute bottom-0 right-0 font-[PPNeueMontreal] font-bold ">Speaks</h1>
            </div>

          </div>
        </section>

        <section className="w-full h-screen md:px-[2vw] bg-white">

        </section>

        <section className="w-full min-h-screen px-[5vw]  md:px-[2vw] pt-[7vw]">
          <div className="overflow-hidden xl:text-[8vw] text-[12vw] leading-[11vw] lg:text-[8vw] lg:leading-[7.5vw] md:w-[75%] xl:leading-[7vw] uppercase">
            <h1
              style={{ fontStretch: "85%" }}
              className="font-[dbsharp] font-bold"
            >
              Focused Design & Development
            </h1>
          </div>

          <div className="grid md:grid-cols-12 tracking-tight grid-cols-1 gap-4 pt-[5vw] w-full h-full">
            <div className="w-full h-full col-start-1 md:col-span-5 xl:col-span-4">
              <div className="overflow-hidden xl:text-[1.4vw] text-[4vw] mt-[5vw] md:mt-[2vw] leading-[4vw] text-white/70 lg:text-[2.5vw] md:text-[3vw] md:leading-[3vw] lg:leading-[2.5vw] xl:leading-[1.5vw] xl:mt-[3vw]">
                <TextY>
                  <p style={{ fontFamily: "MyFont2" }} className="text-white/70">
                    At <span style={{ fontStretch: "75%" }} className="text-white font-bold font-[dbsharp]">NR Studios</span>, we craft purposeful digital experiences that combine strategic thinking with refined design and technology. Our approach ensures that every interaction feels intentional, engaging, and seamlessly functional.
                  </p>
                </TextY>
              </div>

              <div className="overflow-hidden xl:text-[1.4vw] text-[4vw] mt-[5vw] leading-[4vw] text-white/70 lg:text-[2.5vw] md:text-[3vw] md:leading-[3vw] lg:leading-[2.5vw] xl:leading-[1.5vw] xl:mt-[3vw]">
                <TextY>
                  <p style={{ fontFamily: "MyFont2" }} className="text-white/70">
                    From the earliest stages of collaboration, we maintain open, transparent communication—aligning creative vision with business goals. Our team remains committed to providing guidance and technical support long after project delivery.
                  </p>
                </TextY>
              </div>

              <div className="overflow-hidden xl:text-[1.4vw] text-[4vw] mt-[5vw] leading-[4vw] text-white/70 md:text-[3vw] md:leading-[3vw] lg:text-[2.5vw] lg:leading-[2.5vw] xl:leading-[1.5vw] xl:mt-[3vw]">
                <TextY>
                  <p style={{ fontFamily: "MyFont2" }}>
                    We work in close partnership with designers, developers, and QA specialists to ensure precision and harmony at every stage. The result is a final product that not only meets expectations—but elevates them through design clarity, performance, and purpose.
                  </p>
                </TextY>
              </div>
            </div>

          </div>
        </section>
        <section className="w-full min-h-screen px-[2vw] ">
          <div className="w-full min-h-screen mt-[2vw] ">

          </div>
        </section>
        <section className="w-full min-h-screen md:h-screen">
          <Footer />
        </section>


      </div>
    </ReactLenis>
  )
}
