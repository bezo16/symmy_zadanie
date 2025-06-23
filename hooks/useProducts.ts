import { ProductsResponse } from "@/types/products"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export type filterOptions = {
  limit: number
  page: number
}

const useProducts = (filterOptions: filterOptions = { limit: 15, page: 1 }) => {
  return useQuery({
    queryKey: ["products", filterOptions],

    queryFn: async () => {
      const url = new URL("https://dummyjson.com/products")

      url.searchParams.append("limit", filterOptions.limit.toString())
      url.searchParams.append("skip", String(filterOptions.page * filterOptions.limit))

      const response = await axios.get<ProductsResponse>(url.toString())
      return response.data
    },
  })
}

export default useProducts
