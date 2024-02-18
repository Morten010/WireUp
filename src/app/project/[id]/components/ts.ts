import { FC, useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { useParams } from 'next/navigation'
import { useProject } from '@/store/useProject'
import { TbDatabaseExport } from 'react-icons/tb'
import { ColumnsProps, SchemasProps } from '@/types'
import { codeToHtml } from 'shiki'

interface ExportProjectProps {
  
}

const ExportProject: FC<ExportProjectProps> = async ({}) => {
    const { id }: { id: string } = useParams()
    const [code, setCode] = useState("")
    const state = useProject()
    const project = state?.getProject(id)

    
    useEffect(() => {

        const generateCode = async () => {
            const project = state?.getProject(id)
            const testSchema = project?.schemas[0] as SchemasProps
            let columns = ""
            console.log(testSchema);
            
            const getType = (type: string, name: string) => {
                switch(type){
                    case "int":
                        return `int("${name}")`
                    case "varchar":
                        return `varchar("${name}", { length: 255 })`
                    default: 
                        return "missing"
                }
            }

            testSchema.data.columns.map((column: ColumnsProps) => {
                columns += `\t${column.name}: ${getType(column.value, column.name)}\n`
            })
            const userTable = `export const ${testSchema.data.name} = mysqlTable("${testSchema.data.name}", {
                ${columns}: 
            }` 

            setCode(userTable)

            const generatedCode = await codeToHtml(userTable,{
                lang: 'javascript',
                theme: 'vitesse-dark'
            })
        
            console.log(generateCode);
        }

        if(project){
            
        }
    }, [])
    

  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button 
            variant="outline"
            size="icon"
            >
                <TbDatabaseExport />
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
                Make changes to your profile here. Click save when you're done.
            </DialogDescription>
            </DialogHeader>
            <div>
                content
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default ExportProject