"use client";

import { useTranslations } from "@/hooks/use-translations";

export function Footer() {
  const { t } = useTranslations();
  
  return (
    <footer className="border-t border-white/10 bg-white/5 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <p className="text-gray-400 text-sm">
            {t("footer.author")}
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:maxounyushko71@gmail.com"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {t("footer.email")}
            </a>
            <a
              href="https://t.me/MagistrTheOne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {t("footer.telegram")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
