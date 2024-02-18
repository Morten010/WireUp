import React, { useEffect, useState } from 'react'
import { Dialog, DialogHeader, DialogTrigger,  DialogContent, DialogDescription, DialogTitle  } from '../ui/dialog'
import { Button } from '../ui/button'
import { TbDatabaseExport } from 'react-icons/tb'
import { FC } from 'react'
import { ColumnsProps, ProjectProps, SchemasProps } from '@/types'
import { CopyBlock, dracula, atomOneDark } from "react-code-blocks";
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { RxExclamationTriangle } from "react-icons/rx"

interface ExportProjectProps {
  project: ProjectProps
}

const ExportProject: FC<ExportProjectProps> = ({
    project
}) => {
    const [code, setCode] = useState("")

    useEffect(() => {

        const generateCode = async () => {
            let finalSchemas = ""

            const getType = (type: string, name: string) => {
                // types to add 
                // https://orm.drizzle.team/docs/column-types/mysql
                switch(type){
                    case "int":
                        return `int("${name}")`
                    case "varchar":
                        return `varchar("${name}", { length: 255 })`
                    case "text":
                        return `text("${name}")`
                    case "text":
                        return `text("${name}")`
                    case "timestamp": 
                        return `timestamp("${name}")`
                    case "decimal": 
                        return `decimal("${name}")`
                    case "boolean": 
                        return `boolean("${name}")`
                    default: 
                        return "missing"
                }
            }

            project?.schemas[0] as SchemasProps
            project.schemas.map(schema => {
                let columns = ""

                schema.data.columns.map((column: ColumnsProps) => {
                    columns += `\t${column.name}: ${getType(column.value, column.name)}${column.nullable ? "" : ".notNull()"},\n`
                })

                const table = `export const ${schema.data.name} = mysqlTable("${schema.data.name}", {\n${columns}}` 

                finalSchemas += `${table} \n\n`
            })
            
            

            setCode(finalSchemas)
        }

        generateCode()
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
        <DialogContent
        className='max-w-[80%] lg:max-w-[60%]'
        >
            <DialogHeader>
            <DialogTitle>
                Export to drizzle 🚂
            </DialogTitle>
            <DialogDescription>
                Ready to copy and paste into your project!
            </DialogDescription>
            <Alert variant="destructive">
                <RxExclamationTriangle className="h-4 w-4" />
                <AlertTitle>
                    Warning
                </AlertTitle>
                <AlertDescription>
                    This code is just the basics. If you want more fancy stuff, you'll have to throw it in yourself. But hey, I've got most of it covered already. Still a work in progress—I'll be tossing in some PostgreSQL magic later and spicing it up with more types. 🐻
                </AlertDescription>
            </Alert>
            </DialogHeader>
            <div
            className='max-h-[50vh] w-full overflow-auto'
            >
                <CopyBlock 
                language='javascript'
                text={code}
                theme={dracula}
                />
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default ExportProject