import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get<string[]>("https://dummyjson.com/products/category-list")
      return response.data
    },
  })
}

export default useCategories
