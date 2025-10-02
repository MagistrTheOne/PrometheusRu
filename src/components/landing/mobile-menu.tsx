"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

export function MobileMenu() {
  const { t } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

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

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Плавная прокрутка к секции
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10"
          aria-label="Открыть меню"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] bg-black/95 backdrop-blur-md border-l border-white/10"
      >
        <div className="flex flex-col space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Меню</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/10"
              aria-label="Закрыть меню"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-white/80 hover:text-white transition-colors py-2 px-3 rounded-md hover:bg-white/5 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10">
            <Button
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10"
              onClick={() => window.open('https://t.me/MagistrTheOne', '_blank')}
            >
              {t("hero.cta")}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
