import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
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
                <SelectLabel>Value</SelectLabel>
                <SelectItem value="int">Int</SelectItem>
                <SelectItem value="varchar">Varchar</SelectItem>
                <SelectItem value="char">Char</SelectItem>
                <SelectItem value="text">Text</SelectItem>
                <SelectItem value="float">Float</SelectItem>
                <SelectItem value="double">Double</SelectItem>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="datetime">Datetime</SelectItem>
                <SelectItem value="timestamp">Timestamp</SelectItem>
                <SelectItem value="boolean">Boolean</SelectItem>
                <SelectItem value="tinyint">TinyInt</SelectItem>
                <SelectItem value="smallint">SmallInt</SelectItem>
                <SelectItem value="mediumint">MediumInt</SelectItem>
                <SelectItem value="bigint">BigInt</SelectItem>
                <SelectItem value="decimal">Decimal</SelectItem>
                <SelectItem value="numeric">Numeric</SelectItem>
                <SelectItem value="enum">Enum</SelectItem>
                <SelectItem value="set">Set</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
  )
}

export default SelectColumn