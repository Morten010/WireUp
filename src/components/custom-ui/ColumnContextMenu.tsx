import { FC } from 'react'
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuShortcut,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { useParams, usePathname } from 'next/navigation'
import { useProject } from '@/store/useProject'

interface ColumnContextMenuProps {
    children: React.ReactNode
    schemaId: string
    columnId: string
}

const ColumnContextMenu: FC<ColumnContextMenuProps> = ({
    children,
    schemaId,
    columnId
}) => {
    const state = useProject()
    const { id }: { id: string } = useParams()

    const handleDelete = () => {
        state?.deleteColumn(id, schemaId, columnId)
    }
  return (
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
        </ContextMenuContent>
    </ContextMenu>
  )
}

export default ColumnContextMenu