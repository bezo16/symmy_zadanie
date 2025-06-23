"use client"
import { useParams } from "next/navigation"
import useProduct from "@/hooks/useProduct"
import Link from "next/link"

const ProductPage = () => {
  const params = useParams()
  const { data: product, isLoading, error } = useProduct(params.id?.toString() || undefined)

  if (isLoading) {
    return <div className="container mx-auto py-10">Načítavanie produktu...</div>
  }

  if (error) {
    return (
      <div className="container mx-auto py-10">
        Chyba pri načítavaní produktu:
        {" "}
        {error.message}
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto py-10">
        Produkt neexistuje alebo nebol nájdený.
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <header>
        <Link href="/products" className="text-blue-500 hover:underline mb-4 inline-block">
          Späť na zoznam produktov
        </Link>
      </header>
      <main>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">{product?.title}</h1>
          <p className="text-gray-700 mb-4">{product?.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-lg font-semibold text-green-600">
              $
              {product?.price}
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductPage
