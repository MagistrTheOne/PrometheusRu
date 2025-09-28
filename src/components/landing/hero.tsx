"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";

export function Hero() {
  const { t } = useTranslations();
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-16 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Логотип */}
        <div className="flex justify-center">
          <Image
            src="/logo-prometheus.svg"
            alt="Prometheus AGI"
            width={80}
            height={80}
            className="mb-6"
          />
        </div>
        
        {/* Название и описание */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </div>
        
        {/* CTA кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold"
            onClick={() => window.open('https://t.me/MagistrTheOne', '_blank')}
          >
            {t("hero.cta")}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg"
            onClick={() => window.open('mailto:maxounyushko71@gmail.com', '_blank')}
          >
            {t("hero.download")}
          </Button>
        </div>
      </div>
    </section>
  );
}
