import { ProductsResponse } from "@/types/products"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export type filterOptions = {
  limit: number
  page: number
  category: string
}

const useProducts = (filterOptions: filterOptions = { limit: 15, page: 0, category: "all" }) => {
  return useQuery({
    queryKey: ["products", filterOptions],

    queryFn: async () => {
      const url = new URL(filterOptions.category !== "all" ? `https://dummyjson.com/products/category/${filterOptions.category}` : "https://dummyjson.com/products")

      url.searchParams.append("limit", filterOptions.limit.toString())
      url.searchParams.append("skip", String(filterOptions.page === 0 ? filterOptions.page * filterOptions.limit : 0))
      console.log(url)

      const response = await axios.get<ProductsResponse>(url.toString())
      return response.data
    },
  })
}

export default useProducts
