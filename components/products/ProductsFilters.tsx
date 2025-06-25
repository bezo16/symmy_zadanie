import RadioCards from "@/components/RadioCards"
import { Select } from "@radix-ui/react-select"
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dispatch, FC, SetStateAction } from "react"
import useCategories from "@/hooks/useCategories"
import { filterOptions } from "@/hooks/useProducts"

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

type Props = {
  filters: filterOptions
  setFilters: Dispatch<SetStateAction<filterOptions>>
}

const ProductsFilters: FC<Props> = ({ filters, setFilters }) => {
  const { data: categories } = useCategories()

  return (
    <div className="my-4">
      <RadioCards options={options} setFilters={setFilters} filters={filters} />
      <Select value={filters.category} onValueChange={value => setFilters(prev => ({ ...prev, category: value }))}>
        <SelectTrigger className="w-[250px] my-4">
          <h2>category:</h2>
          <SelectValue placeholder="Select a Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Category</SelectLabel>
            <SelectItem value="all">all</SelectItem>
            {categories?.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select value={filters.sort} onValueChange={value => setFilters(prev => ({ ...prev, sort: (value as "price-asc" | "price-desc" | "none") }))}>
        <SelectTrigger className="w-[250px]">
          <h2>sort by:</h2>
          <SelectValue placeholder="Select a Sorting" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort</SelectLabel>
            <SelectItem value="none">none</SelectItem>
            <SelectItem value="price-asc">price asc</SelectItem>
            <SelectItem value="price-desc">price desc</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default ProductsFilters
