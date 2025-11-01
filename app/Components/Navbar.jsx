"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import HoverText from "./HoverText";
import gsap from "gsap";
import { useTransitionRouter } from "next-view-transitions";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const router = useTransitionRouter();
  const lineRefs = useRef([]);
  const mail = useRef(null);
  const lineMail = useRef(null);
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const button2 = useRef(null);
  const hoverFill2 = useRef(null);
  const textHover2 = useRef(null);
  const arrow2 = useRef(null);

  const links = [
    { name: "Home", href: "/" },
    { name: "Studio", href: "/studio" },
    { name: "Project", href: "/project" },
    { name: "Process", href: "/process" },
  ];

  // ✅ Animate overlay open/close (bottom → top)
  useEffect(() => {
    if (menuOpen) {
      // open from bottom
      gsap.to(navRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        ease: "power4.inOut",
        pointerEvents: "auto",
      });

      // text slide-up reveal
      gsap.fromTo(
        ".textN",
        { y: 190,  },
        {
          y: 0,
          
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.04,
          delay: 0.3,
        }
      );
    } else {
      // close upwards
      gsap.to(navRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 1.2,
        ease: "power4.inOut",
        pointerEvents: "none",
      });
    }
  }, [menuOpen]);

  // ✅ Button hover fill effect
  useGSAP(() => {
    const btn = button2.current;
    const dot = hoverFill2.current;
    const text = textHover2.current;
    const arrowEl = arrow2.current;

    gsap.set(dot, { width: 0, height: 0, scale: 0, transformOrigin: "center center" });
    gsap.set(text, { yPercent: 0 });
    gsap.set(arrowEl, { x: 0 });

    const moveHandler = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(dot, {
        x,
        y,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const enterHandler = () => {
      gsap.to(dot, {
        width: 50,
        height: 50,
        scale: 10,
        duration: 0.8,
        ease: "power4.out",
      });
      gsap.to(arrowEl, { x: 10, duration: 0.5, ease: "power4.inOut" });
    };

    const leaveHandler = () => {
      gsap.to(dot, {
        width: 0,
        height: 0,
        scale: 0,
        duration: 0.6,
        ease: "power4.inOut",
      });
      gsap.to(arrowEl, { x: 0, duration: 0.5, ease: "power4.inOut" });
    };

    btn.addEventListener("mousemove", moveHandler);
    btn.addEventListener("mouseenter", enterHandler);
    btn.addEventListener("mouseleave", leaveHandler);

    return () => {
      btn.removeEventListener("mousemove", moveHandler);
      btn.removeEventListener("mouseenter", enterHandler);
      btn.removeEventListener("mouseleave", leaveHandler);
    };
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(lineRefs.current[index], {
      scaleX: 1,
      transformOrigin: "left center",
      duration: 0.8,
      ease: "power4.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(lineRefs.current[index], {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 0.8,
      ease: "power4.out",
    });
  };

  const handleMailEnter = () => {
    gsap.to(lineMail.current, {
      scaleX: 1,
      transformOrigin: "left center",
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const handleMailLeave = () => {
    gsap.to(lineMail.current, {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 0.8,
      ease: "power3.inOut",
    });
  };

  return (
    <>
      {/* ✅ Fullscreen Menu Overlay */}
      <div
        ref={navRef}
        className="w-screen h-screen fixed top-0 left-0 bg-black text-white z-40 flex items-center justify-center"
        style={{
          clipPath: "inset(0% 0% 100% 0%)",
          pointerEvents: "none",
        }}
      >
        <div
          style={{ fontStretch: "75%" }}
          className="w-full h-full flex items-start mx-[5vw] md:mx-[2vw] font-[Helvetica] uppercase font-thin xl:text-[4.5vw] xl:leading-[4vw] text-[11vw] leading-[10.5vw] md:text-[8vw] md:leading-[7.5vw] lg:text-[7vw] lg:leading-[6.5vw]  justify-center flex-col"
        >
          {links.map((link, i) => (
            <div
              key={link.name}
              className="relative tracking-tight overflow-hidden group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <HoverText>
                <h1 className="overflow-hidden">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      router.push(link.href, { onTransitionReady: pageAnimation });
                    }}
                    href={link.href}
                    className="block overflow-hidden textN relative"
                  >
                    {link.name}
                  </a>
                </h1>
              </HoverText>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Top Navbar */}
      <div
        style={{ fontFamily: "MyFont2" }}
        className="w-full fixed top-0 text-white mix-blend-difference left-0 p-5 md:p-8 xl:px-10 z-50 flex justify-between items-center"
      >
        <div
          style={{ fontStretch: "75%" }}
          className="overflow-hidden text-[5vw] uppercase font-[dbsharp] font-semibold sm:text-[3vw] text-white xl:text-[1.5vw] xl:leading-[1.5vw]"
        >
          <Link
            onClick={(e) => {
              e.preventDefault();
              router.push("/", { onTransitionReady: pageAnimation });
            }}
            href="/"
          >
            <HoverText>
              <h1>NR Studio©</h1>
            </HoverText>
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-center gap-5">
          <div
            ref={mail}
            onMouseEnter={handleMailEnter}
            onMouseLeave={handleMailLeave}
            style={{ fontStretch: "75%" }}
            className="relative overflow-hidden md:block hidden xl:text-[1.5vw] xl:leading-[1.5vw] font-semibold font-[dbsharp]" >
            <HoverText>
              <h1>HELLO@NRSTUDIOS.IN</h1>
            </HoverText>
            <span ref={lineMail} className="absolute left-0 bottom-0 h-[0.1vw] bg-white w-full origin-left scale-x-0" ></span>
          </div>

          <div className="overflow-hidden button">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              ref={button2}
              className="relative cursor-pointer w-[100px] h-[35px] md:w-[120px] md:h-[41px] border border-white rounded-full font-[dbsharp] font-semibold overflow-hidden uppercase tracking-wider" >
              <span  ref={hoverFill2}  className="absolute w-[30px] h-[30px] bg-white inset-0 rounded-full will-change-transform scale-0"></span>
              <span ref={textHover2} className="relative z-10 text-[4vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1vw] text-white flex items-center justify-center gap-3 mix-blend-difference" >
                {menuOpen ? "Close" : "Menu"}{" "}
                <ArrowRight ref={arrow2} strokeWidth={2} className="-rotate-45" />{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// ✅ Page transition animation
const pageAnimation = () => {
  document.documentElement.animate(
    [
      { opacity: 1, scale: 1, transform: "translateY(0)" },
      { opacity: 0.9, scale: 1, transform: "translateY(-30%)" },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13,1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      { scale: 1, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" },
      { scale: 1, clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)" },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13,1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default Navbar;
