import { Card, CardContent } from "@/components/ui/card";
import { ROICalculator } from "./roi-calculator";

export function ROI() {
  return (
    <section id="roi" className="py-20 px-4 border-t border-white/10 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/5 backdrop-blur-md border-white/10">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                8.4× ROI в Q4-Q1 2025-2026
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                при Enterprise-интеграции
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400 max-w-xl mx-auto">
                  Снижение стоимости инференса на 60% и ускорение time-to-value 
                  с 6 месяцев до 2 недель при внедрении Prometheus AGI
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
