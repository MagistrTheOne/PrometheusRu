import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const processSteps = [
  {
    title: "Получение API ключа",
    content: "Зарегистрируйтесь в системе и получите персональный API ключ. Процесс занимает менее 5 минут."
  },
  {
    title: "Настройка интеграции", 
    content: "Подключите Prometheus AGI к вашей системе через REST API или готовые SDK для популярных языков программирования."
  },
  {
    title: "Запуск и мониторинг",
    content: "Запустите агентов и отслеживайте их работу через веб-интерфейс. Получайте уведомления о важных событиях."
  }
];

export function Process() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Процесс интеграции
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {processSteps.map((step, index) => (
            <AccordionItem 
              key={index} 
              value={`step-${index}`}
              className="bg-white/5 backdrop-blur-md border-white/10 rounded-lg"
            >
              <AccordionTrigger className="text-white hover:text-gray-300 px-6 py-4">
                <span className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  {step.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                {step.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
