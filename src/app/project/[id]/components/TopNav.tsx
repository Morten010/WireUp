"use client"
import { FaArrowLeftLong } from "react-icons/fa6"
import { FC } from 'react'
import Link from "next/link"
import { ThemeButton } from "@/components/custom-ui/ThemeButton"
import { useProject } from "@/store/useProject"

interface TopNavProps {
  id: string
}

const TopNav: FC<TopNavProps> = ({ id }) => {
    const state = useProject()
    const pr = state?.getProject(id)
    

  return (
    <nav
    className='p-5 flex items-center border-b justify-between'
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

        <ThemeButton />
    </nav>
  )
}

export default TopNav