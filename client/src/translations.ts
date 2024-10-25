import { defaultTranslations, Translations } from "react-querybuilder";
import { Language } from "./types";

const translations: Record<Language, Partial<Translations>> = {
  en: defaultTranslations,
  tr: {
    fields: {
      title: "Alanlar",
    },
    operators: {
      title: "Operatörler",
    },
    value: {
      title: "Değer",
    },
    removeRule: {
      label: "x",
      title: "Kuralı kaldır",
    },
    removeGroup: {
      label: "x",
      title: "Grubu kaldır",
    },
    addRule: {
      label: "+ Kural",
      title: "Kural ekle",
    },
    addGroup: {
      label: "+ Grup",
      title: "Grup ekle",
    },
    combinators: {
      title: "Bağlaçlar",
    },
    notToggle: {
      title: "Bu grubu ters çevir",
    },
  },
};

export default translations;
