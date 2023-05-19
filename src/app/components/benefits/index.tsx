import Image from 'next/image'
import ActionButton from "@/app/shared/ActionButton";
import HText from "@/app/shared/HText";
import { BenefitType, SelectedPageEnum } from "@/app/shared/typesEnum";
import { CheckCircleIcon, LifebuoyIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "../../../../public/img/benefits_page_graphic.png";
import Benefit from './Benefit';

const benefits: Array<BenefitType> = [
    {
        icon: <CheckCircleIcon className="h-6 w-6" />,
        title: "Quality",
        description:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
        icon: <LifebuoyIcon className="h-6 w-6" />,
        title: "Support 24/7",
        description:
            "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
        icon: <PlusCircleIcon className="h-6 w-6" />,
        title: "Value-added",
        description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPageEnum) => void;
}

const Benefits: React.FC<Props> = ({ setSelectedPage }) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 pt-10 lg:pt-24 pb-32"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPageEnum.Benefits)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>MORE THAN JUST <span className="text-primary-100">SERVICES</span></HText>
                    <p className="my-5 text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore animi molestias excepturi quibusdam iure temporibus saepe tenetur sunt ea suscipit aliqui.
                    </p>
                </motion.div>
                {/* BENEFITS */}
                <motion.div
                    className="mt-5 items-center justify-between gap-1 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
                {/* GRAPHICS AND DESCRIPTION */}
                <div className=" mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHIC */}
                    <Image className="w-full sm:w-1/2 mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic} />
                    {/* DESCRIPTION */}
                    <div className="w-full md:w-1/2">
                        {/* TITLE */}
                        <div className="relative">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 95.854 95.66"
                                    className="hidden w-12 h-12 md:block absolute top-[-2rem] left-[-4rem] z-[1] rotate-45 fill-gray-800"
                                >
                                    <path d="M95.85,47.79a.208.208,0,0,1,0,.08,5.071,5.071,0,0,1-.04.68,3.417,3.417,0,0,1-.09.63c-.02.1-.04.2-.07.3a2,2,0,0,1-.09.35.122.122,0,0,1-.03.09l-.01.02c-.09.27-.19.54-.3.8a8.01,8.01,0,0,1-.63,1.1,1.292,1.292,0,0,1-.25.34c-.09.11-.18.22-.27.32a1.935,1.935,0,0,1-.27.31l-.11.11L53,93.6a7.046,7.046,0,0,1-9.96-9.97L71.79,54.88H7.05a7.045,7.045,0,0,1,0-14.09H71.8L43.04,12.03A7.046,7.046,0,0,1,53,2.06l40.8,40.8c.21.21.4.43.58.65a3.175,3.175,0,0,1,.27.37c.07.1.37.65.45.82.03.05.06.11.09.17s.06.14.09.22a.974.974,0,0,0,.05.11.3.3,0,0,1,.04.1.564.564,0,0,1,.04.12c.05.11.3.99.31,1.06a3.416,3.416,0,0,1,.09.63,5.17,5.17,0,0,1,.04.68Z" />
                                </svg>
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-100">QUALITY SERVICES</span>
                                </HText>
                            </motion.div>
                        </div>

                        {/* DESCRIPT */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5 leading-7">
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                                Felis orci diam odio.
                            </p>
                            <p className="mb-5 leading-7">
                                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                                enim mattis odio in risus nunc.
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16 z-10">
                            <ActionButton
                                setSelectedPage={setSelectedPage}
                                page={SelectedPageEnum.ContactUs}
                                label="Contact Now"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits;

