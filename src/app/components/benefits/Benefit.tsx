import { SelectedPageEnum } from "@/app/shared/typesEnum";
import { motion } from "framer-motion";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPageEnum) => void;
};

const Benefit: React.FC<Props> = ({ icon, title, description, setSelectedPage }: Props) => {
    return (
        <motion.div
            variants={childVariant}
            className="relative z-0 mt-5 rounded-xl bg-primary-100 px-5 py-16 text-center"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.5 184.01"
                className="absolute top-0 left-[-1px] z-10 w-[26px] h-[94px]"
            ><defs></defs><g><path className="fill-gray-950" d="m50.5,0c-10.12.01-18.4,8.3-18.4,18.42v130.31c0,.29-.01.58-.02.87-.01.14-.02.28-.03.42-.01.2-.03.4-.05.59-.02.26-.05.52-.09.78-.02.15-.05.3-.08.44,0,.02-.01.05-.01.07-.02.16-.05.32-.09.48,0,.02-.01.03-.01.05-.04.2-.08.39-.13.58-.05.22-.1.43-.17.65-.01.08-.04.16-.06.24-.01.04-.02.08-.04.12-.06.19-.11.38-.18.56-.07.23-.16.45-.24.67-.01.02-.01.04-.02.06-.02.04-.03.09-.05.13-.02.04-.03.08-.05.12-.07.19-.16.38-.24.57-.11.25-.22.5-.35.74-.12.25-.25.49-.38.73-.17.31-.36.62-.55.92-.02.04-.05.08-.07.12-.15.23-.3.46-.47.68-.47.68-.99,1.32-1.55,1.93-.13.14-.26.27-.39.41-.15.15-.3.3-.46.44-.17.16-.34.32-.52.47-.06.06-.13.12-.19.17-.15.13-.31.26-.47.39-.04.03-.08.06-.12.09-.19.15-16.12,13.51-25.02,20.79V18.46C0,8.26,8.26,0,18.45,0h32.05Z" /></g></svg>
            <div className="mb-4 flex justify-center">
                <div className="rounded-full border-2 border-gray-950 bg-secondary-400 p-4">
                    {icon}
                </div>
            </div>

            <h4 className="font-bold text-gray-950">{title}</h4>
            <p className="my-3 text-gray-950">{description}</p>
            <a
                className="text-sm font-bold"
                onClick={() => setSelectedPage(SelectedPageEnum.ContactUs)}
                href={`#${SelectedPageEnum.ContactUs}`}
            >
                <span className="text-gray-800 hover:text-secondary-400 transition duration-500">Learn More</span>
            </a>
        </motion.div>
    );
};

export default Benefit;