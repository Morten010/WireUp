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
import { addColumn } from './addColumn'
import { addSchema } from './addSchema'
import { createProject } from './createProject'
import { deleteColumn } from './deleteColumn'
import { deleteSchema } from './deleteSchema'
import { getEdge } from './getEdge'
import { getProject } from './getProject'
import { onConnect } from './onConnect'
import { onEdgeChange } from './onEdgeChange'
import { onNodesChange } from './onNodesChange'
import { useZustand } from './useZustand'
import { updateRelation } from './updateRelation'

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
    getEdge: (edgeid: string, tableOne: string, tableTwo: string) => { 
        edge: Edge | undefined, 
        edges: ColumnsProps[], 
        columnOne: string | undefined
        columnTwo: string | undefined
    },
    updateRelation: (
        change: "one-to-one" | "many-to-one" | "one-to-many",
        edge: { 
            edge: Edge | undefined, 
            edges: ColumnsProps[], 
            columnOne: string | undefined
            columnTwo: string | undefined
        }, 
    ) => void
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
            getEdge: (edgeId, tableOne, tableTwo) => getEdge(edgeId, tableOne, tableTwo, get),
            updateRelation: (change, edge) => updateRelation(change, edge, get, set)
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