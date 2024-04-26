import { ComponentType } from "react";

export type SocialIcon = {
  name: string;
  url: string;
  component: ComponentType<any>;
};

export type Navigation = {
  name: string;
  href?: string;
  connectWallet?: boolean
};

export type NavigationData = Navigation & {
  dropdown?: Navigation[];
};
