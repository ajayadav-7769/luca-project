import React from "react";
import Header from "../../Header/Header";
import Team from "../Video";

import { useState, useEffect } from "react";

function TeamCard({ name, description, img, isComingSoon }) {
  return (
    <div className="w-[250px]">
      {/* Background color ab dono ke liye same hai */}
      <div className="flex border-2 border-dashed rounded-[16px] bg-[#61B9D1]">
        {isComingSoon ? (
          /* Vertical "Coming Soon" - Bottom to Top & Centered */
          <div className="h-[400px] w-full flex items-center justify-center overflow-hidden">
            <span
              className="text-white font-black text-[50px] opacity-50 select-none leading-none tracking-tighter rotate-180"
              style={{
                writingMode: "vertical-rl",
                textTransform: "uppercase",
              }}>
              Coming Soon
            </span>
          </div>
        ) : (
          /* Normal Image */
          <img
            src={img}
            alt={name}
            className="h-[400px] object-cover mx-auto"
          />
        )}
      </div>

      <div className="flex flex-col mt-2">
        <span className="font-bold text-[20px]">{name}</span>
        <span className="font-light">{description}</span>
      </div>
    </div>
  );
}

const Landing = () => {
  const constantCard = {
    name: "Luca",
    description: "Visionary but flawed leader learning balance.",
    img: "/Team/m1.png",
  };
  const slides = [
    {
      name: "Rene",
      description: "The wise mentor who teaches Luca about trust.",
      img: "/Team/m2.png",
    },
    {
      name: "Estelle",
      description: "Brilliant UX designer with amazing 3D skills.",
      img: "/Team/m3.png",
    },
    {
      name: "Vince",
      description: "The rock-solid architect who challenges authority.",
      img: "/Team/m1.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Screen size check karne ke liye
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mobileSlides = [constantCard, ...slides];
  const currentSlides = isMobile ? mobileSlides : slides;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1); // keep increasing forever
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const isMobile = window.innerWidth < 640;

    const targetId = isMobile ? "video-mobile-anchor" : "video-anchor";

    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <header>
        <Header />
      </header>

      <section className="-mb-55">
        <div>
          <div className="relative">
            <img src="/bg.png" className="w-[1600px] sm:block hidden" />
            <div className="sm:hidden">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 393 1006"
                fill="none">
                <path
                  d="M-518.72 1.00003V1346M-474.07 1V1346M-429.42 1V1346M-384.769 1V1346M-340.119 1V1346M-295.469 1V1346M-250.818 1V1346M-206.168 1V1346M-161.518 1V1346M-116.867 1V1346M-72.2171 1V1346M-27.5668 1V1346M17.0835 1V1346M61.7339 1V1346M106.384 1V1346M151.035 1V1346M195.685 1V1346M240.335 1V1346M284.986 1V1346M329.636 1V1346M374.286 1V1346M418.937 1V1346M463.587 1V1346M508.237 1V1346M552.888 1V1346M597.538 1V1346M642.188 1V1346M686.839 1V1346M731.489 1V1346M776.139 1V1346M820.789 1V1346M865.44 1V1346M913 1.2795L-519 1.27941M913 45.9003L-519 45.9002M913 90.5211L-519 90.521M913 135.142L-519 135.142M913 179.763L-519 179.763M913 224.384L-519 224.384M913 269.005L-519 269.005M913 313.625L-519 313.625M913 358.247L-519 358.246M913 402.867L-519 402.867M913 447.488L-519 447.488M913 492.109L-519 492.109M913 536.73L-519 536.729M913 581.35L-519 581.35M913 625.971L-519 625.971M913 670.592L-519 670.592M913 715.213L-519 715.213M913 759.834L-519 759.834M913 804.455L-519 804.455M913 849.076L-519 849.076M913 893.697L-519 893.697M913 938.317L-519 938.317M913 982.938L-519 982.938M913 1027.56L-519 1027.56M913 1072.18L-519 1072.18M913 1116.8H-519M913 1161.42H-519M913 1206.04H-519M913 1250.66H-519M913 1295.28H-519M913 1339.9H-519"
                  stroke="url(#paint0_linear_221_205)"
                  strokeOpacity="0.06"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_221_205"
                    x1="-286.3"
                    y1="2"
                    x2="-286.3"
                    y2="1346"
                    gradientUnits="userSpaceOnUse">
                    <stop stopOpacity="0" />
                    <stop offset="0.2547" stopColor="black" stopOpacity="1" />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="absolute top-[32%]  sm:top-60 sm:left-30">
            <div className="hidden sm:block">
              <h1 className="flex font-bold flex-col ml-4 text-[58px] sm:text-[68px]">
                <span className="-mb-4">
                  <span>
                    Ride the
                    <span className="bg-[#CC6D33]/20 border-l-4 text-[#CC6D33] px-2">
                      Wave of
                    </span>
                  </span>
                </span>

                <span>
                  <span>
                    <span className="bg-[#CC6D33]/20 text-[#CC6D33] px-1 border-r-4">
                      Leadership
                    </span>{" "}
                    with Luca.
                  </span>
                </span>

                {/* Box Image */}
                <img
                  src="/Landing/bubble.png"
                  alt="logo"
                  className="absolute -top-[8%] left-[3%]  sm:w-[235px] sm:-top-[20%]"
                />
                {/* Cirecl Image */}
                <img
                  src="/Landing/circle.png"
                  alt="logo"
                  className="absolute top-[40%] w-[235px] left-[70%]"
                />
                {/* Line Image */}
                <img
                  src="/Landing/line.png"
                  alt="logo"
                  className="absolute top-[22%] left-[89%]"
                />
              </h1>
            </div>

            {/* Mobile View */}

            <div className="sm:hidden relative -top-4">
              <h1 className="flex font-bold flex-col  ml-4  text-[58px]">
                <span className="-mb-4">
                  Ride the
                  <br />
                </span>
                <span className="bg-[#CC6D33]/20 border-l-2 text-[#CC6D33] px-1 leading-none py-[4px] w-fit -mb-1">
                  {" "}
                  Wave of
                </span>
                <span className="-mb-4">
                  <span className="bg-[#CC6D33]/20 text-[#CC6D33] px-1 py-[2px] border-r-2">
                    {" "}
                    Leadership
                  </span>
                </span>
                <span> with Luca.</span>

                {/* Box Image */}
                <img
                  src="/Landing/bubble.png"
                  alt="logo"
                  className="absolute -top-[15%] left-[6%] sm:-top-[20%] w-[160px]"
                />
                {/* Cirecl Image */}
                <img
                  src="/Landing/circle.png"
                  alt="logo"
                  className="absolute hidden sm:block top-[40%] w-[235px] left-[70%]"
                />
                {/* Line Image */}
                <img
                  src="/Landing/line.png"
                  alt="logo"
                  className="absolute hidden sm:block top-[25%] left-[89%]"
                />

                {/* Line Image Mobile View */}
                <img
                  src="/mobile-arrow.png"
                  alt="logo"
                  className="absolute top-[163%] left-[1%] sm:top-[22%] sm:left-[89%]"
                />
              </h1>
            </div>
            <div>
              <span className="text-[20px] hidden sm:block font-[400]">
                A fun animated series for those who want to lead with skill (and
                stoke).
              </span>
            </div>

            <div className="text-[18px] sm:hidden font-[400] ml-5 flex flex-col">
              <span>A fun animated series for those who</span>
              <span>want to lead with skill (and stoke).</span>
            </div>
          </div>

          {/* Watch The Series Section */}

          <div>
            {/* --- DESKTOP VIEW (Iska code aur positioning bilkul original hai) --- */}
            <div className="hidden sm:block">
              <div className="absolute top-[68%] left-[8%]">
                <img
                  src="/Landing/playbutton.png"
                  alt="Play Button"
                  className="w-13"
                />
              </div>

              <div className="absolute top-[68.5%] left-[14%] border-2 font-bold border-b-4 p-3 px-5 rounded-full">
                <button>Watch the Series</button>
              </div>

              <div className="absolute top-[68%] left-[26%]">
                <img src="/Landing/arrowleft.webp" alt="Arrow Left" />
              </div>

              <div className="absolute top-[68.5%] left-[0%]">
                {" "}
                {/* Yahan original left value dal dena agar koi thi */}
                <img
                  src="/Landing/arrowright.png"
                  alt="Arrow Right"
                  className="w-[70px]"
                />
              </div>
            </div>

            {/* --- MOBILE VIEW (Har phone screen pe center rahega) --- */}
            <div className="sm:hidden absolute top-[85%] w-full left-0 px-4">
              <div className="relative flex items-center justify-center">
                {/* Left side arrow (Agar mobile me chahiye toh) */}
                <div className="absolute left-0 opacity-0">
                  {" "}
                  {/* Hidden by default */}
                  <img
                    src="/Landing/arrowleft.png"
                    className="w-10 rotate-180"
                    alt=""
                  />
                </div>

                {/* Center Button Group */}
                <div className="flex items-center">
                  <img
                    src="/Landing/playbutton.png"
                    alt="Play Button"
                    className="w-10 z-10 -mr-0"
                  />
                  <button className="bg-white border-2 font-bold border-b-4 py-2 px-6 pl-8 ml-2 rounded-full">
                    Watch the Series
                  </button>
                </div>

                {/* Right Side Arrow */}
                <div className="absolute -right-6">
                  <img
                    src="/Landing/arrowleft.png"
                    alt="Arrow"
                    className="w-20"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="overflow-x-scroll">
            <div className="hidden sm:block absolute top-[15%] -right-[15%] sm:top-[10%] sm:right-[8%]">
              <img
                src="/Landing/hero.png"
                alt=""
                className="sm:w-[600px] w-[200px] max-w-none"
              />
            </div>
            <div className="absolute top-[24%]  sm:hidden -right-2 sm:top-[10%]  sm:right-[8%]">
              <img src="/Landing/hero.png" alt="" className="w-[170px]" />
            </div>
          </div>
        </div>

        {/* Scroll Image */}
        <div className="sm:block hidden">
          <div>
            <div className="absolute text-[20px] top-[97%]  sm:top-[80%] sm:left-[15.5%]">
              <button className="cursor-pointer" onClick={handleScroll}>
                Scroll
              </button>{" "}
            </div>
          </div>
          <div className="absolute text-[20px] top-[102%]  sm:top-[87%] sm:left-[16%]">
            <img
              src="/Landing/chevrons-down.svg"
              alt=""
              onClick={handleScroll}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Scroll Mobile View */}

        <div className="sm:hidden">
          <div>
            <div className="absolute flex w-full justify-center text-[20px] top-[91%]">
              <button onClick={handleScroll}>Scroll</button>
            </div>
          </div>
          <div className="absolute flex w-full justify-center text-[20px] top-[95%] ">
            <img
              src="/Landing/chevrons-down.svg"
              alt=""
              onClick={handleScroll}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Pin Image on Both side of text */}
        <div className="absolute top-[33%] left-100.5">
          <img src="/pin.png" alt="img" className="scale-100" />
        </div>
        <div className="absolute top-[54.4%] rotate-180 left-[496.5px]">
          <img src="/pin.png" alt="img" className="scale-100" />
        </div>
      </section>

      <section
        id="video-desktop"
        className="hidden sm:block scroll-mt-24 py-20">
        {/* ✅ Anchor point */}
        <div id="video-anchor" className="h-[1px]">
          {/* Text Section */}

          <div className="absolute left-30 top-[135%] ">
            <h1 className="text-[68px] font-bold flex flex-col">
              <span className="-mb-4">
                <span>
                  Luca
                  <span className="bg-[#CC6D33]/20 border-l-4 text-[#CC6D33] px-2">
                    &
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span className="bg-[#CC6D33]/20 text-[#CC6D33] px-1 border-r-4">
                    his Crew.
                  </span>
                </span>
              </span>

              {/* Box */}

              <div className="absolute -top-[20%]">
                <img src="/Landing/meet.png" alt="Meet" />
              </div>
              <div className="absolute top-[10%] -right-[14%]">
                {/* Arrow */}
                <img src="/Landing/arrow.png" alt="Meet" />
              </div>
            </h1>
          </div>

          {/* Team Images Section */}

          <div className="absolute w-[250px] top-[110%] right-[45%]">
            <TeamCard {...constantCard} />
            {/* Team Details */}
          </div>

          <div className="absolute w-[660px] top-[110%] left-[56%] overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-700"
              style={{
                transform: `translateX(-${(index % slides.length) * 50}%)`,
              }}>
              {[...slides, ...slides].map((member, i) => (
                <div key={i} className="w-[250px] flex-shrink-0">
                  <TeamCard {...member} />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-[134.5%] left-[271px]">
            <img src="/pin.png" alt="img" className="scale-100" />
          </div>

          <div className="absolute top-[157%] left-[411px] rotate-180">
            <img src="/pin.png" alt="img" className="scale-100" />
          </div>
        </div>
      </section>

      {/* Mobile View of Team Section */}

      <section
        id="video-mobile"
        className="sm:hidden overflow-hidden  scroll-mt-20 min-h-screen">
        {" "}
        <div id="video-mobile-anchor" className="h-[1px]">
          {/* Text Section */}

          <div className="absolute left-[5%] top-[115%] sm:top-[125%]">
            <h1 className="text-[68px] font-bold flex flex-col">
              <span className="-mb-4">
                <span>
                  Luca
                  <span className="bg-[#CC6D33]/20 border-l-4 text-[#CC6D33] px-2">
                    &
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span className="bg-[#CC6D33]/20 text-[#CC6D33] px-1 border-r-4">
                    his Crew.
                  </span>
                </span>
              </span>

              {/* Box */}

              <div className="absolute -top-[20%]">
                <img src="/Landing/meet.png" alt="Meet" />
              </div>
              <div className="absolute top-[235%] -left-[14%]">
                {/* Arrow */}
                <img src="/Landing/arrow.png" alt="Meet" />
              </div>
            </h1>
          </div>

          {/* Team Images Section - Ab yahan currentSlides use ho raha hai */}
          <div className="absolute w-full top-[142%] left-0 overflow-hidden">
            <div
              className="flex transition-transform duration-700"
              style={{
                // slides.length ki jagah currentSlides.length use karein taaki Luca count ho
                transform: `translateX(-${(index % currentSlides.length) * 100}%)`,
              }}>
              {currentSlides.map((member, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 flex justify-center">
                  <TeamCard {...member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
