import { defaultCombinators, NameLabelPair } from "react-querybuilder";
import { Language } from "./types";

const combinators: Record<Language, NameLabelPair[]> = {
  en: defaultCombinators,
  tr: [
    { name: "and", label: "VE" },
    { name: "or", label: "VEYA" },
  ],
};

export default combinators;
