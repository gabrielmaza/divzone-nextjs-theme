import HText from "@/app/shared/HText";
import { PlanType, SelectedPageEnum } from "@/app/shared/typesEnum";
import { motion } from "framer-motion";
import React from "react";
import Plan from "./plan";

const plans: Array<PlanType> = [
    {
        name: "Startup",
        price: "45.99",
        items: ["3 Emails", "1 Database", "1 Domain", "10 GB Storage"],
        recommended: false,
    },
    {
        name: "Agency",
        price: "65.99",
        items: ["6 Emails", "2 Database", "Unlimited Domains", "20 GB Storage"],
        recommended: true,
    },
    {
        name: "Enterprise",
        price: "85.99",
        items: ["Unlimited Emails", "3 Database", "Unlimited Domains", "Unlimited Storage"],
        recommended: false,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPageEnum) => void;
};

const Plans: React.FC<Props> = ({ setSelectedPage }: Props) => {
    return (
        <section id="plans" className="bg-gray-800 pt-24 pb-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPageEnum.Plans)}
            >
                <div className="mx-auto w-5/6">
                    <div className="md:w-3/5">
                        <HText>
                            CHOOSE YOUR<span className="text-primary-100"> BEST PLAN</span>
                        </HText>
                        <p className="py-5">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor.
                        </p>
                    </div>
                </div>
                <div className="w-5/6 mx-auto">
                    <div className="flex flex-wrap items-center -mx-[0.125rem]">
                        {plans.map((plan: PlanType) => (
                            <Plan key={plan.name} name={plan.name} price={plan.price} items={plan.items} recomm={plan.recommended} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Plans;
