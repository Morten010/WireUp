"use client"
import { ProjectProps } from '@/types'
import { FC, useEffect, useState } from 'react'
import { anOldHope, CopyBlock } from 'react-code-blocks'
import { generateDrizzleMysql } from './generateDrizzleMysql'
import { darkTheme, lightTheme } from '@/components/codeblockThemes.ts'
import { useTheme } from 'next-themes'

interface ExportCodeBlockProps {
  database: string
  orm: string
  project: ProjectProps
}

const ExportCodeBlock: FC<ExportCodeBlockProps> = ({database, orm, project}) => {
    const {theme} = useTheme()
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
        className='max-h-[40vh] w-full overflow-auto border rounded !font-normal'
        >
            {/* {CodeBlock} */}
            <CopyBlock 
            language='typescript'
            text={code}
            theme={theme !== "dark" ? lightTheme : darkTheme}
            wrapLongLines={true}
            />
        </div>
  )
}

export default ExportCodeBlock