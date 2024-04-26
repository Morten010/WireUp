"use client"
import { ProjectProps } from '@/types'
import { FC, useEffect, useState } from 'react'
import { anOldHope, CopyBlock } from 'react-code-blocks'
import { generateDrizzleMysql } from './generateDrizzleMysql'

interface ExportCodeBlockProps {
  database: string
  orm: string
  project: ProjectProps
}

const ExportCodeBlock: FC<ExportCodeBlockProps> = ({database, orm, project}) => {
    const [code, setCode] = useState("")
    
    useEffect(() => {
        switch (orm) {
            case "Drizzle":
                switch (database){
                    case "Mysql":
                        const newCode = generateDrizzleMysql(project)
                        setCode(newCode)
                    break
                    default:
                        setCode("Could not generate code")
                        break
                }
                break;
            case "Prisma":
    
                break
            default:
                setCode("Could not generate code")
                break
        }
    }, [database, orm, project])
    
      
  return (
        <div
        className='max-h-[40vh] w-full overflow-auto'
        >
            {/* {CodeBlock} */}
            <CopyBlock 
            language='javascript'
            text={code}
            theme={anOldHope}
            wrapLongLines={true}
            />
        </div>
  )
}

export default ExportCodeBlock