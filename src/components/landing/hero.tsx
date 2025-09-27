"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Логотип */}
        <div className="flex justify-center">
          <Image
            src="/logo-prometheus.svg"
            alt="Prometheus AGI"
            width={80}
            height={80}
            className="mb-6"
          />
        </div>
        
        {/* Название и описание */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Prometheus AGI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Платформа для управления интеллектуальными агентами и решениями на основе LLM
          </p>
        </div>
        
        {/* CTA кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold"
            onClick={() => window.open('https://t.me/MagistrTheOne', '_blank')}
          >
            Связаться в Telegram
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg"
            onClick={() => window.open('mailto:maxounyushko71@gmail.com', '_blank')}
          >
            Получить материалы
          </Button>
        </div>
      </div>
    </section>
  );
}
