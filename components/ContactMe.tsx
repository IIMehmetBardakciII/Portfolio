"use client";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { FormEvent, useState } from "react";

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });
      const result = await res.json();
      console.log(result);
      if (res.ok) {
        setStatus("Email sent successfully");
      } else {
        setStatus(result.error || "Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send email");
    }
  };

  return (
    <SectionWrapper>
      <footer className="h-screen" id="Contact">
        <h2 className="text-primary font-upheaval drop-shadow-titleDrop w-full max-sm:text-2xl max-sm:drop-shadow-none text-center mt-[160px]">
          CONTACT ME
        </h2>
        <div className="relative h-[500px] w-full flex max-sm:flex-col gap-[30px]">
          <div className="flex-[1] relative">
            <Image
              src="/img/ContactBg.gif"
              alt="Contact"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover opacity-30"
              unoptimized
            />
          </div>
          <div className="box2 flex-[1] flex flex-col">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex gap-3 flex-col"
            >
              <div className="flex flex-col">
                <label htmlFor="email" className="font-vt323 text-grey">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md bg-secondary h-[50px] outline-none text-primaryExtraDark px-10 placeholder:text-primaryExtraDark font-vt323 text-3xl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="font-vt323 text-grey">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="w-full rounded-md bg-secondary h-[250px] outline-none text-primaryExtraDark px-10 placeholder:text-primaryExtraDark font-vt323 text-3xl"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-secondaryExtraDark hover:bg-secondaryDark transition-all ease-out active:py-[4px] w-fit text-white py-[10px] px-[14px] mt-[12px] font-vt323 border-[2px] border-secondaryLight drop-shadow-custom"
              >
                {status && <p>{status}</p>}
                <h5>SEND EMAIL</h5>
              </button>
            </form>
            {/* Status */}
            <div className="flex gap-5 items-center mt-[30px]">
              {/* Social Media Links */}
            </div>
          </div>
        </div>
        <div>
          <h6 className="text-grey text-center w-full font-vt323 mt-[55px]">
            &#169; 2024 Yankı Mustu. All rights reserved.
          </h6>
        </div>
      </footer>
    </SectionWrapper>
  );
};

export default ContactMe;
