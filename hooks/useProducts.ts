import { ProductsResponse } from "@/types/products"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export type filterOptions = {
  limit: number
  page: number
  category: string
  sort: "price-asc" | "price-desc" | "none"
}

const useProducts = (filterOptions: filterOptions = { limit: 15, page: 0, category: "all", sort: "none" }) => {
  return useQuery({
    queryKey: ["products", filterOptions],

    queryFn: async () => {
      const url = new URL(filterOptions.category !== "all" ? `https://dummyjson.com/products/category/${filterOptions.category}` : "https://dummyjson.com/products")

      url.searchParams.append("limit", filterOptions.limit.toString())
      url.searchParams.append("skip", String(filterOptions.page === 0 ? filterOptions.page * filterOptions.limit : 0))

      if (filterOptions.sort === "price-asc") {
        url.searchParams.append("sortBy", "price")
        url.searchParams.append("order", "asc")
      }

      if (filterOptions.sort === "price-desc") {
        url.searchParams.append("sortBy", "price")
        url.searchParams.append("order", "desc")
      }

      const response = await axios.get<ProductsResponse>(url.toString())

      return response.data
    },
  })
}

export default useProducts
