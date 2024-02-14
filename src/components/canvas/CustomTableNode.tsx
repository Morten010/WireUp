import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";

import { FC } from 'react'
import Table from "@/app/project/[id]/components/Table";
import { Card } from "../ui/card";
import { MdDragIndicator } from "react-icons/md";
import { FaTable } from "react-icons/fa6";
import { SchemasProps } from "@/store/dup";
import { ColumnsProps } from "@/types";

interface CustomTableNodeProps {
  data: SchemasProps
}

const CustomTableNode: FC<CustomTableNodeProps> = ({ data }) => {
    console.log(data);

  return (
    <Card
    className='overflow-hidden w-full min-w-[250px] mb-auto'
    onWheel={(e) => e.stopPropagation()}
    >
        <div
        className='bg-border p-4 flex justify-between items-center w-full'
        >
            <h3>
                {data.data.name}
            </h3>
            <MdDragIndicator 
            className="drag text-2xl "
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
            {data.data.columns?.map((column: ColumnsProps, index: number) => (
                <tr
                key={column.id + "table"}
                >
                    <Handle 
                    id={`${column.id}-left`}
                    position={Position.Left}
                    type="target"
                    style={{
                        top: (103 + 28 + 48 * index)
                    }}
                    />
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
                    <Handle 
                    id={`${column.id}-right`}
                    position={Position.Right}
                    type="source"
                    style={{
                        top: 103 + 28 + 48 * index  
                    }}
                    />
                </tr>
            ))}
        </tbody>
        </table>
    </Card>
  )
}

export default CustomTableNode
