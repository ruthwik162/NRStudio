"use client"
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis"
import { images } from "@/public/assets/assets";
import TextY from "../Components/TextY";

const Page = () => {
    return (
        <ReactLenis root>

            <div className="w-full min-h-screen overflow-x-hidden bg-white text-black px-[2vw] mx-auto">

                <section className="w-full min-h-screen px-[2vw] md:mt-[5vw] mt-[10vw]   ">
                    <div className="grid grid-cols-1  md:grid-cols-12 gap-4 pt-[10vw] md:pt-[5vw]">
                        <div className=" md:col-span-3 md:col-start-1">
                            <h1 sty className="xl:text-[1.5vw] xl:leading-[3vw] text-[8vw] font-radon uppercase font-bold font-stretch-75%">(Our Process)</h1>
                        </div>
                        <div className=" md:col-span-8 md:col-start-6 font-[PPNeueMontreal] font-bold w-full ">
                            <TextY>
                                <p className="text-[7vw] tracking-tight xl:leading-[3.2vw] xl:text-[3vw] lg:text-[3.5vw] lg:leading-[4vw] md:text-[4.5vw]   leading-[7vw] md:leading-[5vw]  text-black ">
                                    We believe in building lasting partnerships —
                                    not just delivering projects.
                                    Every website we craft carries your story, your emotion, and your identity.
                                </p>
                            </TextY>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 md:grid-cols-12 w-full h-full gap-4 ">
                        <div className="col-span-4 col-start-1 md:col-span-7 w-full h-[220px] md:h-[900px]">
                            <img src={images.processBanner.src} className="w-full h-full object-center object-cover " alt="" />
                        </div>
                        <div className="col-start-4 col-span-3 md:col-start-9 md:col-span-4 w-full h-[150px] md:h-[400px]">
                            <img src={images.mainbanner1.src} className="w-full h-full object-cover " alt="" />
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="w-full min-h-screen px-[2vw] flex items-start justify-start   overflow-hidden">
                    <div className=" pt-[3vw] ">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 space-y-2   items-start">
                            <div className="md:col-start-1 md:col-span-4 border-t border-gray-100/50 pt-[1vw] ">
                                <h1 className=""><span style={{ fontStretch: "75%" }} className="text-black font-semibold tracking-tight  xl:text-[4vw] text-[7vw] leading-[6vw] md:text-[4vw] md:leading-[3vw] lg:text-[3vw] lg:leading-[2.5vw] font-[dbsharp]">NR Studios</span></h1>
                                <h1 style={{ fontStretch: "75%" }} className=" sm:text-lg md:text-[3vw] md:leading-[3vw] lg:text-[2.5vw] lg:leading-[2.5vw] font-[Alliance-meduim] text-[4vw] leading-[4vw] 2xl:text-[1.7vw]  text-black/80 xl:leading-[2vw]">
                                    Is a Young Talent Crafting Knowledge
                                </h1>


                                <p className="text-base sm:text-lg pt-[5vw] font-[MyFont2] text-[5vw] max-w-md leading-[4vw]  md:text-[3vw] md:leading-[3vw] lg:text-[2vw] lg:leading-[2vw] xl:text-[1.8vw] text-black/80 xl:leading-[2vw]    ">
                                    Our 7-stage Agile flow blends design principles with development precision. We build in cycles of clarity and collaboration — keeping your vision alive at every step.
                                </p>

                                <div className="xl:text-[1vw] lg:text-[1.5vw] md:text-[2vw] text-[4vw] md:mt-[2vw] mt-[5vw] ">
                                    <h1 className="text-white/50 border-b w-[30%] md:w-[30%] xl:w-[25%]"> (Our Process)</h1>
                                </div>

                                <div className="overflow-hidden  w-full">
                                    {[" Concept & Requirement Gathering", " Sprint Planning", " Design & Development", "Testing & Quality Assurance", " Sprint Review & Feedback", " Deployment & Release", " User Feedback & Iteration"].map((items, id) => (
                                        <div key={id} className="border-b border-black/70 max-w-md">
                                            <h1 className="xl:text-[1.2vw] lg:text-[1.5vw] md:text-[1.8vw] text-[4.5vw] py-2"><span className="text-black/60 text-[3vw] md:text-[1.2vw]">({id + 1})</span> &nbsp; {items}</h1>
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                            <div className="md:col-start-5 md:col-span-8  ">
                                <div  className="w-full h-[500px] md:h-[1000px] overflow-hidden bg-red-600 rounded-sm">
                                    <img  className="w-full h-full object-center object-cover  rounded-sm" loading="lazy-loading" src={images.mainbanner1.src} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </ReactLenis>
    );
};

export default Page;
