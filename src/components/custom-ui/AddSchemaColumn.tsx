import { Dispatch, SetStateAction, useState } from 'react'
import { FaNotEqual } from 'react-icons/fa6'
import { toast } from 'sonner'
import { Toggle } from '../ui/toggle'
import SelectColumn from '../forms/SelectColumn'

export default function AddSchemaColumn({
    c,
    index,
    column,
    setColumn
}: {
    setColumn:  Dispatch<SetStateAction<{
        name: string
        value: string
        nullable: boolean
        columns: {
            id: string
            name: string
            value: string
            nullable: boolean
        }[]
    }>>
    c: {
        id: string;
        name: string;
        value: string;
        nullable: boolean
    },
    index: number,
    column: {
        name: string
        value: string
        nullable: boolean
        columns: {
            id: string
            name: string
            value: string
            nullable: boolean
        }[]
    }
}) {
    const [edit, setEdit] = useState(false)
    const [columnName, setColumnName] = useState("")
    const [select, setSelect] = useState("")
    const [nullable, setNullable] = useState(false)

    const handleEdit = () => {
        setColumnName(c.name)
        setSelect(c.value)
        setNullable(c.nullable)
        setEdit(true)
    }

    const handleSave = () => {
        if(!columnName) toast.error("Need a name for the column")
        setColumn({
            ...column,
            columns: column.columns.map(col => {
                if(col.id === c.id){
                    return {
                        ...col,
                        name: columnName,
                        value: select,
                        nullable: nullable
                    }
                }
                return col
            })
        })
        toast.success("Saved column change")
        setEdit(false)
    }

  return (
    <tr
    className={`${index !== column.columns.length - 1 ? "border-b border-border/30" : ""}`}
    >
        <td
        className='py-3 max-w-[100px]'
        
        >
            {edit ? (
                <input
                value={columnName}
                className='bg-transparent focus:outline-none max-w-[100px]'
                onChange={(e) => setColumnName(e.currentTarget.value)}
                />
            ) : c.name}
        </td>
        <td
        className='py-3'
        >
            {edit ? (
                <SelectColumn 
                value={select}
                onValueChange={(value) => setSelect(value)}
                />
            ) : c.value}
        </td>
        <td>
            {edit ? (
                <Toggle 
                pressed={nullable}
                onPressedChange={(e) => setNullable(!nullable)}
                onChange={() => setNullable(!nullable)}
                aria-label="Toggle Nullable"
                variant="outline"
                >
                    <FaNotEqual className="h-4 w-4" />
                </Toggle>
            ) : c.nullable ? "true" : "false"}
        </td>
        <td
        className='py-3 flex gap-3 mx-2 '
        >
            {!edit && (
                <>
                <button
                className='text-destructive hover:text-red-600 transition-colors'
                onClick={() => {
                    setColumn({
                        ...column,
                        columns: column.columns.filter(filter => filter.id !== c.id)
                    })
                }}
                >
                    Delete
                </button>
                <button
                className='text-green-700/60 hover:text-green-600 transition-colors'
                onClick={handleEdit}
                >
                    Edit
                </button>
                </>
            )}
            {!!edit && (
                <>
                <button
                className='text-destructive hover:text-red-600 transition-colors py-3'
                onClick={() => setEdit(false)}
                >
                    Cancel
                </button>
                <button
                className='text-green-700/60 hover:text-green-600 transition-colors'
                onClick={() => handleSave()}
                >
                    Save
                </button>
                </>
            )}
        </td>
    </tr>
  )
}
