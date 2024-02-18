import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { selectTypes } from '@/constants/selectTypes'
import { FC } from 'react'

interface SelectColumnProps {
    value: string
    onValueChange: (value: string) => void
}

const SelectColumn: FC<SelectColumnProps> = ({onValueChange, value}) => {
  return (
    <Select
    value={value}
    onValueChange={onValueChange}
    >
        <SelectTrigger 
        className="w-[180px]"
        >
            <SelectValue placeholder="Select a value" />
        </SelectTrigger>
        <SelectContent
        className='max-h-[250px]'
        >
            <SelectGroup>
                {selectTypes.map(selectItem => (
                    <SelectItem 
                    value={selectItem}
                    className='capitalize'
                    >
                        {selectItem}
                    </SelectItem>
                ))}
            </SelectGroup>
        </SelectContent>
    </Select>
  )
}

export default SelectColumn