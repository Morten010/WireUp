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
import { IconType } from 'react-icons/lib'
import { cn } from '@/lib/utils'

interface ExportProjectProps {
  project: ProjectProps
}

const Orms: {
    type: string
    icon: IconType
    databases: {
        name: string
        icon: IconType
    }[]
}[] = [{
    type: "Prisma",
    icon: SiPrisma,
    databases: [ 
        {
            name: "Mysql",
            icon: GrMysql
        }, {
            name: "Postgresql",
            icon: BiLogoPostgresql
        }
    ]
}, {
    type: "Drizzle",
    icon: SiDrizzle,
    databases: [ 
        {
            name: "Mysql",
            icon: GrMysql
        }, {
            name: "Postgresql",
            icon: BiLogoPostgresql
        }
    ]
}]

const ExportProject: FC<ExportProjectProps> = ({
    project
}) => {
    const [code, setCode] = useState("")
    const [chosenOrm, setChosenOrm] = useState<string>()
    const [database, setDatabase] = useState<string>()

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
                Export to code 🚂
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
                    {Orms.map((orm, index) => (
                        <button
                        key={orm.type + index + "pick-orm"}
                        className={cn(
                            'flex gap-2 items-center px-3 py-1 border rounded transition-all',
                            {
                                "bg-accent text-accent-foreground": chosenOrm === orm.type
                            }
                        )}
                        onClick={() => {
                            setChosenOrm(orm.type)
                            setDatabase("")
                        }}
                        >
                            <orm.icon /> {orm.type}
                        </button>
                    ))}
                </div>
            </div>
            {/* orm */}

            {/* database choices */}
            {chosenOrm && <div>
                <h3>
                    Databases
                </h3>
                <div
                className='flex gap-2 mt-1'
                >
                    {Orms.find(o => o.type === chosenOrm)?.databases.map((db, index) => (
                    <button
                    key={db.name + index + "pick-orm"}
                    className={cn(
                        'flex gap-2 items-center px-3 py-1 border rounded transition-all',
                        {
                            "bg-accent text-accent-foreground": database === db.name
                        }
                    )}
                    onClick={() => setDatabase(db.name)}
                    >
                        <db.icon /> {db.name}
                    </button>
                    ))}
                </div>
            </div>}
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