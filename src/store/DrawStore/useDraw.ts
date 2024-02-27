"use client"
import { ColumnsProps, ProjectProps, RelationProps, SchemasProps } from '@/types'
import {
    Connection,
    Edge,
    EdgeChange,
    NodeChange
} from 'reactflow'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { useZustand } from '../databaseStore/useZustand'


export type DrawStateProps = {
   
}
 
export type setProjectProps = (partial: DrawStateProps | Partial<DrawStateProps> | ((state: DrawStateProps) => DrawStateProps | Partial<DrawStateProps>), replace?: boolean | undefined) => void
export type getProjectProps =  () => DrawStateProps

const store = create(
    persist<DrawStateProps>(
        (set, get) => ({
            
        }),
        {
            name: "draw",
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export const useProject = () => {
    return useZustand(store, (state) => state)
}