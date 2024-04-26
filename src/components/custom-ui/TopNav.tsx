"use client"
import ExportProject from "@/components/canvas/exportcode/ExportProject"
import { ThemeButton } from "@/components/custom-ui/ThemeButton"
import { useProject } from "@/store/databaseStore/useProject"
import Link from "next/link"
import { FC } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6"

interface TopNavProps {
  id: string
}

const TopNav: FC<TopNavProps> = ({ id }) => {
    const state = useProject()
    const pr = state?.getProject(id)
    

  return (
    <nav
    className='hideOnIframe flex p-5 items-center border-b justify-between '
    
    >
        <div
        className="flex items-center gap-4"
        >
            <Link
            href="/"
            >
                <FaArrowLeftLong 
                className='cursor-pointer'
                />
            </Link>
            <h1
            className='capitalize font-semibold'
            >
                {pr ? pr.name : "loading..."} 
            </h1>
        </div>

        <div
        className="flex gap-2"
        >
          {pr && <ExportProject
          project={pr}
          /> }
          <ThemeButton />
        </div>
    </nav>
  )
}

export default TopNav