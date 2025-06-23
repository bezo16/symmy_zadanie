"use client"
import { useParams } from "next/navigation"

const ProductPage = () => {
  const params = useParams()

  return (
    <div>
      <h1>Product Page</h1>
      <p>
        This is the product id:
        {params.id}
      </p>
    </div>
  )
}

export default ProductPage
