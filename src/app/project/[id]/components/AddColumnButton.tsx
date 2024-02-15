import { Button } from '@/components/ui/button'
import { FC, useState } from 'react'
import { TbColumnInsertLeft } from 'react-icons/tb'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import SelectColumn from './SelectColumn'
import ColumnInput from './ColumnInput'
import { toast } from 'sonner'
import { nanoid } from 'nanoid'
import { useProject } from '@/store/useProject'
import { useParams } from 'next/navigation'

interface AddColumnButtonProps {
  schemaId: string
}

type ColumnProps = {
    name: string
    value: string
    columns: {
        id: string
        name: string
        value: string
    }[]
}

const AddColumnButton: FC<AddColumnButtonProps> = ({
    schemaId
}) => {
    const state = useProject()
    const { id }: { id: string } = useParams()
    const [open, setOpen] = useState(false)
    const [column, setColumn] = useState<ColumnProps>({
        name: "",
        value: "",
        columns: []
    })

    const handleAddColumn = () => {
        if(!column.name) return toast.error("Missing column name 🔍")
        if(!column.value) return toast.error("Missing column value 🔍")

        state?.addColumn(id, schemaId, {
            id: nanoid(),
            name: column.name,
            value: column.value
        }) 
        setColumn({
            name: "",
            value: "",
            columns: []
        })
        setOpen(false)
    }

  return (
    <AlertDialog
    open={open}
    >
      <AlertDialogTrigger asChild>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                    className='h-6 w-6 p-0  hover:border-none border-none'
                    size='sm'
                    variant="outline"
                    onClick={() => setOpen(true)}
                    >
                        <TbColumnInsertLeft
                        className='text-[13px]'
                        />
                    </Button>
                </TooltipTrigger>
                <TooltipContent
                className='text-[11px]'
                >
                    <p>Add column</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Add Column
          </AlertDialogTitle>
          <AlertDialogDescription>
            

            <ColumnInput 
            column={column}
            setColumn={setColumn}
            />

          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button
          variant="outline"
          onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
          onClick={handleAddColumn}
          >
            Add
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AddColumnButton