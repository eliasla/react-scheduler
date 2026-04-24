import enDayjsTranslations from "dayjs/locale/en";
import plDayjsTranslations from "dayjs/locale/pl";
import deDayjsTranslations from "dayjs/locale/de";
import ltDayjsTranslations from "dayjs/locale/lt";
import fiDayjsTranslations from "dayjs/locale/fi";
import { en, pl, de, lt, fi } from "@/locales";
import { LocaleType } from "./types";

export const localesData: LocaleType[] = [
  {
    id: "en",
    lang: en,
    translateCode: "en-GB",
    dayjsTranslations: enDayjsTranslations
  },
  {
    id: "fi",
    lang: fi,
    translateCode: "fi-FI",
    dayjsTranslations: fiDayjsTranslations
  },
  {
    id: "pl",
    lang: pl,
    translateCode: "pl-PL",
    dayjsTranslations: plDayjsTranslations
  },
  {
    id: "lt",
    lang: lt,
    translateCode: "lt-LT",
    dayjsTranslations: ltDayjsTranslations
  },
  {
    id: "de",
    lang: de,
    translateCode: "de-DE",
    dayjsTranslations: deDayjsTranslations
  }
];

class Locales {
  public locales: LocaleType[] = localesData;

  getLocales() {
    return this.locales;
  }

  addLocales(locale: LocaleType) {
    this.locales.push(locale);
  }
}

const locales = new Locales();

export { locales };
