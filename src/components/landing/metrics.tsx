"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "@/hooks/use-translations";

export function Metrics() {
  const { t } = useTranslations();
  
  const metrics = [
    {
      title: t("metrics.p95"),
      value: t("metrics.p95Value"),
      description: "Guaranteed performance"
    },
    {
      title: t("metrics.throughput"),
      value: t("metrics.throughputValue"),
      description: "Stable request processing"
    },
    {
      title: t("metrics.cost"),
      value: t("metrics.costValue"),
      description: "Optimized economics"
    }
  ];

  return (
    <section id="metrics" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {t("metrics.title")}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl">
                  {metric.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-3xl font-bold text-white">
                  {metric.value}
                </div>
                <p className="text-gray-300 text-sm">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
