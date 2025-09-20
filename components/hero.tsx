import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Fresh <span className="text-primary">Organic</span> Vegetables
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Farm-fresh vegetables delivered straight to your door. Locally sourced, organically grown, and always
                fresh.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Learn More
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl mb-2">🌱</div>
                <p className="text-sm font-medium">100% Organic</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🚚</div>
                <p className="text-sm font-medium">Free Delivery</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⭐</div>
                <p className="text-sm font-medium">Premium Quality</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-card">
              <img
                src="/fresh-organic-vegetables-in-a-wooden-basket-on-a-f.jpg"
                alt="Fresh organic vegetables"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
