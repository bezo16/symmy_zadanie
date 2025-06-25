"use client"
import { filterOptions } from "@/hooks/useProducts"
import { useEffect, useState } from "react"
import ProductsList from "@/components/products/ProductsList"
import ProductsFilters from "@/components/products/ProductsFilters"

const ProductsPage = () => {
  const [filters, setFilters] = useState<filterOptions>({ limit: 15, page: 1, category: "all", sort: "none" })

  useEffect(() => {
    // set filters based on url
    const url = new URL(window.location.href)
    const limit = Number(url.searchParams.get("limit"))
    const page = Number(url.searchParams.get("page"))
    const category = url.searchParams.get("category")
    const sort = url.searchParams.get("sort") as "price-asc" | "price-desc" | "none"

    console.log(url)

    setFilters({
      sort: sort ? sort : "none",
      limit: limit ? limit : 15,
      category: category ? category : "all",
      page: page ? page : 1 })
  }, [])

  useEffect(() => {
    // write filters into current url which is opened in browser
    const url = new URL(window.location.href)
    url.searchParams.set("limit", filters.limit.toString())
    url.searchParams.set("page", filters.page.toString())
    url.searchParams.set("category", filters.category)
    url.searchParams.set("sort", filters.sort)
    window.history.replaceState({}, "", url.toString())
  }, [filters])

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
