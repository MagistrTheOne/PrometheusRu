"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function ROICalculator() {
  const [investment, setInvestment] = useState(100000);
  const [economyPerYear, setEconomyPerYear] = useState(300000);
  const [years, setYears] = useState([3]);

  const totalEconomy = economyPerYear * years[0];
  const roi = ((totalEconomy - investment) / investment) * 100;
  const paybackYears = investment / economyPerYear;
  const multiplier = totalEconomy / investment;

  return (
    <Card className="bg-white/5 backdrop-blur-md border-white/10">
      <CardHeader>
        <CardTitle className="text-white text-lg">Калькулятор ROI</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="investment" className="text-white">Инвестиции, $</Label>
            <Input
              id="investment"
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="economy" className="text-white">Ежегодная экономия, $</Label>
            <Input
              id="economy"
              type="number"
              value={economyPerYear}
              onChange={(e) => setEconomyPerYear(Number(e.target.value))}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="text-white">Горизонт: {years[0]} лет</Label>
          <Slider
            value={years}
            onValueChange={setYears}
            max={5}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              {roi.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-400">ROI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              {paybackYears.toFixed(1)}
            </div>
            <div className="text-sm text-gray-400">Окупаемость, лет</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              {multiplier.toFixed(1)}×
            </div>
            <div className="text-sm text-gray-400">Мультипликатор</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
