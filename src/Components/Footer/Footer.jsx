import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="sm:block hidden">
        <div>
          {/* Text Section */}

          <div className="absolute text-center  top-[600%] ">
            {/* Text Above Heading */}

            <div className="w-full flex justify-center">
              <img
                src="/footer.png"
                alt="The book that inspired the series"
                className="w-[1700px] h-[350px]"
              />
            </div>

            <div className="absolute -top-[30%] right-[20%] ">
              <img
                src="/hero.png"
                className="h-[194px] w-[194px] object-cover"
              />

              <div className="text-white text-start flex gap-30">
                <div className="flex flex-col mt-5 space-y-4">
                  <p>Quick Links</p>
                  <a target="_blank" href="https://highperforming-teams.com/">
                    <span>More About Leslie</span>
                  </a>
                  <a href="#">
                    <span className="flex flex-col">
                      Watch Luca’s Leadership <span>Minis → Season 1</span>
                    </span>
                  </a>
                </div>
                <div className="flex flex-col mt-5 space-y-3">
                  <p>Get in Touch</p>
                  <div className="flex gap-2">
                    <img src="/Footer/mail.svg" />
                    <a href="#">
                      <span>leslie@lesliemartinich.com</span>
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <img src="/Footer/phone.svg" />
                    <a href="#">
                      <span>+1 (555) 123-4567</span>
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <img src="/Footer/location.svg" />
                    <a href="#">
                      <span>San Francisco, CA</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-[30%] left-30">
              <img
                src="/Logo/footer2.png"
                alt="Luca.com"
                className="h-12 filter brightness-0 invert"
              />
              <div className="flex gap-5 items-center mt-2">
                {/* <img
                                    src='/Footer/fb.png'
                                    alt='Luca.com'
                                    className='object-cover h-[40px]'
                                /> */}
                <a
                  href="https://www.linkedin.com/in/leslie-martinich?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank">
                  <img
                    src="/Footer/ld.png"
                    alt="Luca.com"
                    className="object-cover h-[40px]"
                  />
                </a>
                <img
                  src="/Footer/yt.png"
                  alt="Luca.com"
                  className="object-cover h-[40px]"
                />
              </div>
            </div>
            <div className="w-full absolute top-[85%]">
              <div className="flex justify-center">
                <hr className="border-white/70 border w-[1450px]" />
              </div>

              <div className="mt-3 text-start ml-30">
                <span className="text-white text-[12px]">
                  © 2026 Luca. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer for the Mobile View */}

      <section className="sm:hidden">
        <div>
          {/* Text Section */}

          <div className="w-full text-center relative -mt-160 ">
            {" "}
            {/* Text Above Heading */}
            <div className="w-full flex justify-center">
              <img
                src="/Footer/footer-mobile.png"
                alt="The book that inspired the series"
                className="w-full h-[645px]"
              />
            </div>
            {/* Hero Image */}
            <div className="absolute -top-[30%] rotate-5 left-[40%]">
              <img
                src="/hero.png"
                className="h-[250px] w-[250px] object-cover"
              />
            </div>
            <div className="absolute top-[39%] left-10">
              <div className="text-white text-start flex flex-col">
                <div className="flex flex-col  space-y-4">
                  <p>Quick Links</p>
                  <a href="#">
                    <span>More About Leslie</span>
                  </a>
                  <a href="#">
                    <span className="flex flex-col">
                      Watch Luca’s Leadership <span>Minis → Season 1</span>
                    </span>
                  </a>
                </div>
                <div className="flex flex-col mt-5 space-y-3">
                  <p>Get in Touch</p>
                  <div className="flex gap-2">
                    <img src="/Footer/mail.svg" />
                    <a href="#">
                      <span>leslie@lesliemartinich.com</span>
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <img src="/Footer/phone.svg" />
                    <a href="#">
                      <span>+1 (555) 123-4567</span>
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <img src="/Footer/location.svg" />
                    <a href="#">
                      <span>San Francisco, CA</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[10%] left-5">
              <img
                src="/Logo/footer2.png"
                alt="Luca.com"
                className="h-12 filter brightness-0 invert"
              />{" "}
              <div className="flex gap-5 items-center mt-2">
                <img
                  src="/Footer/fb.png"
                  alt="Luca.com"
                  className="object-cover h-[40px]"
                />
                <img
                  src="/Footer/ld.png"
                  alt="Luca.com"
                  className="object-cover h-[40px]"
                />
                <img
                  src="/Footer/yt.png"
                  alt="Luca.com"
                  className="object-cover h-[40px]"
                />
              </div>
            </div>
            <div className="w-full absolute top-[90%]">
              <div className="flex justify-center">
                <hr className="border-white/70 border w-[330px]" />
              </div>

              <div className="mt-5 text-start absolute left-10">
                <span className="text-white text-[14px]">
                  © 2026 Luca. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
