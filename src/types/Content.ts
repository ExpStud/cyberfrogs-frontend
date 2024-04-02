import { ComponentType } from "react";

export type SocialIcon = {
  name: string;
  url: string;
  component: ComponentType<any>;
};