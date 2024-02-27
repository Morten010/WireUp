import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { useProject } from '@/store/databaseStore/useProject'
import { Plus } from 'lucide-react'
import { nanoid } from 'nanoid'
import { FC, FormEvent, useState } from 'react'
import { FaNotEqual, FaTable } from 'react-icons/fa6'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Toggle } from '../ui/toggle'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import AddSchemaColumn from './AddSchemaColumn'
import SelectColumn from "../forms/SelectColumn"
  

interface AddSchemaButtonProps {
  className?: string
  id: string | undefined
}

type ColumnProps = {
    name: string
    value: string
    nullable: boolean,
    columns: {
        id: string
        name: string
        value: string
        nullable: boolean
    }[]
}

const AddSchemaButton: FC<AddSchemaButtonProps> = ({className, id}) => {
    const [open, setOpen] = useState(false)
    const [tableName, setTableName] = useState("")
    const [column, setColumn] = useState<ColumnProps>({
        name: "",
        value: "",
        nullable: false,
        columns: []
    })
    const state = useProject()

    const handleAddColumn = () => {
        
        if(!column.name) return toast.error("Missing column name 🔍")
        if(!column.value) return toast.error("Missing column value 🔍")

        setColumn({
            name: "",
            value: "",
            nullable: false,
            columns: [
                ...column.columns,
                {
                    id: nanoid(),
                    name: column.name,
                    value: column.value,
                    nullable: column.nullable
                }
            ]
        })
    }

    const handleSubmit = () => {
        if(!tableName) return toast.error("Missing column name 🔍")
        if(!column.columns.length) return toast.error("Need atleast one column")
        
        const lastSchema = state?.getProject(id!)?.schemas.slice(-1)[0]!

        const newId = nanoid()

        state?.addSchema(id!, {
            id: newId,
            position: {
                x: lastSchema ? lastSchema.position.x + 250 + 30 : 0,
                y: lastSchema ? lastSchema.position.y : 0,
            },
            data: {
                columns: column.columns,
                id: newId,
                name: tableName, 
            },
        })

        setTableName("");
        setColumn({
            columns: [],
            name: "",
            value: "",
            nullable: false
        });
        toast.success("Added table 🍾")
        setOpen(false)
    }

    const handleToggle = (e: FormEvent<HTMLButtonElement>) => {
        console.log(e);
        
    }

  return (
    <AlertDialog
    open={open}
    onOpenChange={setOpen}
    >
        <AlertDialogTrigger
        className={`hideOnIframe cursor-pointer ${className}`}
        asChild
        >
            <Plus />
        </AlertDialogTrigger>
        <AlertDialogContent
        // className='min-w-[80%]'
        >
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
                        
                        <TooltipProvider>
                            <Tooltip>
                            <TooltipTrigger>
                                <div>
                                    <Toggle 
                                    pressed={column.nullable}
                                    onPressedChange={(e) => setColumn({
                                        ...column,
                                        nullable: !column.nullable
                                    })}
                                    onChange={handleToggle}
                                    aria-label="Toggle Nullable"
                                    variant="outline"
                                    >
                                        <FaNotEqual className="h-4 w-4" />
                                    </Toggle>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                Nullable
                            </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        
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
                                className='flex py-3 gap-3 items-center max-w-[100px]'
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
                                    Nullable
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
                                <AddSchemaColumn 
                                c={c}
                                index={index}
                                column={column}
                                setColumn={setColumn}
                                key={index + c.id}
                                />
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