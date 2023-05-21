import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../../../public/img/svg/logo_nav.svg";
import { SelectedPageEnum } from "@/app/shared/typesEnum";
import useMediaQuery from "@/app/hooks/useMediaQ";
import { motion } from "framer-motion";
import Image from "next/image";
import MyLink from "./MyLink";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPageEnum;
  setSelectedPage: (value: SelectedPageEnum) => void;
};

const Navbar: React.FC<Props> = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-gray-700 drop-shadow";
  const hoverMyLinkColor = isTopOfPage
    ? "hover:text-secondary-300"
    : "hover:text-secondary-100";
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-50 w-full py-6 max-w-[1400px]`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <Image src={Logo} alt="Logo" className="h-5 w-auto" />
            {/* Right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-6 text-sm`}>
                  <MyLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Home"
                  />
                  <MyLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Benefits"
                  />
                  <MyLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Services"
                  />
                  <MyLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Pricing"
                  />
                  <MyLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Contact Us"
                  />
                </div>
                <div className={`${flexBetween} gap-6`}>
                  <MyLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Faqs"
                  />
                  {/* <a
                    href="#"
                    title="Sign in MyLink"
                    className={`transition duration-500 hover:text-gray-600`}
                  >
                    Sign In
                  </a> */}
                  <a
                    href="#"
                    className="rounded-md bg-transparent border-solid border border-white px-6 py-2 cursor-pointer transition duration-500 hover:bg-gray-800"
                  >
                    <span className="inline-block">Sign In</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 127.427 126.57"
                      className="w-4 h-4 ml-2 my-auto inline-block"
                    >
                      <g>
                        <path
                          className="fill-white"
                          d="M127.427,12V114.57a12.035,12.035,0,0,1-12,12H57.237l12.93-12.93h39.6a4.746,4.746,0,0,0,4.73-4.73V17.66a4.748,4.748,0,0,0-4.73-4.74H70.147c-5-5-9.51-9.51-12.91-12.92h58.19a12.035,12.035,0,0,1,12,12"
                          fill="#fff"
                        />
                        <path
                          className="fill-white"
                          d="M86.213,63.246a.1.1,0,0,1,0,.072,4.563,4.563,0,0,1-.036.612,3.077,3.077,0,0,1-.081.566c-.018.09-.036.18-.063.27a1.8,1.8,0,0,1-.081.315.11.11,0,0,1-.027.081c0,.009,0,.009-.009.018-.081.243-.171.486-.27.719a7.2,7.2,0,0,1-.566.99,1.162,1.162,0,0,1-.225.306c-.081.1-.162.2-.243.288a1.78,1.78,0,0,1-.243.278l-.1.1-36.6,36.59a6.337,6.337,0,0,1-8.958-8.967l25.859-25.86H6.341a6.337,6.337,0,0,1,0-12.673h58.24L38.713,31.081a6.337,6.337,0,0,1,8.958-8.967l36.7,36.7c.189.189.36.386.522.584a2.858,2.858,0,0,1,.243.333c.063.09.332.585.4.738.027.045.054.1.081.153s.054.125.081.2a.8.8,0,0,0,.045.1.269.269,0,0,1,.036.09.507.507,0,0,1,.036.108c.045.1.27.891.279.954a3.077,3.077,0,0,1,.081.566,4.653,4.653,0,0,1,.036.612"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </a>
                  <a
                    href="https://divzone-react-theme-docs.vercel.app/docs/intro"
                    target="_blank"
                    title="Documentation MyLink"
                    className="py-1 px-4 transition duration-500 bg-[rgba(255,255,255,0.1)] hover:bg-white hover:text-gray-900 absolute top-40 right-0 -rotate-90 translate-x-4 rounded-tl-xl rounded-tr-xl z-50"
                  >
                    Docs
                  </a>
                </div>
              </div>
            ) : (
              <motion.button
                className="rounded-full bg-secondary-400 p-2"
                whileTap={{ scale: 0.8 }}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu modal */}
      {!isAboveMediumScreens && isOpen && (
        <motion.div
          className="fixed bottom-0 right-0 top-0 z-50 w-[300px] bg-gray-800 drop-shadow-xl"
          initial="closed"
          whileInView="open"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 0px)",
              opacity: 0.95,
              x: 0,
              transition: {
                type: "spring",
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              opacity: 0,
              x: 100,
              transition: { duration: 0.2 },
            },
          }}
        >
          {/*Close icon*/}
          <div className="flex justify-end p-8">
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <XMarkIcon className="w-6 h-6 text-white" />
            </motion.button>
          </div>
          {/*Menu items*/}
          <motion.div
            className="mx-[10%] flex flex-col gap-10 text-xl"
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 300, damping: 24 },
              },
              closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
            }}
          >
            <MyLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Home"
            />
            <MyLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Benefits"
            />
            <MyLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Services"
            />
            <MyLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Pricing"
            />
            <MyLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Contact Us"
            />
            <MyLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Faqs"
            />
            <hr />
            <div className="flex flex-col gap-8">
              <a
                href="https://divzone-react-theme-docs.vercel.app/docs/intro"
                target="_blank"
                className="text-white transition duration-500 hover:text-gray-600 cursor-pointer"
              >
                Docs
              </a>
              <a
                href="#"
                className="text-center rounded-md bg-transparent border-solid border border-white px-6 py-2 cursor-pointer transition duration-500 hover:bg-gray-800"
              >
                <span className="text-lg inline-block">Sign In</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.427 126.57"
                  className="w-4 h-4 ml-2 my-auto inline-block"
                >
                  <g>
                    <path
                      className="fill-white"
                      d="M127.427,12V114.57a12.035,12.035,0,0,1-12,12H57.237l12.93-12.93h39.6a4.746,4.746,0,0,0,4.73-4.73V17.66a4.748,4.748,0,0,0-4.73-4.74H70.147c-5-5-9.51-9.51-12.91-12.92h58.19a12.035,12.035,0,0,1,12,12"
                      fill="#fff"
                    />
                    <path
                      className="fill-white"
                      d="M86.213,63.246a.1.1,0,0,1,0,.072,4.563,4.563,0,0,1-.036.612,3.077,3.077,0,0,1-.081.566c-.018.09-.036.18-.063.27a1.8,1.8,0,0,1-.081.315.11.11,0,0,1-.027.081c0,.009,0,.009-.009.018-.081.243-.171.486-.27.719a7.2,7.2,0,0,1-.566.99,1.162,1.162,0,0,1-.225.306c-.081.1-.162.2-.243.288a1.78,1.78,0,0,1-.243.278l-.1.1-36.6,36.59a6.337,6.337,0,0,1-8.958-8.967l25.859-25.86H6.341a6.337,6.337,0,0,1,0-12.673h58.24L38.713,31.081a6.337,6.337,0,0,1,8.958-8.967l36.7,36.7c.189.189.36.386.522.584a2.858,2.858,0,0,1,.243.333c.063.09.332.585.4.738.027.045.054.1.081.153s.054.125.081.2a.8.8,0,0,0,.045.1.269.269,0,0,1,.036.09.507.507,0,0,1,.036.108c.045.1.27.891.279.954a3.077,3.077,0,0,1,.081.566,4.653,4.653,0,0,1,.036.612"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
