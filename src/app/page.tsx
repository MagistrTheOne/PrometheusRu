import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Metrics } from "@/components/landing/metrics";
import { ROI } from "@/components/landing/roi";
import { PerformanceCharts } from "@/components/landing/performance-charts";
import { Integrations } from "@/components/landing/integrations";
import { Process } from "@/components/landing/process";
import { RAG } from "@/components/landing/rag";
import { WhyUs } from "@/components/landing/why-us";
import { Models } from "@/components/landing/models";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Metrics />
      <ROI />
      <PerformanceCharts />
      <Integrations />
      <Process />
      <RAG />
      <Models />
      <WhyUs />
      <CTA />
      <Footer />
    </div>
  );
}
