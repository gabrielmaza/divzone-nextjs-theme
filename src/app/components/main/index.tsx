import { SelectedPageEnum } from "@/app/shared/typesEnum";
import ActionButton from "@/app/shared/ActionButton";
import HomePageText from "../../../../public/img/svg/home_page_text.svg";
import HomePageGraphic from "../../../../public/img/home_page_graphic.png";
import { motion } from "framer-motion";
import HText from "@/app/shared/HText";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import backgroundSparkles from "../../../../public/img/background_sparkles.png";

type Props = {
  setSelectedPage: (value: SelectedPageEnum) => void;
};

const Main: React.FC<Props> = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="gap-16 bg-gray-900 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-[480px]"
        onViewportEnter={() => setSelectedPage(SelectedPageEnum.Home)}
      >
        {/* Main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <Image
                className="absolute w-full scale-150 top-[-6rem] left-[-6rem] z-[-1] opacity-80"
                src={backgroundSparkles}
                alt={"background sparkles img"}
              />
              <div className="flex flex-col justify-center">
                <Image src={HomePageText} alt="Home page text" />
                <span className="text-primary-100 font-light text-[2rem] leading-[4rem]">
                  Multipurpose theme.
                </span>
              </div>
            </div>
            <h1 className="mt-8 text-lg font-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
          </motion.div>
          {/* Action buttons */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton
              setSelectedPage={setSelectedPage}
              page={SelectedPageEnum.ContactUs}
              label="Join Now"
            />

            <a
              className="text-sm font-bold text-primary-100 underline hover:text-secondary-100 transition duration-500"
              onClick={() => setSelectedPage(SelectedPageEnum.Benefits)}
              href={`#${SelectedPageEnum.Benefits}`}
            >
              Learn More
            </a>
          </motion.div>
        </div>
        {/* Image */}
        <div className="relative flex basis-3/5 justify-center z-10 md:ml-40 md:mt-16 md:justify-items-end h-[280px] xs:h-[410px]">
          <Image
            src={HomePageGraphic}
            alt="Home page graphic"
            className="absolute right-1/2 translate-x-[50%] md:right-0 md:translate-x-0 top-10 md:top-0 h-full md:h-[460px] w-auto object-contain"
          />
        </div>
      </motion.div>
      {/* HOW DO WE DO IT? */}
      <div className="bg-gray-800 py-12 sm:py-20 mx-4 md:mx-16 my-4 rounded-2xl">
        <div className="md:flex items-center justify-center gap-4 mx-auto w-11/12 xl:w-5/6 h-full">
          <HText className="w-full md:w-2/12 md:max-w-[200px] pb-12 md:p-0">
            ESSENTIAL SERVICES
          </HText>
          <div className="sm:flex items-center justify-between w-full md:w-10/12 h-full mx-auto pl-[20px] sm:pl-0">
            <div className="relative flex flex-col justify-center w-full xs:w-2/3 md:w-1/3 h-[120px] p-4 mx-auto rounded-xl border border-secondary-50 bg-secondary-50">
              <div className="absolute top-3 sm:top-[-20px] left-[-20px] sm:left-4 flex items-center justify-center w-10 h-10 border rounded-xl border-secondary-50 bg-gray-800">
                <ArrowRightIcon className="w-5 h-5 text-secondary-50 rotate-90 sm:rotate-0" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 pl-3 sm-pl-0 pt-3">
                Digital Advertising
              </h2>
            </div>
            <svg
              className="w-auto h-6 mx-auto md:mx-0 hidden sm:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24.15 48.31"
            >
              <g>
                <path
                  className="fill-secondary-50"
                  d="m24.15,0v48.31c0-6.67-5.4-12.08-12.07-12.08S0,41.64,0,48.31V0c0,6.67,5.41,12.08,12.08,12.08S24.15,6.67,24.15,0Z"
                />
              </g>
            </svg>
            <svg
              className="w-6 h-auto mx-auto md:mx-0 block sm:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48.31 24.15"
            >
              <g>
                <path
                  className="fill-secondary-50"
                  d="m48.31,24.15H0c6.67,0,12.08-5.4,12.08-12.07S6.67,0,0,0h48.31c-6.67,0-12.08,5.41-12.08,12.08s5.41,12.07,12.08,12.07Z"
                />
              </g>
            </svg>
            <div className="relative flex flex-col justify-center w-full xs:w-2/3 md:w-1/3 h-[120px] p-4 mx-auto rounded-xl border border-secondary-50 bg-secondary-50">
              <div className="absolute top-3 sm:top-[-20px] left-[-20px] sm:left-4 flex items-center justify-center w-10 h-10 border rounded-xl border-secondary-50 bg-gray-800">
                <ArrowRightIcon className="w-5 h-5 text-secondary-50 rotate-90 sm:rotate-0" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 pl-3 sm-pl-0 pt-3">
                Social Media Marketing
              </h2>
            </div>
            <svg
              className="w-auto h-6 mx-auto md:mx-0 hidden sm:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24.15 48.31"
            >
              <g>
                <path
                  className="fill-secondary-50"
                  d="m24.15,0v48.31c0-6.67-5.4-12.08-12.07-12.08S0,41.64,0,48.31V0c0,6.67,5.41,12.08,12.08,12.08S24.15,6.67,24.15,0Z"
                />
              </g>
            </svg>
            <svg
              className="w-6 h-auto mx-auto md:mx-0 block sm:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48.31 24.15"
            >
              <g>
                <path
                  className="fill-secondary-50"
                  d="m48.31,24.15H0c6.67,0,12.08-5.4,12.08-12.07S6.67,0,0,0h48.31c-6.67,0-12.08,5.41-12.08,12.08s5.41,12.07,12.08,12.07Z"
                />
              </g>
            </svg>
            <div className="relative flex flex-col justify-center w-full xs:w-2/3 md:w-1/3 h-[120px] p-4 mx-auto rounded-xl border border-secondary-50 bg-secondary-50">
              <div className="absolute top-3 sm:top-[-20px] left-[-20px] sm:left-4 flex items-center justify-center w-10 h-10 border rounded-xl border-secondary-50 bg-gray-800">
                <ArrowRightIcon className="w-5 h-5 text-secondary-50 rotate-90 sm:rotate-0" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 pl-3 sm-pl-0 pt-3">
                Search Engine Optimization
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
