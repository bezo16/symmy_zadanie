import React, { Dispatch, FC, SetStateAction } from "react"
import * as RadioGroup from "@radix-ui/react-radio-group"
import { filterOptions } from "@/hooks/useProducts"

type Props = {
  options: { value: string, label: string }[]
  filters: filterOptions
  setFilters: Dispatch<SetStateAction<filterOptions>>
}

const RadioCards: FC<Props> = ({ options, setFilters, filters }) => {
  const handleValueChange = (value: string) => {
    setFilters(filters => ({ ...filters, limit: parseInt(value) }))
  }

  return (
    <RadioGroup.Root
      defaultValue={options[0].value}
      onValueChange={handleValueChange}
      value={filters.limit.toString()}
      className="max-w-sm w-full grid grid-cols-3 gap-3"
    >
      {options.map(option => (
        <RadioGroup.Item
          key={option.value}
          value={option.value}
          className="ring-[1px] ring-border rounded py-1 px-3 data-[state=checked]:ring-2 data-[state=checked]:ring-blue-500 cursor-pointer"
        >
          <span className="font-semibold tracking-tight">{option.label}</span>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}

export default RadioCards
