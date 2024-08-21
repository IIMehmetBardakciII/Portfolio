import { AboutMeContainer } from "@/content";

import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const AboutMe = () => {
  return (
    <SectionWrapper>
      <section id="About">
        {/* Title */}
        <h2 className="text-primary font-upheaval drop-shadow-titleDrop w-full text-center mt-[160px]">
          ABOUT ME
        </h2>
        {/* Content */}
        <div className="w-full  sm:h-[520px] shadow-bottom2 relative">
          <Image
            src="/img/AboutMe.gif"
            alt="AboutMe"
            fill
            className="opacity-30 "
            unoptimized
          />
          <div className="text-white relative z-10 sm:px-[232px]  flex max-sm:flex-col items-center justify-center h-full gap-10 ">
            {/* WHO AM I */}
            <div className=" sm:flex-[1] flex flex-col gap-10 h-[420px] bg-primaryExtraDark shadow-bottom3 rounded-[10px] hover:brightness-125">
              <h5 className="text-primary font-upheaval ml-[28px] mt-4 ">
                {AboutMeContainer[0].name}
              </h5>
              <p className="text-grey ml-[28px]   h-auto sm:h-[55px] font-vt323">
                {AboutMeContainer[0].text1}
              </p>
              <p className="text-grey ml-[28px] mt-10  w-[320px] h-auto sm:h-[55px] font-vt323">
                {AboutMeContainer[0].text2}
              </p>
            </div>

            {/*  SKILLS HOBBIES */}
            <div className="w-full sm:flex-[1] flex h-[420px] gap-5 flex-col">
              <div className="h-[200px] bg-primaryExtraDark  shadow-bottom3 rounded-[10px] hover:brightness-125">
                <h5 className="text-primary font-upheaval ml-[28px] mt-4">
                  {AboutMeContainer[1].name}
                </h5>
                <p className="text-grey ml-[28px]  w-[320px] h-[55px] font-vt323">
                  {AboutMeContainer[1].text1}
                </p>
              </div>
              <div className="h-[200px] bg-primaryExtraDark  shadow-bottom3 rounded-[10px] hover:brightness-125">
                <h5 className="text-primary font-upheaval ml-[28px] mt-4">
                  {AboutMeContainer[2].name}
                </h5>
                <p className="text-grey ml-[28px]  w-[320px] h-[55px] font-vt323">
                  {AboutMeContainer[2].text1}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default AboutMe;
