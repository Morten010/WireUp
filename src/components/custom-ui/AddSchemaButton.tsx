import { FC, useState } from 'react'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { useProject } from '@/store/useProject'
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
import { Input } from '../ui/input'
import { FaTable } from 'react-icons/fa6'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useToast } from '../ui/use-toast'
import { toast } from 'sonner'
import { nanoid } from 'nanoid'
import SelectColumn from '@/app/project/[id]/components/SelectColumn'
  

interface AddSchemaButtonProps {
  className?: string
  id: string | undefined
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

const AddSchemaButton: FC<AddSchemaButtonProps> = ({className, id}) => {
    const [open, setOpen] = useState(false)
    const [tableName, setTableName] = useState("")
    const [column, setColumn] = useState<ColumnProps>({
        name: "",
        value: "",
        columns: []
    })
    const state = useProject()

    const handleAddColumn = () => {
        
        if(!column.name) return toast.error("Missing column name 🔍")
        if(!column.value) return toast.error("Missing column value 🔍")

        setColumn({
            name: "",
            value: "",
            columns: [
                ...column.columns,
                {
                    id: nanoid(),
                    name: column.name,
                    value: column.value
                }
            ]
        })
    }

    const handleSubmit = () => {
        if(!tableName) return toast.error("Missing column name 🔍")
        if(!column.columns.length) return toast.error("Need atleast one column")
        
        state?.addSchema(id!, {
            columns: column.columns,
            id: nanoid(),
            name: tableName
        })

        setTableName("");
        setColumn({
            columns: [],
            name: "",
            value: ""
        });
        toast.success("Added table 🍾")
        setOpen(false)
    }

  return (
    <AlertDialog
    open={open}
    onOpenChange={setOpen}
    >
        <AlertDialogTrigger
        className={className}
        >
            <Plus />
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Create a table
                </AlertDialogTitle>
                <AlertDialogDescription>
                    <label
                    className='flex flex-col gap-1'
                    >
                        <span>
                            Name of table
                        </span>
                        <Input 
                        placeholder='user'
                        value={tableName}
                        onChange={(e) => setTableName(e.currentTarget.value)}
                        />
                    </label>

                    <div
                    className='flex gap-2 mt-2 pt-2 border-t border-border/50'
                    >
                        <div
                        className='relative'
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
                        <Button
                        onClick={handleAddColumn}
                        >
                            Add
                        </Button>
                    </div>

                    <table
                    className='w-full mt-3'
                    >
                        <thead>
                            <tr
                            className='border-b border-border-/40'
                            >
                                <td
                                className='flex py-3 gap-3 items-center'
                                >
                                    <FaTable />
                                    <span>
                                        Column
                                    </span>
                                </td>
                                <td
                                className='py-3'
                                >
                                    value
                                </td>
                                <td
                                className='py-3'
                                >
                                    Options
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {column.columns.map((c, index) => (
                                <tr
                                className={`${index !== column.columns.length - 1 ? "border-b border-border/30" : ""}`}
                                >
                                    <td
                                    className='py-3'
                                    >
                                        {c.name}
                                    </td>
                                    <td
                                    className='py-3'
                                    >
                                        {c.value}
                                    </td>
                                    <td
                                    className='py-3'
                                    >
                                        <button
                                        className='text-destructive hover:text-red-600 transition-colors'
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>
                    Cancel
                </AlertDialogCancel>
                <Button
                onClick={handleSubmit}
                >
                    Create table
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default AddSchemaButton