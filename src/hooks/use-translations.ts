"use client";

import { useState, useEffect } from "react";
import { translations, type Locale, type TranslationKeys } from "@/lib/translations";

export function useTranslations() {
  const [locale, setLocale] = useState<Locale>("ru");

  useEffect(() => {
    // Сохраняем выбранный язык в localStorage
    const savedLocale = localStorage.getItem("prometheus-locale") as Locale;
    if (savedLocale && (savedLocale === "ru" || savedLocale === "en")) {
      setLocale(savedLocale);
    }
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("prometheus-locale", newLocale);
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split(".");
    let value: any = translations[locale];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (typeof value !== "string") return value;

    // Заменяем параметры в строке
    if (params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return String(params[paramKey] || match);
      });
    }
    
    return value;
  };

  return {
    locale,
    changeLocale,
    t
  };
}
