import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const integrations = [
  {
    name: "1C",
    icon: "/integrations/1c.svg",
    description: "Интеграция с системами 1С для автоматизации бизнес-процессов"
  },
  {
    name: "Yandex 360",
    icon: "/integrations/yandex360.svg", 
    description: "Подключение к экосистеме Яндекса для корпоративных решений"
  },
  {
    name: "Bitrix24",
    icon: "/integrations/bitrix24.svg",
    description: "CRM и управление проектами с помощью ИИ-агентов"
  },
  {
    name: "VK WorkSpace",
    icon: "/integrations/vk-workspace.svg",
    description: "Корпоративная коммуникация и автоматизация задач"
  }
];

export function Integrations() {
  return (
    <section id="integrations" className="py-20 px-4 border-t border-white/10 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Интеграции с популярными платформами
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-colors">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src={integration.icon}
                    alt={integration.name}
                    width={48}
                    height={48}
                    sizes="48px"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="text-white text-lg">
                  {integration.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm text-center">
                  {integration.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg mb-6">
            Простая интеграция за 3 простых шага
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold">1</div>
              <span className="text-white">API ключ</span>
            </div>
            <div className="hidden md:block w-8 h-px bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold">2</div>
              <span className="text-white">Настройка</span>
            </div>
            <div className="hidden md:block w-8 h-px bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold">3</div>
              <span className="text-white">Запуск</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
