"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "@/hooks/use-translations";

export function WhyUs() {
  const { t } = useTranslations();
  
  const advantages = [
    {
      title: t("whyUs.independence.title"),
      description: t("whyUs.independence.description")
    },
    {
      title: t("whyUs.deployment.title"),
      description: t("whyUs.deployment.description")
    },
    {
      title: t("whyUs.cost.title"),
      description: t("whyUs.cost.description")
    }
  ];

  return (
    <section id="why-us" className="py-20 px-4 border-t border-white/10 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {t("whyUs.title")}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-lg">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-sm">
                  {advantage.description}
                </p>
                {index === 0 && (
                  <div className="mt-4 text-gray-300 text-sm">
                    <span className="text-white font-semibold">2 недели</span> time-to-value вместо <span className="text-white font-semibold">6 месяцев</span>
                  </div>
                )}
                {index === 1 && (
                  <div className="mt-4 text-gray-300 text-sm">
                    <span className="text-white font-semibold">Предсказуемость</span> релизов и консистентные окружения
                  </div>
                )}
                {index === 2 && (
                  <div className="mt-4 text-gray-300 text-sm">
                    <span className="text-white font-semibold">×3 дешевле</span> инференс по сравнению с аналогами
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
