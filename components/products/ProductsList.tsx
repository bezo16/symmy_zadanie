import { Dispatch, FC, SetStateAction } from "react"
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
import ProductsListSkeleton from "./ProductsListSkeleton"

type Props = {
  filters: filterOptions
  setFilters: Dispatch<SetStateAction<filterOptions>>
}

const ProductsList: FC<Props> = ({ filters, setFilters }) => {
  const { data: productsData, error, isLoading } = useProducts(filters)

  if (isLoading) return <ProductsListSkeleton />

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
    <div>
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
                <div className="mt-4 text-lg font-semibold">
                  <h2>
                    Cena:
                    {" "}
                    {product.price.toLocaleString("sk-SK")}
                    {" "}
                    €
                  </h2>
                </div>
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

export default ProductsList
