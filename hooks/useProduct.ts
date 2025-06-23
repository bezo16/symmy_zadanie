import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Product } from "@/types/products"

const useProduct = (productId: string | undefined) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const response = await axios.get<Product>(`https://dummyjson.com/products/${productId}`)
      return response.data
    },
    enabled: !!productId,
  })
}

export default useProduct
