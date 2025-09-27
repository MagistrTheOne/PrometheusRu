"use client";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Готовы начать?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Свяжитесь с нами для получения персональной демонстрации и технических материалов
        </p>
        
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
            Написать на email
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            Автор проекта: MagistrTheOne • 2025
          </p>
        </div>
      </div>
    </section>
  );
}
