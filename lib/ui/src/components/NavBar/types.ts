import { ColorKeys } from "../../../index";

export type CategoryNavItem = {
  label: string;
  items: {
    title: string;
    description: string;
    href: string;
    image: string;
  }[];
  color: ColorKeys;
};

export type SimpleNavItem = {
  label: string;
  href: string;
};

export type NavItems = (CategoryNavItem | SimpleNavItem)[];
