import SelectColumn from '@/app/project/[id]/components/SelectColumn'
import { ColumnsProps } from '@/types'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button'

export default function AddSchemaColumn({
    c,
    index,
    column,
    setColumn
}: {
    setColumn:  Dispatch<SetStateAction<{
        name: string
        value: string
        columns: {
            id: string
            name: string
            value: string
        }[]
    }>>
    c: {
        id: string;
        name: string;
        value: string;
    },
    index: number,
    column: {
        name: string
        value: string
        columns: {
            id: string
            name: string
            value: string
        }[]
    }
}) {
    const [edit, setEdit] = useState(false)
    const [columnName, setColumnName] = useState("")
    const [select, setSelect] = useState("")

    const handleEdit = () => {
        setColumnName(c.name)
        setSelect(c.value)
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
                        value: select
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
        className='py-3'
        >
            {edit ? (
                <input
                value={columnName}
                className='bg-transparent focus:outline-none'
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
        {/* <td
        className='py-2'
        >
            <Button
            className='h-7 w-7'
            variant="outline"
            size="icon"
            >
                N
            </Button>
        </td> */}
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
