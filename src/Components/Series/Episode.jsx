import React, { useState, useRef } from "react";

const Episode = () => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null && videoRefs.current[playingIndex]) {
        videoRefs.current[playingIndex].pause();
      }

      video.currentTime = 0; // 🔥 optional but smooth
      video.play();

      setPlayingIndex(index);
    }
  };

  const items = [
    {
      id: 1,
      title: "Name of Exsode 01",
      video: "/Videos/c1.mp4",
      poster: "/e1.png",
    },
    {
      id: 2,
      title: "Name of Episode 02",
      video: "/Videos/c2.mp4",
      poster: "/e2.png",
    },
    {
      id: 3,
      title: "Name of Episode 03",
      video: "/Videos/c3.mp4",
      poster: "/e3.png",
    },
    {
      id: 4,
      title: "Name of Episode 04",
      video: "/Videos/c4.mp4",
      poster: "/e4.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

const handleNext = () => {
  setCurrentIndex((prev) =>
    prev === items.length - 1 ? 0 : prev + 1
  );
};

const handlePrev = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? items.length - 1 : prev - 1
  );
};

  return (
    <div>
      <section className="hidden sm:block">
        <div className="absolute top-[125%]">
          <img src="/bg.png" className="w-[1600px] h-[1000px]" />
        </div>

        <div className="absolute top-[110%] right-[23%]">
          <img src="/right.png" className="h-[100px]" />
        </div>
        <div className="absolute left-30 top-[123%]">
          <div className="flex tems-center">
            <h1 className="text-[68px] font-bold flex items-center gap-3">
              All
              <span className="bg-[#CC6D33]/20 border-l-4 border-r-4  gap- text-[#CC6D33] px-2 flex items-center gap-5">
                Episodes Season → 01.
              </span>
            </h1>
          </div>

          {/* Video Section */}
          <div className="relative w-full flex justify-center mt-12">
            <div className="overflow-hidden w-[1392px]">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 40}%)` }}>
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="min-w-[40%] flex-shrink-0 p-2 relative">
                    {/* Video */}
                    <div className="w-[527px] h-[297px] border-2 rounded-[16px] overflow-hidden relative">
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        poster={item.poster}
                        playsInline
                        className="w-full h-full object-cover relative z-10">
                        <source src={item.video} type="video/mp4" />
                      </video>

                      {/* Overlay controls */}
                      <div className="absolute z-20 bottom-2 left-6 flex items-center gap-4">
                        {/* Play Button */}
                        <div
                          onClick={() => handlePlay(index)}
                          className="rounded-full cursor-pointer bg-white h-12 w-12 flex items-center justify-center">
                          <img
                            src="/play-button.png"
                            alt="play"
                            className="w-6 h-6 ml-1"
                          />
                        </div>

                        {/* Text Button */}
                        <div
                          onClick={() => handlePlay(index)}
                          className="rounded-full bg-white px-4 py-2 font-semibold cursor-pointer">
                          Watch Episode → {item.id}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <p className="text-white mt-2">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-5 absolute top-[105%] right-[5%] -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="flex rounded-full p-4 border w-12 h-12 bg-[#000000]/10 border-b-4 cursor-pointer hover:bg-white/10 transition">
              <img
                src="/arrow-right.svg"
                className="object-contain scale-150"
                alt="prev"
              />
            </button>
            <button
              onClick={handleNext}
              className="flex rounded-full p-4 border border-b-4 bg-white w-12 h-12 cursor-pointer hover:bg-white/10 transition">
              <img
                src="/arrow-left.svg"
                className="object-contain scale-150"
                alt="next"
              />
            </button>
          </div>

          {/* Section 2 */}

          <section>
            <div className="flex flex-col justify-center w-full absolute top-[130%]">
              <div className="flex tems-center justify-center">
                <h1 className="text-[52px] font-bold flex  gap-3">
                  Season 01
                  <span className="bg-[#CC6D33]/20 border-l-4 border-r-4  gap- text-[#CC6D33] px-2 flex items-center gap-5">
                    is just the beginning...
                  </span>
                </h1>
              </div>
              <p className="flex tems-center justify-center text-[20px] text-black/70 mt-5">
                <span>
                  Luca’s adventures in leadership have only started. More
                  seasons and new stories are on the way.
                </span>
              </p>
            </div>

            <div className="absolute gap-5 top-[154%] flex justify-center mt-10 w-[1300px]">
              <div className="flex justify-center">
                <img src="/bell.png" alt="" className="" />
              </div>

              {/* Button */}

              <div className="">
                <a href="#">
                  <div className="border-2 font-bold border-b-4  p-3 px-5 rounded-full">
                    <button>Luca’s story continues, stay tuned!</button>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Mobile View */}

      <section className="sm:hidden">
        <div className="absolute top-[100%] right-[0%]">
          <img src="/episode-arrow.png" className="h-[80px]" />
        </div>
        <div className="absolute w-full top-[85%]">
          <div className="flex w-full justify-center">
            <h1 className="text-[52px] font-bold gap-3 w-fit">
              <div className="flex gap-2">
                <span>All</span>
                <span className="bg-[#CC6D33]/20 border-l-4 text-[#CC6D33] ">
                  {" "}
                  Episodes{" "}
                </span>
              </div>
              <span className="bg-[#CC6D33]/20 border-l-4 text-[#CC6D33] ">
                {" "}
                Season → 01.
              </span>
            </h1>
          </div>

          {/* Video Section */}
          <div className="w-full flex justify-center mt-27">
            <div className="overflow-hidden w-[1050px]">
              {" "}
              {/* 👈 3 cards visible */}
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 350}px)`,
                }}>
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="min-w-[350px] flex-shrink-0 p-2 relative">
                    {/* Video */}
                    <div className="w-[333px] h-[187px] border-2 rounded-[16px] overflow-hidden relative">
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        poster={item.poster}
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover relative z-10">
                        <source src={item.video} type="video/mp4" />
                      </video>

                      {/* Overlay controls */}
                      <div className="absolute z-20 bottom-2 left-4 flex items-center gap-3">
                        {/* Play Button */}
                        <div
                          onClick={() => handlePlay(index)}
                          className="rounded-full cursor-pointer bg-white h-8 w-8 flex items-center justify-center">
                          <img
                            src="/play-button.png"
                            alt="play"
                            className="w-3 h-3 ml-1"
                          />
                        </div>

                        {/* Text Button */}
                        <div
                          onClick={() => handlePlay(index)}
                          className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold cursor-pointer">
                          Watch Episode → {item.id}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <p className="text-black mt-2">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-5 absolute top-[105%] right-[5%] -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="flex rounded-full p-4 border w-12 h-12 bg-[#000000]/10 border-b-4 cursor-pointer hover:bg-white/10 transition">
              <img
                src="/arrow-right.svg"
                className="object-contain scale-150"
                alt="prev"
              />
            </button>
            <button
              onClick={handleNext}
              className="flex rounded-full p-4 border border-b-4 bg-white w-12 h-12 cursor-pointer hover:bg-white/10 transition">
              <img
                src="/arrow-left.svg"
                className="object-contain scale-150"
                alt="next"
              />
            </button>
          </div>

          {/* Section 2 */}

          <section>
            <div className="flex flex-col justify-center w-full absolute top-[130%]">
              <div className="flex tems-center justify-center">
                <h1 className="text-[52px] font-bold leading-tight text-center">
                  <div>
                    <span className="text-black">Season 01</span>{" "}
                    <span className="bg-[#CC6D33]/20 text-[#CC6D33] px-2">
                      is
                    </span>
                  </div>
                  <div>
                    <span className="bg-[#CC6D33]/20 text-[#CC6D33] px-2">
                      just the
                    </span>
                  </div>
                  <div>
                    <span className="bg-[#CC6D33]/20 text-[#CC6D33] px-2">
                      beginning...
                    </span>
                  </div>
                </h1>
              </div>
              <p className="flex tems-center justify-center text-center text-[22px] text-black/70 mt-7">
                <span>
                  Luca’s adventures in leadership have only started. More
                  seasons and new stories are on the way.
                </span>
              </p>
            </div>

            <div className="absolute w-full justify-center gap-5 top-[205%] flex items-center ">
              <div>
                <img src="/bell.png" alt="" className="scale-105" />
              </div>

              {/* Button */}

              <div className="">
                <a href="#">
                  <div className="border-2 font-bold border-b-4 text-[20px] text-center p-3 w-[279px] rounded-full">
                    <button>Luca’s story continues, stay tuned!</button>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Episode;
