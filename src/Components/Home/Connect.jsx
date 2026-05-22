import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Connect = () => {
  const desktopFormRef = useRef();
  const mobileFormRef = useRef();

  const sendEmail = (e, formRef) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yp0qpji",
        "template_addgbez",
        formRef.current,
        "eBVWvKpTHEfo_V0Qx",
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed ❌ " + error.text);
        },
      );
  };

  return (
    <div>
      <section className="hidden sm:block" id="contact">
        <div className="h-screen">
          {/* Text Section */}
          <div className="absolute text-center w-full top-[505%] ">
            <h1 className="text-[68px] flex flex-col w-full">
              <span>
                <span className="font-bold">
                  Got a{" "}
                  <span className="bg-[#CC6D33]/20 border-l-4 text-[#CC6D33] px-1 border-r-4">
                    Question for Luca’s Crew?
                  </span>
                </span>
              </span>
            </h1>

            <div className="w-full flex justify-center">
              <img
                src="/Connect/text.png"
                alt="The book that inspired the series"
                className="absolute -top-[55%]"
              />
            </div>
          </div>

          {/* ===== SINGLE FORM (UI SAME) ===== */}
          <form
            ref={desktopFormRef}
            onSubmit={(e) => sendEmail(e, desktopFormRef)}>
            {/* Form */}
            <div className="absolute top-[530%] w-full flex justify-center">
              <div className="flex gap-30">
                {/* LEFT (inputs) */}
                <div>
                  <div className="flex flex-col space-y-7">
                    <input
                      name="user_name"
                      className="bg-[#0000000A] placeholder:text-black rounded-full border-1 font-bold p-3 w-[250px]"
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      name="user_email"
                      className="bg-[#0000000A] placeholder:text-black rounded-full border-1 font-bold p-3 w-[250px]"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                    <input
                      name="user_phone"
                      className="bg-[#0000000A] placeholder:text-black rounded-full border-1 font-bold p-3 w-[250px]"
                      type="text"
                      placeholder="Phone Number"
                      required
                    />
                    <input
                      name="company"
                      className="bg-[#0000000A] placeholder:text-black rounded-full border-1 font-bold p-3 w-[250px]"
                      type="text"
                      placeholder="Company Name"
                      required
                    />
                  </div>
                </div>

                {/* RIGHT (textarea) */}
                <div>
                  <p className="flex font-[600] flex-col text-[24px] mb-4">
                    <span>Ask away — leadership, Luca,</span>
                    <span>or life on the waves…</span>
                  </p>
                  <textarea
                    name="message"
                    className="bg-[#0000000A] placeholder:text-black rounded-2xl border font-bold p-3 w-[340px] h-[190px]"
                    placeholder="Your Question"
                    required></textarea>
                </div>
              </div>
            </div>

            {/* Button (same position, bas submit) */}
            <div className="absolute top-[574%] right-[44%]">
              <div className="border-2 font-bold border-b-4 p-3 px-5 rounded-full">
                <button type="submit" className="cursor-pointer">
                  Send it my way!
                </button>
              </div>
            </div>
          </form>

          {/* Cart Image */}
          <div className="w-full flex justify-center">
            <img
              src="/Connect/mail.png"
              alt="Mail"
              className="absolute top-[574%] left-[40%] cursor-pointer"
              onClick={() => desktopFormRef.current?.requestSubmit()}
            />
          </div>

          <div className="absolute top-[157%] left-[411px] rotate-180">
            <img src="/pin.png" alt="img" className="scale-100" />
          </div>
        </div>
      </section>

      {/* Mobile View of Contact Us Page */}

      <section className="sm:hidden">
        <div className="h-screen">
          {/* Text Section */}
          <div className="absolute text-center w-full top-[525%] ">
            <h1 className="text-[42px] flex flex-col w-full">
              <span>
                <span className="font-bold">
                  Got a
                  <span className="bg-[#CC6D33]/20 border-l-4 text-[#CC6D33] px-1 border-r-4">
                    Question for Luca’s Crew?
                  </span>
                </span>
              </span>
            </h1>

            <div className="w-full flex justify-center">
              <img src="/Connect/text.png" className="absolute -top-[35%]" />
            </div>
          </div>

          {/* ===== SINGLE FORM (STRUCTURE SAME) ===== */}
          <form
            ref={mobileFormRef}
            onSubmit={(e) => sendEmail(e, mobileFormRef)}>
            {/* Form */}
            <div className="absolute top-[540%] w-full flex flex-col items-center justify-center px-4 sm:px-10">
              <div className="flex flex-col sm:flex-row gap-10 w-full justify-center">
                {/* LEFT (same structure, bas form hata diya) */}
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex flex-col space-y-7">
                    <input
                      name="user_name"
                      className="bg-[#0000000A] placeholder:text-black rounded-full border font-bold p-3 w-[300px] max-w-full"
                      type="text"
                      placeholder="Your Name"
                      required
                    />

                    <input
                      name="user_email"
                      className="bg-[#0000000A] placeholder:text-black rounded-full border font-bold p-3 w-[300px] max-w-full"
                      type="text"
                      placeholder="Email Address"
                      required
                    />

                    <input
                      name="user_phone"
                      className="bg-[#0000000A] placeholder:text-black rounded-full border font-bold p-3 w-[300px] max-w-full"
                      type="text"
                      placeholder="Phone Number"
                      required
                    />

                    <input
                      name="company"
                      className="bg-[#0000000A] placeholder:text-black rounded-full border font-bold p-3 w-[300px] max-w-full"
                      type="text"
                      placeholder="Company Name"
                      required
                    />
                  </div>
                </div>

                {/* RIGHT (same structure) */}
                <div className="flex flex-col items-center sm:items-start">
                  <div>
                    <p className="font-[600] flex flex-col text-[24px] mb-4 ">
                      <span>Ask away — leadership, Luca,</span>
                      <span>or life on the waves…</span>
                    </p>

                    <textarea
                      name="message"
                      className="bg-[#0000000A] placeholder:text-black rounded-2xl border font-bold p-3 w-[360px] max-w-full h-[300px]"
                      placeholder="Your Question"
                      required></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Button (same UI) */}
            <div className="absolute top-[635%] right-[15%]">
              <div className="border-2 font-bold border-b-4 p-3 px-5 rounded-full">
                <button type="submit">Send it my way!</button>
              </div>
            </div>
          </form>

          {/* Mail Image (submit trigger) */}
          <div className="w-full flex justify-center">
            <img
              src="/Connect/mail.png"
              className="absolute top-[635%] left-[15%] cursor-pointer"
              onClick={() => mobileFormRef.current?.requestSubmit()}
            />
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default Connect;
