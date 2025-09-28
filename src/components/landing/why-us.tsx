import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const advantages = [
  {
    title: "Независимость от вендоров",
    description: "Полный контроль над инфраструктурой и данными без привязки к внешним API"
  },
  {
    title: "Детерминированный деплой",
    description: "Предсказуемые результаты и стабильная работа в любой среде"
  },
  {
    title: "Низкая стоимость инференса",
    description: "Оптимизированная экономика с минимальными затратами на обработку"
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 px-4 border-t border-white/10 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Почему мы
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
