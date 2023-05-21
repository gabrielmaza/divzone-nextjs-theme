import HText from "@/app/shared/HText";
import { FaqType, SelectedPageEnum } from "@/app/shared/typesEnum";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";

const faqs: Array<FaqType> = [
  {
    id: 1,
    question: "What are your payment methods?",
    answer:
      "We accept various payment methods, including credit cards, PayPal, and bank transfers. You can choose the option that is most convenient for you.",
  },
  {
    id: 2,
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on your location and the shipping method chosen. Typically, orders are delivered within 3-7 business days.",
  },
  {
    id: 3,
    question: "Can I return or exchange a product?",
    answer:
      "Yes, we have a hassle-free return and exchange policy. If you are not satisfied with your purchase, you can return or exchange the product within 30 days of receipt.",
  },
  {
    id: 4,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Additional fees and customs duties may apply. Please check our shipping policies for more information.",
  },
  {
    id: 5,
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, we will provide you with a tracking number. You can use this tracking number to monitor the progress of your shipment on our website.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPageEnum) => void;
};

const Faqs: React.FC<Props> = ({ setSelectedPage }: Props) => {
  return (
    <section id="faqs" className="bg-gray-800 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPageEnum.Plans)}
      >
        <div className="mx-auto w-5/6">
          <div className="md:w-3/5">
            <HText>Faqs</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor.
            </p>
          </div>
        </div>
        <div className="w-5/6 mx-auto">
          <div className="mx-auto w-full h-fit rounded-2xl bg-gray-900 px-2 py-1">
            {faqs.map((faq: FaqType) => (
              <Disclosure key={faq.id} as="div" className="py-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-800 px-4 py-4 text-left text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-primary-300 focus-visible:ring-opacity-75 transition-all">
                      <span>{faq.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-5 pb-3 text-sm text-white">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Faqs;
