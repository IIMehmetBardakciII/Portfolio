import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const Header = () => {
  return (
    <SectionWrapper>
      <header className="relative w-screen h-screen flex items-center justify-center ">
        <div>
          {/* Text/Button */}
          <div className="relative z-10 flex items-center flex-col max-md:top-[300px]   ">
            <h1 className="max-lg:text-[96px] max-sm:text-[64px] max-[412px]:text-[50px] text-primary font-upheaval drop-shadow-custom md:mt-[700px]  ">
              YANKI MUSTU
            </h1>
            <h1 className="max-lg:text-[96px] max-sm:text-[64px] max-[412px]:text-[50px] max-[412px]:top-[-100px]   text-stroke-3 text-transparent  font-upheaval drop-shadow-custom2 top-[-25px] relative">
              DEVELOPER
            </h1>

            <a
              href="#MyProjects"
              className=" relative px-[30px] py-[8px] bg-primary border-[2px] border-primaryExtraDark drop-shadow-buttonDrop cursor-pointer max-[376px]:top-[-100px]  lg:mt-[120px] active:py-[4px] hover:bg-primaryDark"
            >
              <h5 className="text-white font-vt323">View My Projects</h5>
            </a>
          </div>
          {/* Background */}
          <div className="inset-0 h-screen">
            <Image
              src="/img/HeaderBg.gif"
              alt="game1"
              className="opacity-30 object-cover"
              fill
              unoptimized
            />
          </div>
          {/* Social Media */}
          <div className="max-w-[1280px] flex gap-5 items-end text-white absolute z-20 top-[10px] right-[100px]  ">
            <a
              href="#"
              className="hover:scale-110 transition ease-out delay-100"
            >
              <Image src="/img/Discord.svg" alt="" width={22} height={22} />
            </a>
            <a
              href="#"
              className="hover:scale-110 transition ease-out delay-100"
            >
              <Image src="/img/X.svg" alt="" width={22} height={22} />
            </a>
            <a
              href="#"
              className="hover:scale-110 transition ease-out delay-100"
            >
              <Image src="/img/Github.svg" alt="" width={22} height={22} />
            </a>
            <a
              href="#"
              className="hover:scale-110 transition ease-out delay-100"
            >
              <Image src="/img/Instagram.svg" alt="" width={22} height={22} />
            </a>
          </div>
        </div>
      </header>
    </SectionWrapper>
  );
};

export default Header;
