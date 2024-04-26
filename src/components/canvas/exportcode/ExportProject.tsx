import { cn } from '@/lib/utils'
import { ProjectProps } from '@/types'
import { FC, useState } from 'react'
import { BiLogoPostgresql } from "react-icons/bi"
import { GrMysql } from "react-icons/gr"
import { IconType } from 'react-icons/lib'
import { SiDrizzle, SiPrisma } from "react-icons/si"
import { TbDatabaseExport } from 'react-icons/tb'
import { Button } from '../../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../ui/dialog'
import ExportCodeBlock from './ExportCodeBlock'

interface ExportProjectProps {
  project: ProjectProps
}

const Orms: {
    type: string
    icon: IconType
    databases: {
        name: string
        icon: IconType
        disabled: boolean
    }[]
}[] = [{
    type: "Prisma",
    icon: SiPrisma,
    databases: [ 
        {
            name: "Mysql",
            icon: GrMysql,
            disabled: true
        }, {
            name: "Postgresql",
            icon: BiLogoPostgresql,
            disabled: true
        }
    ]
}, {
    type: "Drizzle",
    icon: SiDrizzle,
    databases: [ 
        {
            name: "Mysql",
            icon: GrMysql,
            disabled: false

        }, {
            name: "Postgresql",
            icon: BiLogoPostgresql,
            disabled: true
        }
    ]
}]

const ExportProject: FC<ExportProjectProps> = ({
    project
}) => {
    const [chosenOrm, setChosenOrm] = useState<string>()
    const [database, setDatabase] = useState<string>()

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
                    Pick a orm
                </h3>
                <div
                className='flex gap-2 mt-1'
                >
                    {Orms.map((orm, index) => (
                        <button
                        key={orm.type + index + "pick-orm"}
                        disabled={!orm.databases.find(db => db.disabled === false)}
                        className={cn(
                            'flex gap-2 items-center px-3 py-1 border rounded transition-all disabled:opacity-35',
                            {
                                "bg-accent text-accent-foreground": chosenOrm === orm.type
                            }
                        )}
                        onClick={() => {
                            setChosenOrm(orm.type)
                            setDatabase("")
                        }}
                        >
                            <orm.icon /> {orm.type} {!orm.databases.find(db => db.disabled === false) && "(Coming soon)"}
                        </button>
                    ))}
                </div>
            </div>
            {/* orm */}

            {/* database choices */}
            {chosenOrm && <div>
                <h3>
                    Pick a database
                </h3>
                <div
                className='flex gap-2 mt-1'
                >
                    {Orms.find(o => o.type === chosenOrm)?.databases.map((db, index) => (
                    <button
                    key={db.name + index + "pick-orm"}
                    className={cn(
                        'flex gap-2 items-center px-3 py-1 border rounded transition-all disabled:opacity-35',
                        {
                            "bg-accent text-accent-foreground": database === db.name
                        }
                    )}
                    onClick={() => setDatabase(db.name)}
                    disabled={db.disabled}
                    >
                        <db.icon /> {db.name} {db.disabled && "(Coming soon)"}
                    </button>
                    ))}
                </div>
            </div>}
            {/* database choices */}


            {database && chosenOrm && (
                <ExportCodeBlock 
                project={project}
                database={database}
                orm={chosenOrm}
                />
            )}
        </DialogContent>
    </Dialog>
  )
}

export default ExportProject