import { Card } from '@/components/ui/card'
import { SchemasProps } from '@/types'
import { FC } from 'react'
import { FaTable } from 'react-icons/fa6'

interface TableProps {
  schema: SchemasProps
}

const Table: FC<TableProps> = ({ schema }) => {

    console.log(schema);
    
  return (
    <Card
    className='overflow-hidden w-full max-w-[300px] mb-auto'
    >
        <div
        className='bg-border p-4'
        >
            {schema.name}
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
                <tr>
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