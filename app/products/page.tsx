"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import useProducts, { filterOptions } from "@/hooks/useProducts"
import { useState } from "react"

const ProductsPage = () => {
  const [filters, setFilters] = useState<filterOptions>({ limit: 15, page: 1 })
  const { data: productsData } = useProducts(filters)

  if (!productsData) {
    return <div className="container mx-auto py-10">Načítavanie produktov...</div>
  }

  if (productsData.products.length === 0) {
    return <div className="container mx-auto py-10">Žiadne produkty na zobrazenie.</div>
  }

  return (
    <div className="container mx-auto py-10">
      <header>
        <h1 className="text-3xl font-bold mb-8">Produkty</h1>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productsData.products.map(product => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/products/${product.id}`} className="w-full">
                <Button size="lg" variant="default">Zobraziť detail</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </main>
      <footer className="mt-10">
        <div className="flex justify-between items-center">
          <Button
            disabled={filters.page <= 1}
            onClick={() => setFilters(prev => ({ ...prev, page: prev.page - 1 }))}
          >
            Predchádzajúca
          </Button>
          <span>
            Strana
            {" "}
            {filters.page}
          </span>
          <Button
            disabled={productsData.products.length < filters.limit}
            onClick={() => setFilters(prev => ({ ...prev, page: prev.page + 1 }))}
          >
            Ďalšia
          </Button>
        </div>
      </footer>
    </div>
  )
}

export default ProductsPage
