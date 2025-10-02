import { getCLS, getFCP, getFID, getLCP, getTTFB, Metric } from 'web-vitals';

export function reportWebVitals(metric: Metric) {
  // Логируем метрики в консоль для разработки
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metric);
  }

  // Отправляем метрики в аналитику (если настроена)
  // Пример для Google Analytics:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', metric.name, {
  //     event_category: 'Web Vitals',
  //     event_label: metric.id,
  //     value: Math.round(metric.value),
  //     non_interaction: true,
  //   });
  // }

  // Отправляем метрики в ваш endpoint мониторинга
  if (process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: metric.name,
        value: metric.value,
        id: metric.id,
        timestamp: Date.now(),
        url: window.location.href,
      }),
    }).catch(console.error);
  }
}

// Функция инициализации мониторинга
export function initWebVitals() {
  getCLS(reportWebVitals);
  getFCP(reportWebVitals);
  getFID(reportWebVitals);
  getLCP(reportWebVitals);
  getTTFB(reportWebVitals);
}
