import React from "react";

const Book = () => {
  return (
    <div>
      <section className="sm:block hidden">
        <div>
          <div>
            <div className="absolute top-[230%]">
              <img src="/bg.png" className="w-[1600px] h-[1000px]" />
            </div>
          </div>

          {/* Text Section */}

          <div className="absolute text-center w-full top-[240%] ">
            <h1 className="text-[68px] flex flex-col w-full">
              <span>
                <span className="font-bold">
                  Where{" "}
                  <span className="bg-[#CC6D33]/20 border-l-4 text-[#CC6D33] px-1 border-r-4">
                    Luca’s story began
                  </span>
                </span>
              </span>
            </h1>

            {/* Text Above Heading */}

            <div className="w-full flex justify-center">
              <img
                src="/Book/text.png"
                alt="The book that inspired the series"
                className="absolute -top-[55%]"
              />
            </div>

            {/* Book Image */}

            <div className="w-full flex justify-center">
              <img
                src="/Book/book.png"
                alt="The book that inspired the series"
                className="absolute top-[105%] h-[480px]"
              />
            </div>

            {/* Arrow Image */}

            <div className="w-full flex justify-center">
              <img
                src="/Book/arrow.png"
                alt="The book that inspired the series"
                className="absolute right-[30%] top-[420%]"
              />
            </div>
          </div>

          {/* Cart Image */}
          <div className="absolute flex gap-4 top-[315%] w-full justify-center ">
            <div className="">
              <img
                src="/Book/cart.png"
                alt="The book that inspired the series"
                className="left-[37.5%]"
              />
            </div>

            {/* Button */}

            <div className="right-[39%]">
              <a href="#">
                <div className="border-2 font-bold border-b-4  p-3 px-5 rounded-full">
                  <button>Get the book for deeper stories.</button>
                </div>
              </a>
            </div>
          </div>

          
        </div>
      </section>

      {/* Mobile View of The Page */}

      <section className="sm:hidden">
        <div>
          <div>
            <svg
              className="absolute top-[290%] w-full h-[1200px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0
                         293 846"
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

          {/* Text Section */}

          <div className="absolute text-center w-full top-[315%] ">
            <h1 className="text-[58px] flex flex-col w-full">
              <span>
                <span className="font-bold">
                  <span className="bg-[#CC6D33]/20 border-l-4 text-[#CC6D33] px-1 border-r-4">
                    <span className="text-black">Where</span> Luca’s story began
                  </span>
                </span>
              </span>
            </h1>

            {/* Text Above Heading */}

            <div className="w-full flex justify-center">
              <img
                src="/Book/text.png"
                alt="The book that inspired the series"
                className="absolute -top-[50%]"
              />
            </div>

            {/* Book Image */}

            <div className="w-full flex justify-center">
              <img
                src="/Book/book.png"
                alt="The book that inspired the series"
                className="absolute top-[115%] h-[480px]"
              />
            </div>
          </div>

          {/* Cart Image */}
          <div className="absolute flex gap-4 top-[404%] w-full justify-center ">
            <div className="">
              <img
                src="/Book/cart.png"
                alt="The book that inspired the series"
                className="left-[37.5%]"
              />
            </div>

            {/* Button */}

            <div className="right-[39%]">
              <a href="#">
                <div className="border-2 font-bold border-b-4  p-3 px-5 rounded-full">
                  <button>Get the book for deeper stories.</button>
                </div>
              </a>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default Book;
