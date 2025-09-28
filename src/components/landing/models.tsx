import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ModelItem = {
  name: string
  size: string
  metrics: {
    p95: string
    throughput: string
    cost: string
  }
  expected: {
    vram: string
    context: string
    quant: string
  }
}

const models: ModelItem[] = [
  {
    name: "Reasoning-7B",
    size: "7B",
    metrics: { p95: "~0.9s", throughput: "≈50 ток/с", cost: "~$0.00017 / 1k" },
    expected: { vram: "8–12 GB", context: "8k", quant: "INT4 / FP8" },
  },
  {
    name: "Retrieval-3B",
    size: "3B",
    metrics: { p95: "~0.7s", throughput: "≈60 ток/с", cost: "~$0.00014 / 1k" },
    expected: { vram: "6–8 GB", context: "16k", quant: "INT4 / FP16" },
  },
  {
    name: "Planner-1.5B",
    size: "1.5B",
    metrics: { p95: "~0.6s", throughput: "≈65 ток/с", cost: "~$0.00012 / 1k" },
    expected: { vram: "4–6 GB", context: "8k", quant: "INT4" },
  },
  {
    name: "Critique-3B",
    size: "3B",
    metrics: { p95: "~0.8s", throughput: "≈58 ток/с", cost: "~$0.00015 / 1k" },
    expected: { vram: "6–8 GB", context: "8k", quant: "INT4 / FP8" },
  },
]

export function Models() {
  return (
    <section id="models" className="py-20 px-4 border-t border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Модельный стек
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((m) => (
            <Card key={m.name} className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-lg">
                  {m.name}
                </CardTitle>
                <div className="text-gray-400 text-sm">{m.size} параметров</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-white/90 text-sm">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">P95</span>
                    <span>{m.metrics.p95}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 py-2">
                    <span className="text-gray-400">Пропускная способность</span>
                    <span>{m.metrics.throughput}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Стоимость</span>
                    <span>{m.metrics.cost}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-sm">
                  <div className="text-gray-400 mb-2">Ожидаемые параметры</div>
                  <ul className="text-gray-300 space-y-1">
                    <li className="flex justify-between"><span>VRAM</span><span>{m.expected.vram}</span></li>
                    <li className="flex justify-between"><span>Контекст</span><span>{m.expected.context}</span></li>
                    <li className="flex justify-between"><span>Квантизация</span><span>{m.expected.quant}</span></li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


