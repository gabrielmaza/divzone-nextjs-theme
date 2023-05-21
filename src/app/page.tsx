"use client";
import { useEffect, useState } from "react";
import { SelectedPageEnum } from "./shared/typesEnum";
import Navbar from "./components/nav-bar";
import Main from "./components/main";
import Benefits from "./components/benefits";
import Services from "./components/services";
import ContactUs from "./components/contact-us";
import Footer from "./components/footer";
import Pricing from "./components/pricing";
import Faqs from "./components/faqs";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPageEnum>(
    SelectedPageEnum.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPageEnum.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 max-w-[1400px] mx-auto">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Main setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <Pricing setSelectedPage={setSelectedPage} />
      <Faqs setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}
