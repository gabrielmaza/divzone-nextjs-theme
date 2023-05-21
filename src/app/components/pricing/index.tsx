import HText from "@/app/shared/HText";
import { PlanType, SelectedPageEnum } from "@/app/shared/typesEnum";
import { motion } from "framer-motion";
import React from "react";
import Plan from "./plan";

const plans: Array<PlanType> = [
  {
    name: "Startup",
    price: "45.99",
    items: [
      {
        name: "3 Emails",
      },
      {
        name: "1 Database",
      },
      {
        name: "1 Domain",
      },
      {
        name: "10 GB Storage",
      },
    ],
    recommended: false,
  },
  {
    name: "Agency",
    price: "65.99",
    items: [
      {
        name: "6 Emails",
      },
      {
        name: "2 Database",
      },
      {
        name: "Unlimited Domains",
      },
      {
        name: "20 GB Storage",
      },
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "85.99",
    items: [
      {
        name: "Unlimited Emails",
      },
      {
        name: "3 Database",
      },
      {
        name: "Unlimited Domains",
      },
      {
        name: "Unlimited Storage",
      },
    ],
    recommended: false,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPageEnum) => void;
};

const Pricing: React.FC<Props> = ({ setSelectedPage }: Props) => {
  return (
    <section id="pricing" className="bg-gray-700 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPageEnum.Pricing)}
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
              <Plan
                key={plan.name}
                name={plan.name}
                price={plan.price}
                items={plan.items}
                recomm={plan.recommended}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
