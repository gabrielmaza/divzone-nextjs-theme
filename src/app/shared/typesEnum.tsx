export enum SelectedPageEnum {
  Home = "home",
  Benefits = "benefits",
  Services = "services",
  ContactUs = "contactus",
  Plans = "plans"
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
  items: string[];
  recommended: boolean;
}
