import Logo from "../../../../public/img/svg/logo_nav.svg";
import HText from "@/app/shared/HText";
import { ArrowTopRightOnSquareIcon, LinkIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


const Footer = () => {
    return (
        <footer className="bg-gray-950 py-16">
            <div className="mx-auto w-5/6 md:pb-10 pb-0">
                <HText>
                    <span className="text-primary-100">Find</span> us in
                </HText>
                <div className="gap-4 sm:flex my-5">
                    <a
                        className="flex gap-3 justify-center items-center rounded-md bg-primary-300 px-10 py-2 cursor-pointer transition duration-500 hover:bg-primary-500 hover:text-white mb-4"
                        href="#"
                        target="_blank"
                    >
                        <span>Facebook</span>
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </a>
                    <a
                        className="flex gap-3 justify-center items-center rounded-md bg-primary-300 px-10 py-2 cursor-pointer transition duration-500 hover:bg-primary-500 hover:text-white mb-4"
                        href="#"
                        target="_blank"
                    >
                        <span>Instagram</span>
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </a>
                    <a
                        className="flex gap-3 justify-center items-center rounded-md bg-primary-300 px-10 py-2 cursor-pointer transition duration-500 hover:bg-primary-500 hover:text-white mb-4"
                        href="#"
                        target="_blank"
                    >
                        <span>Twitter</span>
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </a>
                </div>
            </div>
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <Image alt="logo" src={Logo} className="h-5 w-auto" />
                    <p className="my-5 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam explicabo inventore, voluptatem maxime quam neque mollitia.
                    </p>
                    <p>Copyright © 2023. Built with DivZone.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <LinkIcon className="w-5 h-5" />
                        <h4 className="font-bold">Links</h4>
                    </div>
                    <a href="#" title="Footer link" className="hover:text-primary-100 transition duration-500">Massa orci senectus</a>
                    <a href="#" title="Footer link" className="hover:text-primary-100 transition duration-500">Et gravida id et etiam</a>
                    <a href="#" title="Footer link" className="hover:text-primary-100 transition duration-500">Ullamcorper vivamus</a>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <div className="flex items-center gap-2">
                        <PhoneIcon className="w-5 h-5" />
                        <h4 className="font-bold">Contact Us</h4>
                    </div>
                    <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                    <p>(333)425-6825</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;