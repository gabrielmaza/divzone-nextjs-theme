export enum SelectedPageEnum {
  Home = "home",
  Benefits = "benefits",
  Services = "services",
  ContactUs = "contactus"
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