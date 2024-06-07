import { ComponentType } from "react";

export type SocialIcon = {
  name: string;
  url: string;
  component: ComponentType<any>;
};

export type Navigation = {
  name: string;
  href?: string;
  redirect?: boolean;
  component?: ComponentType<any>;
};

export type NavigationData = Navigation & {
  dropdown?: Navigation[];
};


export type HeadingType = {
  path: string;
  name: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};