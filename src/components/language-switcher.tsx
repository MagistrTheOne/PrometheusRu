"use client";

import { useTranslations } from "@/hooks/use-translations";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { locale, changeLocale } = useTranslations();

  return (
    <div className="flex gap-2">
      <Button
        variant={locale === "ru" ? "default" : "outline"}
        size="sm"
        onClick={() => changeLocale("ru")}
        className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
      >
        RU
      </Button>
      <Button
        variant={locale === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => changeLocale("en")}
        className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
      >
        EN
      </Button>
    </div>
  );
}
