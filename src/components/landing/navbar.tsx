"use client";

import { useTranslations } from "@/hooks/use-translations";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Navbar() {
  const { t } = useTranslations();
  
  const navItems = [
    { label: t("nav.overview"), href: "#hero" },
    { label: t("nav.metrics"), href: "#metrics" },
    { label: t("nav.roi"), href: "#roi" },
    { label: t("nav.integrations"), href: "#integrations" },
    { label: t("nav.process"), href: "#process" },
    { label: t("nav.rag"), href: "#rag" },
    { label: t("nav.models"), href: "#models" },
    { label: t("nav.whyUs"), href: "#why-us" },
    { label: t("nav.contacts"), href: "#contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors whitespace-nowrap text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
