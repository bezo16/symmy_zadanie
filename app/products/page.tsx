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
import RadioCards from "@/components/RadioCards"
import { Select } from "@radix-ui/react-select"
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

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
  const [filters, setFilters] = useState<filterOptions>({ limit: 15, page: 1, category: "all" })
  const { data: productsData, error, isLoading } = useProducts(filters)

  if (isLoading) {
    return <div className="container mx-auto py-10">Načítavanie produktov...</div>
  }

  if (productsData && productsData.products.length === 0) {
    return <div className="container mx-auto py-10">Žiadne produkty na zobrazenie.</div>
  }

  if (error) {
    return (
      <div className="container mx-auto py-10">
        Chyba pri načítavaní produktov:
        {error.message}
      </div>
    )
  }

  if (!productsData) {
    return <div className="container mx-auto py-10">Žiadne produkty na zobrazenie.</div>
  }

  return (
    <div className="container mx-auto py-10">
      <header>
        <h1 className="text-3xl font-bold mb-8">Produkty</h1>
        <div className="my-4">
          <RadioCards options={options} setFilters={setFilters} filters={filters} />
          <Select value={filters.category} onValueChange={value => setFilters(prev => ({ ...prev, category: value }))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="all">all</SelectItem>
                <SelectItem value="beauty">beauty</SelectItem>
                <SelectItem value="fragrances">fragrances</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productsData?.products.map(product => (
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
