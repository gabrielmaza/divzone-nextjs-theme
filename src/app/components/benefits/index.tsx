import Image from 'next/image'
import ActionButton from "@/app/shared/ActionButton";
import HText from "@/app/shared/HText";
import { BenefitType, SelectedPageEnum } from "@/app/shared/typesEnum";
import { CheckCircleIcon, LifebuoyIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "../../../../public/img/benefits_page_graphic.png";
import Benefit from './Benefit';
import arrowRight from '../../../../public/img/svg/arrow.svg'

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

export default function index({ setSelectedPage }: Props) {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 pt-24 pb-32"
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
                                <Image className="hidden md:block absolute top-[-2rem] left-[-5rem] z-[1] w-16 rotate-45 opacity-10" alt="contact arrow img" src={arrowRight} />
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
                            <p className="my-5">
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                                Felis orci diam odio.
                            </p>
                            <p className="mb-5">
                                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                                enim mattis odio in risus nunc.
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16 z-10">
                            <ActionButton label='Join Now' setSelectedPage={setSelectedPage} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
