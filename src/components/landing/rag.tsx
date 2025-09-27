import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ragFeatures = [
  {
    title: "Умный поиск по документам",
    description: "ИИ-агенты находят нужную информацию в корпоративных базах знаний за секунды"
  },
  {
    title: "Автоматическая категоризация",
    description: "Система автоматически классифицирует входящие запросы и направляет к нужным специалистам"
  },
  {
    title: "Генерация отчётов",
    description: "Создание аналитических отчётов на основе данных из различных источников"
  }
];

export function RAG() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Retrieval-Augmented Generation (RAG)
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ragFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-white/5 backdrop-blur-md border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-xl text-center">
              Как это работает
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold mx-auto">
                  1
                </div>
                <h3 className="text-white font-semibold">Загрузка данных</h3>
                <p className="text-gray-300 text-sm">
                  Подключение к вашим источникам данных и создание векторных индексов
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold mx-auto">
                  2
                </div>
                <h3 className="text-white font-semibold">Обработка запросов</h3>
                <p className="text-gray-300 text-sm">
                  Поиск релевантной информации и генерация ответов на основе контекста
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold mx-auto">
                  3
                </div>
                <h3 className="text-white font-semibold">Доставка результатов</h3>
                <p className="text-gray-300 text-sm">
                  Предоставление точных и актуальных ответов с указанием источников
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
