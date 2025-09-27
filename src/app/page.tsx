import { Hero } from "@/components/landing/hero";
import { Metrics } from "@/components/landing/metrics";
import { PerformanceCharts } from "@/components/landing/performance-charts";
import { Integrations } from "@/components/landing/integrations";
import { Process } from "@/components/landing/process";
import { RAG } from "@/components/landing/rag";
import { CTA } from "@/components/landing/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Metrics />
      <PerformanceCharts />
      <Integrations />
      <Process />
      <RAG />
      <CTA />
    </div>
  );
}
