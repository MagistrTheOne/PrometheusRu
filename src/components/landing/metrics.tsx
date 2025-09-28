import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Metrics() {
  const metrics = [
    {
      title: "Время отклика (p95)",
      value: "< 1.2s",
      description: "Гарантированная производительность"
    },
    {
      title: "Пропускная способность",
      value: "45-60 токенов/с",
      description: "Стабильная обработка запросов"
    },
    {
      title: "Стоимость обработки",
      value: "~$0.00017 / 1k токенов",
      description: "Оптимизированная экономика"
    }
  ];

  return (
    <section id="metrics" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Ключевые метрики производительности
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
