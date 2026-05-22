import React from "react";

const About = () => {
  return (
    <div>
      <section className="mt-40 sm:mt-60">
        {" "}
        <div className="h-screen ">
          {/* Text Section */}
          <div className="hidden sm:block">
            <div className="sm:absolute left-30 top-[318%]">
              <h1 className="text-[68px]  flex flex-col">
                <span>
                  <span className="font-bold">
                    <span className="bg-[#CC6D33]/20 border-l-4 text-[#CC6D33] px-1 border-r-4">
                      Leslie.
                    </span>
                  </span>
                </span>

                {/* Points */}

                <div className="text-[20px] ">
                  <ul className="space-y-3 font-medium">
                    <div className="flex gap-2 items-center">
                      <img
                        src="/About/m1.png"
                        alt="m1"
                        className="h-[32px]w-[32px]"
                      />
                      <li className="flex flex-col">
                        <span className="-mb-2">
                          <span className="text-black/50">
                            Leadership Coach + Engineer
                          </span>{" "}
                          who has guided
                        </span>
                        <span>
                          500+ tech teams{" "}
                          <span className="text-black/50">across</span> 6
                          continents.
                        </span>
                      </li>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src="/About/m2.png"
                        alt="m2"
                        className="h-[32px]w-[32px]"
                      />
                      <li className="flex flex-col">
                        <span className="-mb-2">
                          <span className="text-black/50">
                            Inspiring keynote speaker,
                          </span>{" "}
                          trusted by global giants
                        </span>
                        <span>like Dell and NASA.</span>
                      </li>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src="/About/m3.png"
                        alt="m3"
                        className="h-[32px]w-[32px]"
                      />
                      <li className="flex flex-col">
                        <span className="-mb-2">
                          Creator of trust-based leadership models that
                        </span>
                        <span> make teams thrive.</span>
                      </li>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img src="/About/m4.png" alt="m4" />
                      <li className="flex flex-col">
                        <span className="-mb-2">
                          Author who turned her lessons into Luca’s fun,
                        </span>
                        <span className="-mb-2">
                          <span className="text-black/50">
                            animated adventures,
                          </span>
                          helping IT pros learn to lead
                        </span>
                        <span>
                          <span className="text-black/50">more humanely</span>.{" "}
                          <span className="relative text-[#39A7C5] underline-zigzag">
                            Learn More...
                          </span>
                        </span>
                      </li>
                    </div>
                  </ul>
                </div>

                {/* Box */}

                <div className="absolute -top-[15%]">
                  <img src="/About/text.png" alt="Meet" />
                </div>
              </h1>

              
            </div>
            <div className="hidden sm:block absolute top-[325%] -left-36">
              <img src="/plane.png" alt="plane" className="scale-20" />
            </div>
            
            {/* Author Images Section */}

            <div className="bg-[#CC6D33] rounded-[20px] h-[388px] w-[400px] absolute right-[15.5%] top-[318%]"></div>

            <div className="absolute top-[315%] right-[8%]">
              {/* Team Details */}
              <img
                src="/About/author.png"
                alt="img"
                className="w-[500px] h-[400px] rounded-[20px] object-cover border-[#CC6D33] border-2"
              />
            </div>

            {/* Illustration Image above author image */}
            <div className="absolute top-[300.3%] right-[4.5%]">
              <img src="/About/illustraion.png" alt="illustration" />
            </div>

            <div className="absolute top-[157%] left-[411px] rotate-180">
              <img src="/pin.png" alt="img" className="scale-100" />
            </div>
          </div>
        </div>
        {/* Mobile View of About Us */}
        <div>
          <div className="h-screen sm:hidden overflow-hidden ">
            {/* Text Section */}

            <div className="absolute left-2 top-[300%] ">
              <h1 className="text-[68px]  flex flex-col">
                <span>
                  <span className="font-bold">
                    <span className="bg-[#CC6D33]/20 border-l-4 text-[#CC6D33] px-1 border-r-4">
                      Leslie.
                    </span>
                  </span>
                </span>

                {/* Points */}

                <div className="text-[13px] left-10 absolute top-[485%]">
                  <ul className="space-y-2 font-medium">
                    <div className="flex gap-2 items-start w-[320px]">
                      <img src="/About/m1.png" className="h-8 w-8" />
                      <li>
                        <span className="text-black/50">
                          Leadership Coach + Engineer
                        </span>{" "}
                        who has guided 500+ tech teams{" "}
                        <span className="text-black/50">across</span> 6
                        continents.
                      </li>
                    </div>

                    <div className="flex gap-2 items-start">
                      <img src="/About/m2.png" className="h-8 w-8" />
                      <li>
                        <span className="text-black/50">
                          Inspiring keynote speaker,
                        </span>{" "}
                        trusted by global giants like Dell and NASA.
                      </li>
                    </div>

                    <div className="flex gap-2 items-start">
                      <img src="/About/m3.png" className="h-8 w-8" />
                      <li>
                        Creator of trust-based leadership models that make teams
                        thrive.
                      </li>
                    </div>

                    <div className="flex gap-2 items-start">
                      <img src="/About/m4.png" className="h-8 w-8" />
                      <li>
                        Author who turned her lessons into Luca’s fun,{" "}
                        <span className="text-black/50">
                          animated adventures
                        </span>
                        , helping IT pros learn to lead{" "}
                        <span className="text-black/50">more humanely</span>.{" "}
                        <span className="text-[#39A7C5] underline-zigzag">
                          Learn More...
                        </span>
                      </li>
                    </div>
                  </ul>
                </div>

                {/* Box */}

                <div className="absolute -top-[60%]">
                  <img src="/About/text.png" alt="Meet" />
                </div>
              </h1>
            </div>

            {/* Author Images Section */}

            <div className="bg-[#CC6D33] rounded-[20px] h-[290px] w-[320px] absolute right-[11%] top-[318.5%]"></div>

            <div className="absolute top-[316%] right-[8%]">
              {/* Team Details */}
              <img
                src="/About/author.png"
                alt="img"
                className="w-[320px] h-[300px] rounded-[20px] object-cover border-[#CC6D33] border-2"
              />
            </div>

            {/* Illustration Image above author image */}
            <div className="absolute top-[310.3%] right-0 rotate-5">
              <img src="/illustration-mobile.png" alt="illustration" />
            </div>

            {/* Plane Image below Author */}

            <div className="absolute  top-[370%] ml-15">
              <img src="/plane.png" alt="illustration" className="scale-30" />
            </div>

            <div className="absolute top-[157%] left-[411px] rotate-180">
              <img src="/pin.png" alt="img" className="scale-100" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
