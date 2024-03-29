import { FC, useState } from 'react'
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuShortcut,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { useParams, usePathname } from 'next/navigation'
import { useProject } from '@/store/databaseStore/useProject'
import { toast } from 'sonner'
import { Dialog, DialogClose, DialogFooter, DialogHeader, DialogContent, DialogDescription, DialogTitle, DialogTrigger,  } from '../ui/dialog'
import { Button } from '../ui/button'
import { FaNotEqual, FaTable } from 'react-icons/fa6'
import { Input } from '../ui/input'
import { ColumnsProps } from '@/types'
import { Toggle } from '../ui/toggle'
import SelectColumn from '../forms/SelectColumn'

interface ColumnContextMenuProps {
    children: React.ReactNode
    schemaId: string
    columnId: string
    column: ColumnsProps
}

const ColumnContextMenu: FC<ColumnContextMenuProps> = ({
    children,
    schemaId,
    columnId,
    column
}) => {
    const [open, setOpen] = useState(false)
    const [columnName, setColumnName] = useState(column.name)
    const [select, setSelect] = useState(column.value)
    const [nullable, setNullable] = useState(column.nullable)
    
    const state = useProject()
    const { id }: { id: string } = useParams()

    const handleDelete = () => {
        state?.deleteColumn(id, schemaId, columnId)
        toast.error("Deleted column")
    }

    const handleUpdateEdit = () => {
        state?.updateColumn(schemaId, columnId, {
            ...column,
            name: columnName,
            value: select,
            nullable: nullable
        })
        
        setOpen(false)
    }


  return (
    <>
    <Dialog
    open={open}
    onOpenChange={setOpen}
    >
        <ContextMenu>
            <ContextMenuTrigger>
            {children}
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
                <ContextMenuItem 
                onClick={handleDelete}
                >
                    Delete
                    <ContextMenuShortcut>d</ContextMenuShortcut>
                </ContextMenuItem>
                <DialogTrigger asChild>
                    <ContextMenuItem>
                        <span>Edit</span>
                    </ContextMenuItem>
                </DialogTrigger>
            </ContextMenuContent>
        </ContextMenu>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Edit
                </DialogTitle>
                <DialogDescription>
                    Edit column
                </DialogDescription>
            </DialogHeader>
            <div
            className='flex gap-2 mb-2'
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
                    value={columnName}
                    onChange={(e) => setColumnName(e.currentTarget.value)}
                    />
                </div>
                <Toggle
                pressed={nullable}
                onPressedChange={() => setNullable(!nullable)}
                aria-label="Toggle Nullable"
                variant="outline"
                >
                    <FaNotEqual className="h-4 w-4" />
                </Toggle>
                <SelectColumn
                value={select}
                onValueChange={(e) => setSelect(e)}
                />
                
            </div>
            <DialogFooter>
                <DialogClose
                id='close-modal'
                >
                    Cancel
                </DialogClose>
                <Button
                onClick={handleUpdateEdit}
                >
                    Confirm
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
    
    </>
  )
}

export default ColumnContextMenu