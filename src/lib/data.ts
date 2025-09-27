// Реалистичные демо-данные для графиков производительности

export const performanceData = [
  { load: 10, p95: 0.7, throughput: 58 },
  { load: 20, p95: 0.8, throughput: 56 },
  { load: 30, p95: 0.9, throughput: 54 },
  { load: 40, p95: 1.0, throughput: 52 },
  { load: 50, p95: 1.1, throughput: 50 },
  { load: 60, p95: 1.15, throughput: 48 },
  { load: 70, p95: 1.2, throughput: 46 },
  { load: 80, p95: 1.25, throughput: 44 },
  { load: 90, p95: 1.3, throughput: 42 },
  { load: 100, p95: 1.35, throughput: 40 }
];

export const costData = [
  { tokens: 1000, cost: 0.00016 },
  { tokens: 5000, cost: 0.00017 },
  { tokens: 10000, cost: 0.00018 },
  { tokens: 50000, cost: 0.00019 },
  { tokens: 100000, cost: 0.00020 },
  { tokens: 500000, cost: 0.00021 },
  { tokens: 1000000, cost: 0.00022 }
];

export const comparisonData = [
  { provider: "Prometheus AGI", p95: 1.2, cost: 0.00017 },
  { provider: "OpenAI GPT-4", p95: 2.5, cost: 0.00030 },
  { provider: "Claude 3", p95: 2.8, cost: 0.00025 },
  { provider: "Gemini Pro", p95: 3.2, cost: 0.00020 }
];
