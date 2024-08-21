"use client";
import { MyProjectContainer } from "@/content";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

const MyProject = () => {
  const [activeProject, setActiveProject] = useState(1);

  const handlePrevClick = () => {
    setActiveProject((prevIndex) =>
      prevIndex === 1 ? MyProjectContainer.length : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveProject((prevIndex) =>
      prevIndex === MyProjectContainer.length ? 1 : prevIndex + 1
    );
  };

  const handleItemClick = (id: number) => {
    setActiveProject(id);
  };

  return (
    <SectionWrapper>
      <section id="MyProjects" className="sm:h-screen ">
        {/* Title */}
        <h2 className="text-primary font-upheaval drop-shadow-titleDrop w-full text-center mt-[160px]">
          MY PROJECTS
        </h2>
        {/* Content */}

        <div className="w-full flex max-sm:flex-col-reverse max-sm:items-center   sm:h-[520px] shadow-bottom ">
          {/* Project LEFTIMAGE */}
          <div className="flex flex-col w-[426px]  relative">
            <div className="inset-0 mix-blend-luminosity	">
              <Image
                src="/img/projectNameBg.png"
                alt="png"
                fill
                className="object-cover opacity-30"
              />
            </div>
            {/* DETAILS */}
            <div className="flex flex-col ml-[32px] relative ">
              <h5 className="font-upheaval text-primary mt-[24px]">PROJECT</h5>
              <div className="flex gap-3">
                <AnimatePresence>
                  <motion.h3
                    key={activeProject}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-secondary font-upheaval leading-9 "
                  >
                    {MyProjectContainer[activeProject - 1]?.projectName ||
                      "PROJECT NAME"}
                  </motion.h3>
                </AnimatePresence>
                <Image
                  src="/img/projeNameLeft.svg"
                  alt="Image"
                  width={46}
                  height={39}
                  className="absolute right-5"
                />
              </div>
              <AnimatePresence>
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h5 className="text-white font-vt323 ">
                    {MyProjectContainer[activeProject - 1].category}
                  </h5>
                </motion.div>
              </AnimatePresence>
              {/* Description Project */}
              <AnimatePresence>
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-grey w-[340px] mt-[40px]">
                    {MyProjectContainer[activeProject - 1]?.description}
                  </p>
                </motion.div>
              </AnimatePresence>
              {/* Play game button */}
              <button className="bg-secondaryExtraDark hover:bg-secondaryDark transition-all ease-out active:py-[4px] w-fit text-white py-[10px] px-[14px] mt-[32px] font-vt323 border-[2px] border-secondaryLight drop-shadow-custom ">
                <a href={MyProjectContainer[activeProject - 1].href}>
                  <h5 className="">PLAY GAME</h5>
                </a>
              </button>
              {/* Other Proejct itch.io */}
              <p className="text-primary mt-[30px] font-vt323 w-fit  cursor-pointer hover:text-lime-400">
                Other Projects On{" "}
                <span className="cursor-pointer">
                  <a href="#" className="cursor-pointer underline">
                    ITCH.IO
                  </a>
                </span>
              </p>
            </div>
          </div>
          {/* Project Image Container */}
          <div className="w-[854px] h-[519px]   flex flex-col relative">
            {/* BigImageContainer */}
            <a
              href={MyProjectContainer[activeProject - 1].href}
              className="relative w-full h-full hover:brightness-110"
            >
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="w-full h-full relative"
              >
                <Image
                  src={MyProjectContainer[activeProject - 1].img}
                  alt={MyProjectContainer[activeProject - 1].category}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </a>
            {/* SlidePart */}
            <div className="bg-blackOpacity40 w-full h-[72px] z-20 absolute bottom-0 text-white flex items-center justify-center gap-8">
              {/* LeftArrow */}
              <Image
                src="/img/ArrowLeft.svg"
                alt="ArrowLeft"
                width={32}
                height={32}
                className="cursor-pointer hover:brightness-150 transition ease-out"
                onClick={handlePrevClick}
              />
              {/* ProjectsContainer */}
              <ul className="flex gap-3 items-center">
                {MyProjectContainer.map((item) => (
                  <li
                    key={item.id}
                    className={`${
                      activeProject === item.id
                        ? "w-[54px] h-[54px]"
                        : "w-[32px] h-[32px]"
                    } relative cursor-pointer`}
                    onClick={() => handleItemClick(item.id)}
                  >
                    <Image src={item.img} alt={item.projectName} fill />
                  </li>
                ))}
              </ul>
              {/* RightArrow */}
              <Image
                src="/img/ArrowRight.svg"
                alt="ArrowRight"
                width={32}
                height={32}
                className="cursor-pointer hover:brightness-150 transition ease-out"
                onClick={handleNextClick}
              />
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default MyProject;
