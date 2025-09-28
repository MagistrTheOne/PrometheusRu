"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { comparisonData } from "@/lib/data";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// TCO/ROI Mini Calculator
function TCOCalculator() {
  const [investment, setInvestment] = useState(100000);
  const [economy, setEconomy] = useState(300000);
  const [years, setYears] = useState([3]);

  const totalEconomy = economy * years[0];
  const roi = ((totalEconomy - investment) / investment) * 100;
  const payback = investment / economy;
  const multiplier = totalEconomy / investment;

  return (
    <Card className="bg-white/5 backdrop-blur-md border-white/10">
      <CardHeader>
        <CardTitle className="text-white text-lg">TCO/ROI</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label className="text-white text-xs">Инвестиции, $</Label>
            <Input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="bg-white/10 border-white/20 text-white text-sm"
            />
          </div>
          <div>
            <Label className="text-white text-xs">Экономия/год, $</Label>
            <Input
              type="number"
              value={economy}
              onChange={(e) => setEconomy(Number(e.target.value))}
              className="bg-white/10 border-white/20 text-white text-sm"
            />
          </div>
        </div>
        <div>
          <Label className="text-white text-xs">Горизонт: {years[0]} лет</Label>
          <Slider value={years} onValueChange={setYears} max={5} min={1} step={1} />
        </div>
        <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-white/10">
          <div>
            <div className="text-lg font-bold text-white">{roi.toFixed(0)}%</div>
            <div className="text-xs text-gray-400">ROI</div>
          </div>
          <div>
            <div className="text-lg font-bold text-white">{payback.toFixed(1)}</div>
            <div className="text-xs text-gray-400">Окуп.</div>
          </div>
          <div>
            <div className="text-lg font-bold text-white">{multiplier.toFixed(1)}×</div>
            <div className="text-xs text-gray-400">Мульт.</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Capacity Planner
function CapacityPlanner() {
  const [concurrency, setConcurrency] = useState(100);
  const [regions, setRegions] = useState([2]);
  const [mode, setMode] = useState("cloud");

  const p95 = Math.max(0.6, 1.2 - 0.3 * Math.log10(concurrency) + (mode === "on-prem" ? 0.1 : 0));
  const nodes = Math.ceil(concurrency / 60);
  const opex = nodes * (mode === "cloud" ? 1200 : 800) * regions[0];

  return (
    <Card className="bg-white/5 backdrop-blur-md border-white/10">
      <CardHeader>
        <CardTitle className="text-white text-lg">Мощность</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label className="text-white text-xs">Конкурентность: {concurrency}</Label>
          <Slider value={[concurrency]} onValueChange={([v]) => setConcurrency(v)} max={500} min={1} step={10} />
        </div>
        <div>
          <Label className="text-white text-xs">Регионы: {regions[0]}</Label>
          <Slider value={regions} onValueChange={setRegions} max={3} min={1} step={1} />
        </div>
        <div>
          <Label className="text-white text-xs">Режим</Label>
          <Select value={mode} onValueChange={setMode}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cloud">Cloud</SelectItem>
              <SelectItem value="on-prem">On-Prem</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-white/10">
          <div>
            <div className="text-lg font-bold text-white">{p95.toFixed(1)}s</div>
            <div className="text-xs text-gray-400">P95</div>
          </div>
          <div>
            <div className="text-lg font-bold text-white">{nodes}</div>
            <div className="text-xs text-gray-400">Узлы</div>
          </div>
          <div>
            <div className="text-lg font-bold text-white">${(opex/1000).toFixed(0)}k</div>
            <div className="text-xs text-gray-400">OPEX/мес</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// SLA/SLO Configurator
function SLAConfigurator() {
  const [availability, setAvailability] = useState([99.5]);

  const redundancy = Math.ceil((availability[0] - 99) * 10);
  const uplift = Math.min(35, Math.max(5, (availability[0] - 99) * 20));

  return (
    <Card className="bg-white/5 backdrop-blur-md border-white/10">
      <CardHeader>
        <CardTitle className="text-white text-lg">SLA/SLO</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label className="text-white text-xs">Доступность: {availability[0]}%</Label>
          <Slider 
            value={availability} 
            onValueChange={setAvailability} 
            max={99.99} 
            min={99.0} 
            step={0.01} 
          />
        </div>
        <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-white/10">
          <div>
            <div className="text-lg font-bold text-white">{redundancy}×</div>
            <div className="text-xs text-gray-400">Резерв</div>
          </div>
          <div>
            <div className="text-lg font-bold text-white">+{uplift.toFixed(0)}%</div>
            <div className="text-xs text-gray-400">Удорожание</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Provider Benchmark Switcher
function ProviderBenchmark() {
  const [provider, setProvider] = useState("Prometheus AGI");

  const selectedProvider = comparisonData.find(p => p.provider === provider) || comparisonData[0];

  return (
    <Card className="bg-white/5 backdrop-blur-md border-white/10">
      <CardHeader>
        <CardTitle className="text-white text-lg">Бенчмарк</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label className="text-white text-xs">Провайдер</Label>
          <Select value={provider} onValueChange={setProvider}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {comparisonData.map((p) => (
                <SelectItem key={p.provider} value={p.provider}>
                  {p.provider}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-white/10">
          <div>
            <div className="text-lg font-bold text-white">{selectedProvider.p95}s</div>
            <div className="text-xs text-gray-400">P95</div>
          </div>
          <div>
            <div className="text-lg font-bold text-white">${selectedProvider.cost}</div>
            <div className="text-xs text-gray-400">$/1k токенов</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function InvestorTools() {
  const toolsRef = useRef<HTMLDivElement>(null);

  const exportToPDF = async () => {
    if (!toolsRef.current) return;

    try {
      const canvas = await html2canvas(toolsRef.current, {
        backgroundColor: '#000000',
        scale: 2,
        useCORS: true,
        allowTaint: true
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('prometheus-agi-investor-report.pdf');
    } catch (error) {
      console.error('Ошибка при создании PDF:', error);
    }
  };

  return (
    <section id="tools" className="py-20 px-4 border-t border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Интерактивные инструменты
          </h2>
          <Button 
            onClick={exportToPDF}
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white"
          >
            📄 Экспорт PDF
          </Button>
        </div>
        
        <div ref={toolsRef} className="grid md:grid-cols-2 gap-6">
          <TCOCalculator />
          <CapacityPlanner />
          <SLAConfigurator />
          <ProviderBenchmark />
        </div>
      </div>
    </section>
  );
}
