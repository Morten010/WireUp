"use client"
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { nanoid } from "nanoid"
import { useZustand } from './useZustand'
import {
    Connection,
    Edge,
    EdgeChange,
    Node,
    NodeChange,
    addEdge,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
    applyNodeChanges,
    applyEdgeChanges,
  } from 'reactflow';
import { initialProjectState } from '@/constants'
import { onEdgeChange } from './onEdgeChange'
import { getProject } from './getProject'
import { addSchema } from './addSchema'
import { ColumnsProps, ProjectProps, RelationProps, SchemasProps } from '@/types'
import { createProject } from './createProject'
import { deleteSchema } from './deleteSchema'
import { deleteColumn } from './deleteColumn'
import { addColumn } from './addColumn'
import { onNodesChange } from './onNodesChange'
import { onConnect } from './onConnect'

export type ProjectStateProps = {
    projects: ProjectProps[]
    createProject: (x: ProjectProps) => void
    getProject: (id: string) => ProjectProps | undefined
    addSchema: (projectId: string, schema: SchemasProps) => void
    deleteSchema: (projectId: string, schemaId: string) => void
    deleteColumn: (projectId: string, schemaId: string, columnId: string) => void
    addColumn: (projectId: string, schemaId: string, newColumn: ColumnsProps) => void
    onNodesChange: (projectId: string, changes: NodeChange[]) => void
    onEdgesChange: (projectId: string, changes: EdgeChange[]) => void
    onConnect: (projectId: string, connection: Connection) => void
}
 
export type setProjectProps = (partial: ProjectStateProps | Partial<ProjectStateProps> | ((state: ProjectStateProps) => ProjectStateProps | Partial<ProjectStateProps>), replace?: boolean | undefined) => void
export type getProjectProps =  () => ProjectStateProps

const store = create(
    persist<ProjectStateProps>(
        (set, get) => ({
            projects: [],

            createProject: (project) => createProject(project, set),
            getProject: (id) => getProject(id, get),
            addSchema: (projectId, schema) => addSchema(projectId, schema, get, set),
            deleteSchema: (projectId, schemaId) => deleteSchema(projectId, schemaId, get, set),
            deleteColumn: (projectId, schemaId, columnId) => deleteColumn(projectId, schemaId, columnId, set, get),
            addColumn: (projectId, schemaId, newColumn) => addColumn(projectId, schemaId, newColumn, get, set),
            onNodesChange: (projectId, changes) => onNodesChange(projectId, changes, get, set),

            onEdgesChange: (projectId, changes) => onEdgeChange(projectId, changes, set, get),

            onConnect: (projectId, connection) => onConnect(projectId, connection, get, set),
            
        }),
        {
            name: "projects",
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export const useProject = () => {
    return useZustand(store, (state) => state)
}