import React, { useEffect, useState } from 'react'
import { Dialog, DialogHeader, DialogTrigger,  DialogContent, DialogDescription, DialogTitle  } from '../ui/dialog'
import { Button } from '../ui/button'
import { TbDatabaseExport } from 'react-icons/tb'
import { FC } from 'react'
import { ColumnsProps, ProjectProps, SchemasProps } from '@/types'
import { CopyBlock, anOldHope } from "react-code-blocks";
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { RxExclamationTriangle } from "react-icons/rx"
import { getTypeMysql } from '@/lib/getTypes'

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
            const imports: string[] = []
            let finalImport = "import {\n\tmysqlTable,\n"
            // `import {\n ${finalImport} \tmysqlTable\n} from "drizzle-orm/mysql-core"\n\n
            project?.schemas[0] as SchemasProps
            project.schemas.map(schema => {
                let columns = ""

                schema.data.columns.map((column: ColumnsProps) => {
                    columns += `\t${column.name}: ${getTypeMysql(column.value, column.name)}${column.nullable ? "" : ".notNull()"},\n`
                    if(!imports.includes(column.value)){
                        imports.push(column.value)
                    }
                })

                const table = `export const ${schema.data.name} = mysqlTable("${schema.data.name}", {\n${columns}}` 

                finalSchemas +=`${table} \n\n`
            })

            imports.map(imp => {
                finalImport += `\t${imp},\n`
            })
            finalImport += `} from "drizzle-orm/mysql-core"\n\n`

            setCode(`${finalImport}${finalSchemas}`)
        }

        generateCode()
    }, [project])
    

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
                theme={anOldHope}
                wrapLongLines={true}
                />
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default ExportProject