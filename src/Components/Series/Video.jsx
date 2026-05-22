import { ArrowRight } from "lucide-react";
import React from "react";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const Video = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isMutedMobile, setIsMutedMobile] = useState(true);
  const [isPlayingMobile, setIsPlayingMobile] = useState(false);

  const toggleMute = (ref) => {
    if (!ref.current) return;
    ref.current.muted = !ref.current.muted;
    setIsMuted(ref.current.muted);
  };

  const toggleMuteMobile = () => {
    if (!videoRefMobile.current) return;
    videoRefMobile.current.muted = !videoRefMobile.current.muted;
    setIsMutedMobile(videoRefMobile.current.muted);
  };

  const handlePlayMobile = () => {
    if (!videoRefMobile.current) return;

    if (videoRefMobile.current.paused) {
      videoRefMobile.current.play();
      setIsPlayingMobile(true);
    } else {
      videoRefMobile.current.pause();
      setIsPlayingMobile(false);
    }
  };

  const videoRefDesktop = useRef(null);
  const videoRefMobile = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (ref) => {
    if (!ref.current) return;
    if (ref.current.paused) {
      ref.current.play();
      setIsPlaying(true);
    } else {
      ref.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="h-screen ">
      <section>
        <div>
          <div className="relative hidden sm:block">
            <img src="/bg.png" className="w-[1600px] h-[1400px]" />
          </div>
        </div>

        {/* About Above Text */}
        <div className="hidden sm:block">
          <div className="absolute top-[20%] right-[13%]">
            <img src="/Video/about.png" />
          </div>

          <div className="absolute top-[30%] w-full">
            <div className="flex justify-center ml-[12%] tems-center">
              <h1 className="text-[68px] font-bold flex items-center gap-3">
                Luca’s
                <span className="bg-[#CC6D33]/20 border-l-4 border-r-4  gap- text-[#CC6D33] px-2 flex items-center gap-5">
                  <ArrowRight className="scale-280 font-bold ml-3" /> Leadership
                  Minutes.
                </span>
              </h1>
            </div>
          </div>

          <div className="absolute w-fit left-26 top-[46%]">
            <div className="flex w-full ">
              <video
                ref={videoRefDesktop}
                className="w-[1300px] brightness-80 h-[480px] object-cover border-2 rounded-[16px]"
                poster="/e1.png"
                autoPlay
                muted
                loop
                playsInline
                controls={false}>
                <source src="/Videos/c1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Text Over the Video */}
            <div className="absolute top-[82%] w-full">
              <div className="flex justify-between px-10 items-center">
                <p className="text-[60px] text-white">Episode 01</p>
                <div className="flex gap-4">
                  <div className="flex gap-4 items-center">
                    {/* Mute / Unmute */}
                    <div
                      onClick={() => toggleMute(videoRefDesktop)}
                      className="rounded-full cursor-pointer bg-white h-12 w-12 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={isMuted ? faVolumeMute : faVolumeUp}
                        className="text-black text-lg"
                      />
                    </div>

                    {/* Play / Pause */}
                    <div
                      onClick={() => handlePlay(videoRefDesktop)}
                      className="rounded-full cursor-pointer bg-white h-12 w-12 flex items-center justify-center">
                      <img src="/play-button.png" className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="rounded-full bg-white p-3 font-semibold">
                    Watch Episode → 01 Now
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-fit -rotate-10 -left-[1%] top-[32%]">
            <div className="flex w-full">
              <img src="/Video/sound.png" alt="video" />
            </div>
          </div>
        </div>

        {/* Video Section Mobile View */}

        <div className=" sm:hidden  w-full h-screen bg-white">
          <svg
            className="pointer-events-none absolute top-[185%] w-full h-[1200px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0
                         293 1246"
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

          <div className="absolute top-[15%] right-[5%]">
            <img src="/Video/about.png" />
          </div>

          <div className="absolute top-[20%] w-full">
            <div className="flex justify-center ml-[12%] tems-center">
              <h1 className="text-[58px] items-center gap-3">
                <div className="flex items-center -mb-4 ml-12 gap-10">
                  <span className="font-bold ">Luca’s</span>
                  <ArrowRight className="bg-[#CC6D33]/20 flex-col border-l-2 text-[#CC6D33]  scale-280 font-bold " />
                </div>
                <div className="-mb-4">
                  <span className="bg-[#CC6D33]/20 flex-col text-[#CC6D33] font-bold">
                    Leadership{" "}
                  </span>
                </div>
                <span className="bg-[#CC6D33]/20 ml-16 flex-col border-r-4  text-[#CC6D33] font-bold">
                  Minutes.
                </span>
              </h1>
            </div>
          </div>

          {/* Video Wrapper Section */}
          <div className="absolute top-[47%] w-full flex justify-center">
            <div className="relative w-[353px] h-[200px]">
              <video
                ref={videoRefMobile}
                className="w-full relative z-10 h-full brightness-80 object-cover border-2 rounded-[16px]"
                poster="/e1.png"
                autoPlay
                muted
                loop
                playsInline
                controls={false}>
                <source src="/Videos/c1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Controls Overlay - Mobile Functional Buttons */}
              <div className="absolute bottom-3 left-0 w-full px-3 z-50">
                {" "}
                <div className="flex justify-between items-center font-bold">
                  <p className="text-[16px] text-white">Episode 01</p>

                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1.5">
                      {/* Mute/Unmute Button Mobile */}
                      <div
                        onClick={toggleMuteMobile}
                        className="rounded-full bg-white h-7 w-7 flex items-center justify-center cursor-pointer active:scale-90">
                        <FontAwesomeIcon
                          icon={isMutedMobile ? faVolumeMute : faVolumeUp}
                          className="text-black text-xs"
                        />
                      </div>

                      <div
                        onClick={handlePlayMobile}
                        className="rounded-full bg-white h-7 w-7 flex items-center justify-center cursor-pointer active:scale-90">
                        <img
                          src={
                            isPlayingMobile
                              ? "/play-button.png"
                              : "/play-button.png"
                          }
                          className="w-2.5 h-2.5"
                        />
                      </div>
                    </div>

                    <div
                      onClick={() => handlePlay(videoRefMobile)}
                      className="rounded-full text-[9px] bg-white px-3 py-1.5 font-bold whitespace-nowrap cursor-pointer">
                      {isPlaying ? "Pause Now" : "Watch Episode → 01 Now"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* --- MOBILE VIEW (Gap Gayab & Centered) --- */}
            <div className="sm:hidden absolute top-[44%] w-full left-0 flex flex-col items-center">
              {/* Sound Icon (Optional mobile placement) */}
              <img
                src="/Video/sound.png"
                alt="video"
                className="w-12 mr-93 -rotate-6 mb-58 "
              />

              <div className="flex items-center">
                <img
                  src="/videoplay.png"
                  alt="video"
                  className="w-12 h-auto z-10 mr-4"
                />

                <button className="border rounded-full w-[180px] border-b-4 p-2 bg-white font-bold">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
