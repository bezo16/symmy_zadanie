"use client"

import { filterOptions } from "@/hooks/useProducts"
import { useState } from "react"

import ProductsList from "@/components/lists/ProductsList"
import ProductsFilters from "@/components/lists/ProductsFilters"

const ProductsPage = () => {
  const [filters, setFilters] = useState<filterOptions>({ limit: 15, page: 1, category: "all", sort: "none" })

  return (
    <div className="container mx-auto py-10">
      <header>
        <h1 className="text-3xl font-bold mb-8">Produkty</h1>
        <ProductsFilters filters={filters} setFilters={setFilters} />
      </header>
      <main>
        <ProductsList filters={filters} setFilters={setFilters} />
      </main>
    </div>
  )
}

export default ProductsPage
