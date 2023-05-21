export enum SelectedPageEnum {
  Home = "home",
  Benefits = "benefits",
  Services = "services",
  ContactUs = "contactus",
  Pricing = "pricing",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ServiceType {
  name: string;
  description?: string;
}

export interface PlanType {
  name: string;
  description?: string;
  price: string;
  items: [
    { name: string },
    { name: string },
    { name: string },
    { name: string }
  ];
  recommended: boolean;
}

export interface FaqType {
  id: number;
  question: string;
  answer: string;
}
