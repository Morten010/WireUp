import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dispatch, FC, SetStateAction } from 'react'
import { FaTable } from 'react-icons/fa6'
import SelectColumn from './SelectColumn'

type ColumnProps = {
    name: string
    value: string
    columns: {
        id: string
        name: string
        value: string
    }[]
}

interface ColumnInputProps {
  column: ColumnProps
  setColumn: Dispatch<SetStateAction<ColumnProps>>
  handleAddColumn?: () => void
}

const ColumnInput: FC<ColumnInputProps> = ({
    column,
    setColumn,
    handleAddColumn
}) => {
    
  return (
    <div
    className='flex gap-2 mt-2 pt-2 border-t border-border/50'
    >
        <div
        className='relative flex-grow'
        >
            <FaTable 
            className='absolute top-2/4 -translate-y-2/4 left-3'
            />
            <Input
            className='pl-9'
            placeholder='Column name'
            value={column.name}
            onChange={(e) => setColumn({
                ...column,
                name: e.currentTarget.value
            })}
            />
        </div>
        <SelectColumn 
        
        value={column.value}
        onValueChange={(e) => setColumn({
            ...column,
            value: e
        })}
        />
        {!!handleAddColumn && <Button
        onClick={handleAddColumn}
        >
            Add
        </Button>}
    </div>
  )
}

export default ColumnInput