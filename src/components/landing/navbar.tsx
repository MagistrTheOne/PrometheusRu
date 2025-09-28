export function Navbar() {
  const navItems = [
    { label: "Обзор", href: "#hero" },
    { label: "Метрики", href: "#metrics" },
    { label: "ROI", href: "#roi" },
    { label: "Интеграции", href: "#integrations" },
    { label: "Процесс", href: "#process" },
    { label: "RAG", href: "#rag" },
    { label: "Модели", href: "#models" },
    { label: "Почему мы", href: "#why-us" },
    { label: "Контакты", href: "#contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-center">
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
        </div>
      </div>
    </nav>
  );
}
