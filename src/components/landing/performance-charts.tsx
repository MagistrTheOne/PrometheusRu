"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts";
import { performanceData, costData, comparisonData } from "@/lib/data";

export function PerformanceCharts() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Анализ производительности
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* График p95 vs нагрузка */}
          <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Время отклика vs Нагрузка</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  load: { label: "Нагрузка (RPS)" },
                  p95: { label: "P95 (сек)" }
                }}
                className="h-[300px]"
              >
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="load" 
                    stroke="rgba(255,255,255,0.6)"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.6)"
                    fontSize={12}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="p95" 
                    stroke="#ffffff" 
                    strokeWidth={2}
                    dot={{ fill: "#ffffff", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* График стоимости */}
          <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Стоимость vs Объём</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  tokens: { label: "Токены (тыс.)" },
                  cost: { label: "Стоимость ($)" }
                }}
                className="h-[300px]"
              >
                <BarChart data={costData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="tokens" 
                    stroke="rgba(255,255,255,0.6)"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.6)"
                    fontSize={12}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="cost" fill="rgba(255,255,255,0.8)" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Таблица сравнения */}
        <Card className="mt-8 bg-white/5 backdrop-blur-md border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Сравнение с конкурентами</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white">Провайдер</th>
                    <th className="text-left py-3 px-4 text-white">P95 (сек)</th>
                    <th className="text-left py-3 px-4 text-white">Стоимость ($/1k токенов)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className="border-b border-white/5">
                      <td className="py-3 px-4 text-gray-300">{item.provider}</td>
                      <td className="py-3 px-4 text-gray-300">{item.p95}</td>
                      <td className="py-3 px-4 text-gray-300">{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
