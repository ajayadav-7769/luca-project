import React, { useState, useRef } from "react";

const Allepisode = () => {
  const items = [
    {
      id: 1,
      title: "Name of Episode 01",
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
    {
      id: 5,
      title: "Name of Episode 05",
      video: "/Videos/c5.mp4",
      poster: "/e4.png",
    },
    {
      id: 6,
      title: "Name of Episode 06",
      video: "/Videos/c6.mp4",
      poster: "/e4.png",
    },
  ];

  const videoRefs = useRef({});
  const [playingIndex, setPlayingIndex] = useState(null);
  const handlePlay = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingIndex === id) {
      video.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null && videoRefs.current[playingIndex]) {
        videoRefs.current[playingIndex].pause();
      }
      video.play();
      setPlayingIndex(id);
    }
  };

  return (
    <div>
      <section className="sm:block hidden">
        <div className="absolute top-30">
          <img src="/bg.png" className="w-[1600px] h-[900px]" />
        </div>

        <div className="absolute top-[14%] right-[0%]">
          <img src="/right-arrow.png" className="h-[70px]" />
        </div>
        <div className="absolute left-30 top-[20%]">
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
            <div className="overflow-hidden w-[1400px]">
              <div className="grid grid-cols-2">
                {items.map((item, index) => (
                  <div key={item.id} className="min-w-[40%] flex-shrink-0 p-2">
                    <div className="relative w-[527px] h-[297px]  border-2 rounded-[16px] overflow-hidden">
                      <video
                        ref={(el) => (videoRefs.current[item.id] = el)}
                        poster={item.poster}
                        className="w-full h-full object-cover">
                        <source src={item.video} type="video/mp4" />
                      </video>

                      <div className="absolute top-60 left-5 flex items-center gap-4">
                        <div
                          onClick={() => handlePlay(item.id)}
                          className="rounded-full cursor-pointer bg-white h-10 w-10 flex items-center justify-center">
                          <img
                            src="/play-button.png"
                            alt="play/pause"
                            className="w-6 h-6 ml-1"
                          />
                        </div>
                        <div className="rounded-full text-black px-4 py-2 bg-white font-semibold cursor-pointer">
                          Watch Episode → {item.id}
                        </div>
                      </div>
                    </div>
                    <p className="text-[25px] mt-2">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2 */}

          <section>
            <div className="flex flex-col justify-center w-full absolute top-[110%]">
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

            <div className="absolute gap-5 top-[120%] flex justify-center mt-10 w-[1300px]">
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

      {/* Mobile View */}
      <section className="sm:hidden">
        <div className="w-full px-4 pt-20">
          {/* Heading */}
          <div className="flex justify-center text-center">
            <h1 className="text-[52px] font-bold leading-tight">
              <span>All</span>{" "}
              <span className="bg-[#CC6D33]/20 border-l-2 border-r-2 text-[#CC6D33] px-1">
                Episodes
              </span>
              <br />
              <span className="bg-[#CC6D33]/20 border-l-2 border-r-2 text-[#CC6D33] px-1">
                Season → 01
              </span>
            </h1>
          </div>

          {/* Video List */}
          <div className="mt-10 flex flex-col gap-6 items-center">
            {items.map((item) => (
              <div key={item.id} className="w-full max-w-[350px]">
                {/* Video */}
                <div className="relative w-full h-[200px] border-2 rounded-[16px] overflow-hidden">
                  <video
                    ref={(el) => (videoRefs.current[item.id] = el)}
                    poster={item.poster}
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover">
                    <source src={item.video} type="video/mp4" />
                  </video>

                  {/* Controls */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-3">
                    <div
                      onClick={() => handlePlay(item.id)}
                      className="rounded-full bg-white h-8 w-8 flex items-center justify-center">
                      <img src="/play-button.png" className="w-3 h-3 ml-1" />
                    </div>

                    <div
                      onClick={() => handlePlay(item.id)}
                      className="bg-white text-[11px] px-3 py-1 rounded-full font-semibold">
                      Watch → {item.id}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <p className="text-[16px] mt-2 text-center">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Section 2 */}

          <section>
            <div className="flex flex-col justify-center w-full absolute top-[215%]">
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

            <div className="absolute w-full justify-center gap-5 top-[265%] flex items-center ">
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

export default Allepisode;
