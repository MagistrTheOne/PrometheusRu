"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ROICalculator } from "./roi-calculator";
import { useTranslations } from "@/hooks/use-translations";

export function ROI() {
  const { t } = useTranslations();
  
  return (
    <section id="roi" className="py-20 px-4 border-t border-white/10 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/5 backdrop-blur-md border-white/10">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {t("roi.title")}
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {t("roi.subtitle")}
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400 max-w-xl mx-auto">
                  {t("roi.description")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8">
          <ROICalculator />
        </div>
      </div>
    </section>
  );
}
