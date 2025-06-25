import { useParams } from "next/navigation"
import useProduct from "@/hooks/useProduct"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const ProductDetail = () => {
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
      <header className="mb-6">
        <Link href="/products" className="text-blue-500 hover:underline">
          Späť na zoznam produktov
        </Link>
      </header>
      <main>
        <Card className="bg-white shadow-md rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{product.title}</CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <Badge>{product.category}</Badge>
              {product.tags?.map((tag: string) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            {/* Product Images */}
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {product.images?.map((image: string, index: number) => (
                <div key={index} className="relative w-full h-64 rounded-lg shadow-sm">
                  <Image
                    src={image}
                    alt={`${product.title} image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-lg font-semibold text-green-600">
                $
                {product.price}
              </span>
              {product.discountPercentage > 0 && (
                <Badge variant="outline" className="text-red-600">
                  Zľava:
                  {" "}
                  {product.discountPercentage}
                  %
                </Badge>
              )}
            </div>
            <div className="text-sm text-gray-500">
              <p>
                SKU:
                {product.sku}
              </p>
              <p>
                Stock:
                {product.stock}
              </p>
              <p>
                Brand:
                {product.brand || "Unknown"}
              </p>
              <p>
                Weight:
                {product.weight}
                {" "}
                kg
              </p>
              <p>
                Dimensions:
                {" "}
                {product.dimensions.width}
                {" "}
                x
                {product.dimensions.height}
                {" "}
                x
                {" "}
                {product.dimensions.depth}
                {" "}
                cm
              </p>
              <p>
                Warranty:
                {product.warrantyInformation}
              </p>
              <p>
                Shipping:
                {product.shippingInformation}
              </p>
              <p>
                Availability:
                {product.availabilityStatus}
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default ProductDetail
