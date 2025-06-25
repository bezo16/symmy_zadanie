"use client"

import { filterOptions } from "@/hooks/useProducts"
import { useState } from "react"
import RadioCards from "@/components/RadioCards"
import { Select } from "@radix-ui/react-select"
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import useCategories from "@/hooks/useCategories"
import ProductsList from "@/components/lists/ProductsList"

const options = [
  {
    value: "15",
    label: "15 items",
  },
  {
    value: "30",
    label: "30 items",
  },
  {
    value: "45",
    label: "45 items",
  },
]

const ProductsPage = () => {
  const [filters, setFilters] = useState<filterOptions>({ limit: 15, page: 1, category: "all", sort: "none" })
  const { data: categories } = useCategories()

  return (
    <div className="container mx-auto py-10">
      <header>
        <h1 className="text-3xl font-bold mb-8">Produkty</h1>
        <div className="my-4">
          <RadioCards options={options} setFilters={setFilters} filters={filters} />
          <Select value={filters.category} onValueChange={value => setFilters(prev => ({ ...prev, category: value }))}>
            <SelectTrigger className="w-[180px]">
              <h2>category:</h2>
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="all">all</SelectItem>
                {categories?.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={filters.sort} onValueChange={value => setFilters(prev => ({ ...prev, sort: (value as "price-asc" | "price-desc" | "none") }))}>
            <SelectTrigger className="w-[180px]">
              <h2>sort by:</h2>
              <SelectValue placeholder="Select a Sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort</SelectLabel>
                <SelectItem value="none">none</SelectItem>
                <SelectItem value="price-asc">price asc</SelectItem>
                <SelectItem value="price-desc">price desc</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </header>
      <main>
        <ProductsList filters={filters} setFilters={setFilters} />
      </main>
    </div>
  )
}

export default ProductsPage
