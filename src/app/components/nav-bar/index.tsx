import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../../../public/img/svg/logo_nav.svg";
import { SelectedPageEnum } from "@/app/shared/typesEnum";
import useMediaQuery from "@/app/hooks/useMediaQ";
import { motion } from "framer-motion";
import Image from "next/image";
import MyLink from "./MyLink";

type IndexProps = {
  isTopOfPage: boolean;
  selectedPage: SelectedPageEnum;
  setSelectedPage: (value: SelectedPageEnum) => void;
}

export default function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: IndexProps) {
  const flexBetween = "flex items-center justify-between"
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : "bg-gray-700 drop-shadow"
  const hoverMyLinkColor = isTopOfPage ? "hover:text-secondary-300" : "hover:text-secondary-100"
  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-50 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <Image src={Logo} alt="Logo" className="h-5 w-auto" />
            {/* Right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <MyLink selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Home" />
                  <MyLink selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Benefits" />
                  <MyLink selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Services" />
                  <MyLink selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Contact Us" />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <a href="#" title="Sign in MyLink" className={`transition duration-500 hover:text-gray-600`}>Sign In</a>
                  <a href="#" className="rounded-md bg-transparent border-solid border border-white px-6 py-2 cursor-pointer transition duration-500 hover:bg-gray-800">
                    <span className="inline-block">Become a member</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.02 147.93"
                      className="w-5 h-5 ml-2 my-auto inline-block"
                    >
                      <defs></defs><g>
                        <path className="fill-white" d="m95.86,0c-14.57,0-27.98,4.99-38.61,13.35l8.5,8.5c8.41-6.24,18.83-9.93,30.11-9.93,27.94,0,50.6,22.66,50.6,50.6s-22.66,50.61-50.6,50.61c-10.85,0-20.91-3.42-29.15-9.24l-8.53,8.53c10.48,7.93,23.53,12.63,37.68,12.63,34.53,0,62.53-28,62.53-62.53S130.39,0,95.86,0Z" />
                        <path className="fill-white" d="m95.85,63.3s.01.06,0,.08c0,.23-.01.46-.04.68-.01.21-.04.42-.09.63-.02.1-.04.2-.07.3-.02.12-.05.24-.09.35,0,.04-.01.07-.03.09t-.01.02c-.09.27-.19.54-.3.8-.18.38-.39.75-.63,1.1-.06.12-.14.23-.25.34-.09.11-.18.22-.27.32-.07.11-.17.21-.27.31l-.11.11-40.69,40.68c-1.37,1.37-3.17,2.06-4.98,2.06s-3.61-.69-4.98-2.06c-2.74-2.74-2.74-7.23,0-9.97l28.75-28.75H7.05c-3.87,0-7.05-3.17-7.05-7.05,0-1.93.79-3.69,2.07-4.97,1.28-1.28,3.04-2.07,4.98-2.07h64.75l-28.76-28.76c-2.74-2.74-2.74-7.22,0-9.97,1.37-1.37,3.17-2.06,4.98-2.06s3.61.69,4.98,2.06l40.8,40.8c.21.21.4.43.58.65.1.12.19.24.27.37.07.1.37.65.45.82.03.05.06.11.09.17.03.07.06.14.09.22.01.03.03.07.05.11.02.03.03.06.04.1.02.04.03.08.04.12.05.11.3.99.31,1.06.05.21.08.42.09.63.03.23.04.45.04.68Z" /></g>
                    </svg>
                  </a>
                  <a href="https://divzone-typescript-doc.vercel.app/docs/intro" target="_blank" title="Documentation MyLink" className={`transition duration-500 hover:text-gray-600`}>Docs</a>
                </div>
              </div>
            ) :
              <motion.button className="rounded-full bg-secondary-400 p-2"
                whileTap={{ scale: 0.8 }}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </motion.button>
            }
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
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              opacity: 0,
              x: 100,
              transition: { duration: 0.2 }
            },
          }}
        >
          {/*Close icon*/}
          <div className="flex justify-end p-8">
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => setIsOpen(!isOpen)}>
              <XMarkIcon className="w-6 h-6 text-white" />
            </motion.button>
          </div>
          {/*Menu items*/}
          <motion.div className="mx-[10%] flex flex-col gap-10 text-xl"
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 300, damping: 24 }
              },
              closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
            }
            }
          >
            <MyLink selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Home" />
            <MyLink selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Benefits" />
            <MyLink selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Services" />
            <MyLink selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Contact Us" />
            <a href="https://divzone-typescript-doc.vercel.app/docs/intro" target="_blank" className="text-white transition duration-500 hover:text-gray-600 cursor-pointer">Docs</a>
            <hr />
            <div className="flex flex-col gap-8">
              <a href="#" title="Sign in MyLink" className={`transition duration-500 hover:text-gray-600`}>Sign In</a>
              <a href="#" className="rounded-md bg-transparent border-solid border border-white px-6 py-2 cursor-pointer transition duration-500 hover:bg-gray-800">
                <span className="text-lg inline-block">Become a member</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.02 147.93"
                  className="w-5 h-5 ml-2 my-auto inline-block"
                >
                  <defs></defs><g>
                    <path className="fill-white" d="m95.86,0c-14.57,0-27.98,4.99-38.61,13.35l8.5,8.5c8.41-6.24,18.83-9.93,30.11-9.93,27.94,0,50.6,22.66,50.6,50.6s-22.66,50.61-50.6,50.61c-10.85,0-20.91-3.42-29.15-9.24l-8.53,8.53c10.48,7.93,23.53,12.63,37.68,12.63,34.53,0,62.53-28,62.53-62.53S130.39,0,95.86,0Z" />
                    <path className="fill-white" d="m95.85,63.3s.01.06,0,.08c0,.23-.01.46-.04.68-.01.21-.04.42-.09.63-.02.1-.04.2-.07.3-.02.12-.05.24-.09.35,0,.04-.01.07-.03.09t-.01.02c-.09.27-.19.54-.3.8-.18.38-.39.75-.63,1.1-.06.12-.14.23-.25.34-.09.11-.18.22-.27.32-.07.11-.17.21-.27.31l-.11.11-40.69,40.68c-1.37,1.37-3.17,2.06-4.98,2.06s-3.61-.69-4.98-2.06c-2.74-2.74-2.74-7.23,0-9.97l28.75-28.75H7.05c-3.87,0-7.05-3.17-7.05-7.05,0-1.93.79-3.69,2.07-4.97,1.28-1.28,3.04-2.07,4.98-2.07h64.75l-28.76-28.76c-2.74-2.74-2.74-7.22,0-9.97,1.37-1.37,3.17-2.06,4.98-2.06s3.61.69,4.98,2.06l40.8,40.8c.21.21.4.43.58.65.1.12.19.24.27.37.07.1.37.65.45.82.03.05.06.11.09.17.03.07.06.14.09.22.01.03.03.07.05.11.02.03.03.06.04.1.02.04.03.08.04.12.05.11.3.99.31,1.06.05.21.08.42.09.63.03.23.04.45.04.68Z" /></g>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )
      }
    </nav >
  )
}
