import React, { useEffect, useState } from 'react'
import { Dialog, DialogHeader, DialogTrigger,  DialogContent, DialogDescription, DialogTitle  } from '../ui/dialog'
import { Button } from '../ui/button'
import { TbDatabaseExport } from 'react-icons/tb'
import { FC } from 'react'
import { ColumnsProps, ProjectProps, SchemasProps } from '@/types'
import { CopyBlock, anOldHope } from "react-code-blocks";
import { getTypeMysql } from '@/lib/getTypes'
import { SiDrizzle, SiPrisma } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";

interface ExportProjectProps {
  project: ProjectProps
}

const Orms = [{
    type: "Prisma",
    databases: [ "Mysql", "Postgresql"]
}, {
    type: "Drizzle",
    databases: ["Mysql", "Postgresql"]
}]

const ExportProject: FC<ExportProjectProps> = ({
    project
}) => {
    const [code, setCode] = useState("")
    const [orm, setOrm] = useState<"prisma" | "drizzle">()
    const [database, setDatabase] = useState<"mysql" | "postgresql">()

    useEffect(() => {

        const generateCode = async () => {
            let finalSchemas = ""

            

            project?.schemas[0] as SchemasProps
            project.schemas.map(schema => {
                let columns = ""

                schema.data.columns.map((column: ColumnsProps) => {
                    columns += `\t${column.name}: ${getTypeMysql(column.value, column.name)}${column.nullable ? "" : ".notNull()"},\n`
                })

                const table = `export const ${schema.data.name} = mysqlTable("${schema.data.name}", {\n${columns}}` 

                finalSchemas += `${table} \n\n`
            })
            
            

            setCode(finalSchemas)
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

            </DialogHeader>

            {/* orm */}
            <div>
                <h3>
                    Orm
                </h3>
                <div
                className='flex gap-2 mt-1'
                >
                    <button
                    className='flex gap-2 items-center px-3 py-1 border rounded'
                    >
                        <SiPrisma /> Prisma
                    </button>
                    <button
                    className='flex gap-2 items-center px-3 py-1 border rounded'
                    >
                        <SiDrizzle /> Drizzle
                    </button>
                </div>
            </div>
            {/* orm */}

            {/* database choices */}
            <div>
                <h3>
                    Databases
                </h3>
                <div
                className='flex gap-2 mt-1'
                >
                    <button
                    className='flex gap-2 items-center px-3 py-1 border rounded'
                    >
                        <GrMysql /> Mysql
                    </button>
                    <button
                    className='flex gap-2 items-center px-3 py-1 border rounded'
                    >
                        <BiLogoPostgresql /> Postgresql
                    </button>
                </div>
            </div>
            {/* database choices */}


            <div
            className='max-h-[40vh] w-full overflow-auto'
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