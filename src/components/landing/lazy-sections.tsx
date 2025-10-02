import dynamic from 'next/dynamic';

// Ленивые импорты для компонентов ниже viewport
const LazyMetrics = dynamic(() => import('./metrics').then(mod => ({ default: mod.Metrics })), {
  loading: () => <div className="min-h-[400px] bg-black/50 animate-pulse" />
});

const LazyROI = dynamic(() => import('./roi').then(mod => ({ default: mod.ROI })), {
  loading: () => <div className="min-h-[400px] bg-black/50 animate-pulse" />
});

const LazyInvestorTools = dynamic(() => import('./investor-tools').then(mod => ({ default: mod.InvestorTools })), {
  loading: () => <div className="min-h-[400px] bg-black/50 animate-pulse" />
});

const LazyPerformanceCharts = dynamic(() => import('./performance-charts').then(mod => ({ default: mod.PerformanceCharts })), {
  loading: () => <div className="min-h-[400px] bg-black/50 animate-pulse" />
});

const LazyIntegrations = dynamic(() => import('./integrations').then(mod => ({ default: mod.Integrations })), {
  loading: () => <div className="min-h-[400px] bg-black/50 animate-pulse" />
});

const LazyProcess = dynamic(() => import('./process').then(mod => ({ default: mod.Process })), {
  loading: () => <div className="min-h-[400px] bg-black/50 animate-pulse" />
});

const LazyRAG = dynamic(() => import('./rag').then(mod => ({ default: mod.RAG })), {
  loading: () => <div className="min-h-[400px] bg-black/50 animate-pulse" />
});

const LazyModels = dynamic(() => import('./models').then(mod => ({ default: mod.Models })), {
  loading: () => <div className="min-h-[400px] bg-black/50 animate-pulse" />
});

const LazyWhyUs = dynamic(() => import('./why-us').then(mod => ({ default: mod.WhyUs })), {
  loading: () => <div className="min-h-[400px] bg-black/50 animate-pulse" />
});

const LazyCTA = dynamic(() => import('./cta').then(mod => ({ default: mod.CTA })), {
  loading: () => <div className="min-h-[400px] bg-black/50 animate-pulse" />
});

const LazyFooter = dynamic(() => import('./footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="min-h-[200px] bg-black/50 animate-pulse" />
});

export {
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
};
