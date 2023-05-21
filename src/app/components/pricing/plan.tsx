import { PlanType } from "@/app/shared/typesEnum";
import React from "react";

type Props = {
  name: string;
  price: string;
  items: [
    { name: string },
    { name: string },
    { name: string },
    { name: string }
  ];
  recomm: boolean;
};

const Plan = ({ name, price, items, recomm }: Props) => {
  return (
    <div className="w-full sm:w-1/3 mb-6 px-[0.125rem]">
      <div
        className={`hover-up-5 border border-gray-200 pt-16 pb-8 px-4 text-center bg-gray-800 rounded-xl ${
          recomm && "bg-gray-900"
        }`}
      >
        <h3 className="mb-2 text-zxl sm:text-3xl md:text-4xl font-bold font-heading">
          {name}
        </h3>
        <span
          className={`text-4xl font-bold font-heading ${
            recomm ? "text-primary-100" : "text-secondary-100"
          }`}
        >
          {price}
        </span>
        <p className="mt-2 mb-8 text-blueGray-400">user per month</p>
        <div className="flex flex-col items-center mb-8">
          <ul className="text-blueGray-400">
            {items.map((item) => (
              <li className="flex mb-3" key={item.name}>
                <svg
                  className="w-6 h-6 mr-2 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-fit flex gap-2 flex-col lg:flex-row mx-auto">
          <a
            className={`block py-4 px-6 text-xs text-white text-center font-semibold leading-none rounded transition-all ${
              recomm
                ? "bg-primary-300 hover:bg-primary-500"
                : "bg-transparent hover:bg-gray-900"
            }`}
            href="#"
          >
            Start Free Trial
          </a>
          <a
            className="block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-transparent hover:bg-gray-700 border border-blueGray-200 hover:border-blueGray-300 rounded transition-all"
            href="#"
          >
            Purchase
          </a>
        </div>
      </div>
    </div>
  );
};

export default Plan;
