import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import {
  LazyMetrics,
  LazyROI,
  LazyInvestorTools,
  LazyPerformanceCharts,
  LazyIntegrations,
  LazyProcess,
  LazyRAG,
  LazyModels,
  LazyWhyUs,
  LazyCTA,
  LazyFooter,
} from "@/components/landing/lazy-sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <LazyMetrics />
      <LazyROI />
      <LazyInvestorTools />
      <LazyPerformanceCharts />
      <LazyIntegrations />
      <LazyProcess />
      <LazyRAG />
      <LazyModels />
      <LazyWhyUs />
      <LazyCTA />
      <LazyFooter />
    </div>
  );
}
