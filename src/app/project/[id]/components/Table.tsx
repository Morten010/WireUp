import { Card } from '@/components/ui/card'
import { SchemasProps } from '@/types'
import { FC, useState } from 'react'
import { FaTable } from 'react-icons/fa6'
import { MdDragIndicator } from "react-icons/md";


interface TableProps {
  schema: SchemasProps
}

const Table: FC<TableProps> = ({ schema }) => {
    const [isDragging, setIsDragging] = useState(false)
    console.log(schema);
    
  return (
    <Card
    className='overflow-hidden w-full max-w-[300px] mb-auto'
    onWheel={(e) => e.stopPropagation()}
    >
        <div
        className='bg-border p-4 flex justify-between items-center w-full'
        >
            <h3>
                {schema.name}
            </h3>
            <MdDragIndicator 
            className={`drag text-2xl ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            />
        </div>
        <table
        className='p-2 w-full'
        >
        <thead>
            <tr
            className='border-b '
            >
            <td
            className='py-3 pl-4 flex gap-3 items-center'
            >
                <FaTable />
                column
            </td>
            <td
            className='pr-4'
            >
                Value
            </td>
            </tr>
        </thead>
        <tbody>
            {schema.columns?.map(column => (
                <tr
                key={column.id + "table"}
                >
                    <td
                    className='py-3 px-4 flex gap-3 items-center'
                    >
                        <FaTable />
                        {column.name}
                    </td>
                    <td
                    className='text-muted-foreground'
                    >
                        {column.value}
                    </td>
                </tr>
            ))}
        </tbody>
        </table>
    </Card>
  )
}

export default Table