"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";

export function CTA() {
  const { t } = useTranslations();
  
  return (
    <section id="contact" className="py-20 px-4 border-t border-white/10 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t("cta.title")}
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {t("cta.subtitle")}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold"
            onClick={() => window.open('https://t.me/MagistrTheOne', '_blank')}
          >
            {t("cta.telegram")}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg"
            onClick={() => window.open('mailto:maxounyushko71@gmail.com', '_blank')}
          >
            {t("cta.email")}
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            {t("footer.author")}
          </p>
        </div>
      </div>
    </section>
  );
}
