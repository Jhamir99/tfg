import {
  IoPhonePortraitOutline,
  IoLaptopOutline,
  IoDesktopOutline,
  IoWatchOutline,
} from "react-icons/io5";

import { t } from "i18next";

export const COLORS = {
  primary: "#52796F",
  secondary: "#2F3E46",
  accent: "#73E2A7",
};

export const collpaseSize = "sm";

export const ICON_SIZE = "70px";

export const devices = [
  {
    name: "Smartphone",
    icon: <IoPhonePortraitOutline size={ICON_SIZE} />,
  },

  {
    name: "Laptop",title: "Laptop",
    icon: <IoLaptopOutline size={ICON_SIZE} />,
  },

  {
    name: "Desktop PC",title: "Desktop PC",
    icon: <IoDesktopOutline size={ICON_SIZE} />,
  },

  {
    name: "Wearable", title: "Wearable",
    icon: <IoWatchOutline size={ICON_SIZE} />,
  },
];

const co2Info = "Global-warming potential, abbreviated as GWP, is a term used to describe the relative potency, molecule for molecule, of a greenhouse gas, taking account of how long it remains active in the atmosphere. The global-warming potentials (GWPs) currently used are those calculated over 100 years. Carbon dioxide is taken as the gas of reference and given a 100-year GWP of 1.";
//https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Glossary:Global-warming_potential_(GWP)

//RESULT VALUES
export const resultValuesSmartphone = [
  {
    //Production
    name: "co2",
    title: "Global Warming Potential",
    variant: "secondary",
    info: t("co2_info"),
    value: 57,
    unit: "kg CO2eq",
  },
  {
    name: "water",
    title: "Water",
    variant: "info",
    info: t("water_info"),
    value: 50,
    unit: "m³",
  },
  {
    name: "adp",
    title: "Abiotic Depeletion Potential",
    variant: "danger",
    info: t("adp_info"),
    value: 2,
    unit: "g",
  },

  //Use
  {
    name: "co2Use",
    title: "Carbon dioxide",
    variant: "secondary",
    info: t("co2_info"),
    value: 8.6,
    unit: "kg CO2eq",
  },
  {
    name: "adpUse",
    title: "Abiotic Depeletion Potential",
    variant: "danger",
    info: t("adpUse_info"),
    value: 0.5,
    unit: "g",
  },
];

export const resultValuesDesktopPC = [
  {
    //Production
    name: "co2",
    title: "Carbon dioxide",
    variant: "secondary",
    info: t("co2_info"),
    value: 154,
    unit: "kg CO2eq",
  },
  {
    name: "adp",
    title: "Abiotic Depeletion Potential",
    variant: "danger",
    info: t("adp_info"),
    value: 20,
    unit: "g",
  },
  {
    name: "ced",
    title: "Cumulative Energy Demand",
    variant: "warning",
    info: t("ced_info"),
    value: 2288,
    unit: "MJ",
  },
  {
    name: "water",
    title: "Water",
    variant: "info",
    info: t("water_info"),
    value: 130,
    unit: "m³",
  },

  //Use
  {
    name: "co2Use",
    title: "Carbon dioxide",
    variant: "secondary",
    info: t("co2_info"),
    value: 1025,
    unit: "kg CO2eq",
  },
  {
    name: "adpUse",
    title: "Abiotic Depeletion Potential",
    variant: "danger",
    info: t("adpUse_info"),
    value: 0.18,
    unit: "g",
  },
  {
    name: "ced",
    title: "Cumulative Energy Demand",
    variant: "warning",
    info: t("ced_info"),
    value: 23834,
    unit: "MJ",
  },
];

export const resultValuesLaptop = [
  {
    //Production
    name: "co2",
    title: "Carbon dioxide",
    variant: "secondary",
    info: t("co2_info"),
    value: 154,
    unit: "kg CO2eq",
  },
  {
    name: "adp",
    title: "Abiotic Depeletion Potential",
    variant: "danger",
    info: t("adp_info"),
    value: 20,
    unit: "g",
  },
  {
    name: "ced",
    title: "Cumulative Energy Demand",
    variant: "warning",
    info: t("ced_info"),
    value: 2288,
    unit: "MJ",
  },
  {
    name: "water",
    title: "Water",
    variant: "info",
    info: t("water_info"),
    value: 200,
    unit: "m³",
  },

  //Use
  {
    name: "co2Use",
    title: "Carbon dioxide",
    variant: "secondary",
    info: t("co2_info"),
    value: 1025,
    unit: "kg CO2eq",
  },
  {
    name: "adpUse",
    title: "Abiotic Depeletion Potential",
    variant: "danger",
    info: t("adpUse_info"),
    value: 0.18,
    unit: "g",
  },
  {
    name: "ced",
    title: "Cumulative Energy Demand",
    variant: "warning",
    info: t("ced_info"),
    value: 23834,
    unit: "MJ",
  },
];

export const resultValuesWearable = [
  {
    //Production
    name: "co2",
    title: "Carbon dioxide",
    variant: "secondary",
    info: t("co2_info"),
    value: 57/2,
    unit: "kg CO2eq",
  },
  {
    name: "adp",
    title: "Abiotic Depeletion Potential",
    variant: "danger",
    info: t("adp_info"),
    value: 2/2,
    unit: "g",
  },

  //Use
  {
    name: "co2Use",
    title: "Carbon dioxide",
    variant: "secondary",
    info: t("co2_info"),
    value: 8.6/2,
    unit: "kg CO2eq",
  },
  {
    name: "adpUse",
    title: "Abiotic Depeletion Potential",
    variant: "danger",
    info: t("adpUse_info"),
    value: 0.5/2,
    unit: "g",
  },
];
