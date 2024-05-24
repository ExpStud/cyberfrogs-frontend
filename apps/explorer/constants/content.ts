import { ExplorerFilter } from "@explorer-types";

export const filters: ExplorerFilter[] = [
  { name: "upgraded art only", switch: true },
  { name: "Alpha", dropdown: ["Alpha 1", "Alpha 2", "Alpha 3"] },
  {
    name: "Background",
    dropdown: ["Background 1", "Background 2", "Background 3"],
  },
  { name: "Beta", dropdown: ["Beta 1", "Beta 2", "Beta 3"] },
  {
    name: "Eyes",
    dropdown: [
      "Eyes 1",
      "Eyes 2",
      "Eyes 3",
      "Eyes 4",
      "Eyes 5",
      "Eyes 6",
      "Eyes 7",
      "Eyes 8",
      "Eyes 9",
    ],
  },
  { name: "Faction", dropdown: ["Faction 1", "Faction 2", "Faction 3"] },
  {
    name: "Headware",
    dropdown: [
      "Headware 1",
      "Headware 2",
      "Headware 3",
      "Headware 4",
      "Headware 5",
      "Headware 6",
    ],
  },
  { name: "Item", dropdown: ["Item 1", "Item 2", "Item 3"] },
  { name: "Mouth", dropdown: ["Mouth 1", "Mouth 2", "Mouth 3"] },
  { name: "Outfit", dropdown: ["Outfit 1", "Outfit 2", "Outfit 3"] },
  { name: "Skin", dropdown: ["Skin 1", "Skin 2", "Skin 3"] },
];