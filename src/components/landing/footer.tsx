export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/5 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <p className="text-gray-400 text-sm">
            MagistrTheOne • 2025
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:maxounyushko71@gmail.com"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Email
            </a>
            <a
              href="https://t.me/MagistrTheOne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
