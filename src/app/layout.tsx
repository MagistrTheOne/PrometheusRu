import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Prometheus AGI",
  description: "Платформа для управления интеллектуальными агентами и решениями на основе LLM",
  keywords: "прометей, agi, llm, искусственный интеллект, нейросети, автоматизация",
  authors: [{ name: "MagistrTheOne" }],
  creator: "MagistrTheOne",
  publisher: "Prometheus AGI",
  openGraph: {
    title: "Prometheus AGI - Платформа для управления ИИ-агентами",
    description: "Детерминированный деплой ИИ-агентов с предсказуемыми результатами",
    url: "https://prometheus-agi.ru",
    siteName: "Prometheus AGI",
    images: [
      {
        url: "/logo-prometheus.svg",
        width: 800,
        height: 600,
        alt: "Prometheus AGI Logo",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prometheus AGI - Платформа для управления ИИ-агентами",
    description: "Детерминированный деплой ИИ-агентов с предсказуемыми результатами",
    images: ["/logo-prometheus.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                import('/src/lib/web-vitals.js').then(({ initWebVitals }) => {
                  initWebVitals();
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
