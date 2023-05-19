import { SelectedPageEnum, ServiceType } from "@/app/shared/typesEnum";
import { motion } from "framer-motion";
import HText from "@/app/shared/HText";
import ServiceItem from "./ServiceItem";

const category: Array<ServiceType> = [
    {
        name: "Content Marketing",
        description:
            "This service involves creating, designing, and developing software applications for different purposes, such as desktop or mobile applications, web applications, and custom software solutions.",
    },
    {
        name: "Email Marketing",
        description:
            "This service involves testing the software to ensure that it meets the necessary standards and requirements, and that it works correctly.",
    },
    {
        name: "Branding and Identity",
        description:
            "This service involves providing ongoing maintenance and support to ensure that the software continues to function correctly and that any issues that arise are addressed promptly.",
    },
    {
        name: "Marketing Analytics and Reporting",
        description:
            "This service involves overseeing the development process and ensuring that the project is completed on time, within budget, and to the required standard.",
    },
    {
        name: "Website Design and Development",
        description:
            "This service involves designing software that is user-friendly, intuitive, and easy to use.",
    },
    {
        name: "Public Relations and Media Outreach",
        description:
            "This service involves providing expert advice and guidance to clients on issues such as software development strategies, project management, and software integration.",
    },
];

type Props = {
    setSelectedPage: (value: SelectedPageEnum) => void;
};

const Services: React.FC<Props> = ({ setSelectedPage }: Props) => {
    return (
        <section id="services" className="w-full bg-gray-800 pt-24 pb-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPageEnum.Services)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>WHAT DO<span className="text-primary-100"> WE DO?</span></HText>
                        <p className="py-5">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 mx-auto h-auto w-5/6">
                    <ul className="flex flex-wrap justify-center gap-1">
                        {category.map((item: ServiceType, index) => (
                            <ServiceItem
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default Services;