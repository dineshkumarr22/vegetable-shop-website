"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"

const vegetables = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 4.99,
    unit: "per lb",
    image: "/fresh-red-tomatoes.jpg",
    category: "Fruits",
    organic: true,
  },
  {
    id: 2,
    name: "Organic Carrots",
    price: 3.49,
    unit: "per bunch",
    image: "/organic-carrots-with-green-tops.jpg",
    category: "Root Vegetables",
    organic: true,
  },
  {
    id: 3,
    name: "Green Broccoli",
    price: 5.99,
    unit: "per head",
    image: "/fresh-green-broccoli-head.jpg",
    category: "Greens",
    organic: true,
  },
  {
    id: 4,
    name: "Bell Peppers",
    price: 6.99,
    unit: "per pack",
    image: "/colorful-bell-peppers-red-yellow-green.jpg",
    category: "Peppers",
    organic: false,
  },
  {
    id: 5,
    name: "Fresh Spinach",
    price: 2.99,
    unit: "per bag",
    image: "/fresh-green-spinach-leaves.jpg",
    category: "Greens",
    organic: true,
  },
  {
    id: 6,
    name: "Red Onions",
    price: 2.49,
    unit: "per lb",
    image: "/red-onions.jpg",
    category: "Root Vegetables",
    organic: false,
  },
]

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Fruits", "Greens", "Root Vegetables", "Peppers"]

  const filteredVegetables =
    selectedCategory === "All" ? vegetables : vegetables.filter((veg) => veg.category === selectedCategory)

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Our Fresh Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our wide selection of farm-fresh, organic vegetables. All sourced from local farms and delivered
            fresh to your door.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVegetables.map((vegetable) => (
            <Card key={vegetable.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img
                    src={vegetable.image || "/placeholder.svg"}
                    alt={vegetable.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {vegetable.organic && <Badge className="absolute top-3 left-3 bg-secondary">Organic</Badge>}
                </div>

                <div className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{vegetable.name}</h3>
                    <p className="text-sm text-muted-foreground">{vegetable.category}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">${vegetable.price}</span>
                        <span className="text-sm text-muted-foreground ml-1">{vegetable.unit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full" size="lg">
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
