"use client"
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { nanoid } from "nanoid"
import { ColumnsProps, ProjectProps, SchemasProps } from '@/types'
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

export type ProjectStateProps = {
    projects: ProjectProps[]
    createProject: (x: ProjectProps) => void
    getProject: (id: string) => ProjectProps | undefined
    addSchema: (projectId: string, schema: SchemasProps) => void
    deleteSchema: (projectId: string, schemaId: string) => void
    deleteColumn: (projectId: string, schemaId: string, columnId: string) => void
    addColumn: (projectId: string, schemaId: string, newColumn: ColumnsProps) => void
    changeLocation: (projectId: string, schemaId: string, position: {x: number, y: number}) => void
    onNodesChange: OnNodesChange;
}
 
const store = create(
    persist<ProjectStateProps>(
        (set, get) => ({
            projects: [
                {   
                    id: nanoid(),
                    name: "Webshop",
                    description: "Webshop schema",
                    schemas: []
                }
            ],

            createProject: (project) => set((state) => ({
                ...state, 
                projects: [
                    ...state.projects,
                    project
                ]
            })),

            getProject: (id) => {
                const project = get().projects.find(p => p.id === id)
                
                return project
            },

            addSchema: (projectId, schema) => {
                const projects = get().projects;

                const updatedProjects: ProjectProps[] = projects.map(p => {

                    if(p.id === projectId) return {
                        ...p,
                        schemas: [
                            ...p.schemas,
                            schema
                        ]
                    }

                    return p
                })
                                
                set((state) => ({
                    ...state,
                    projects: updatedProjects
                }))
            },

            deleteSchema: (projectId, schemaId) => {
                const projects = get().projects;
                console.log(projects);
                
                const newProjects: ProjectProps[] = projects.map(p => {

                    if(p.id === projectId){
                        const schemas: SchemasProps[] = p.schemas.filter(schema => schema.id !== schemaId)
             

                        return {
                            ...p,
                            schemas: schemas
                        }
                    }

                    return p
                })

                set((state) => ({
                    ...state,
                    projects: newProjects
                }))
            },

            deleteColumn: (projectId, schemaId, columnId) => {
                // Get the current state
                const projects = get().projects;

                // Find the project by projectId
                const updatedProjects = projects.map((project) => {
                    if (project.id === projectId) {
                        // Find the schema by schemaId
                        const updatedSchemas = project.schemas.map((schema) => {
                            if (schema.id === schemaId) {
                                // Filter out the column with the specified columnId
                                const updatedColumns = schema.columns.filter((column) => column.id !== columnId);

                                // Return the updated schema with the filtered columns
                                return { ...schema, columns: updatedColumns };
                            }
                            return schema;
                        });

                        // Return the updated project with the modified schemas
                        return { ...project, schemas: updatedSchemas };
                    }
                    return project;
                });
                
                
                set((state) => ({
                    ...state,
                    projects: updatedProjects
                }))
            },

            addColumn: (projectId: string, schemaId: string, newColumn: ColumnsProps) => {
                console.log("Changed location on schema " + schemaId);
                
                // Get the current state
                const projects = get().projects;
            
                // Find the project by projectId
                const updatedProjects = projects.map((project) => {
                    if (project.id === projectId) {
                        // Find the schema by schemaId
                        const updatedSchemas = project.schemas.map((schema) => {
                            if (schema.id === schemaId) {
                                // Add the new column to the existing columns
                                const updatedColumns = [...schema.columns, newColumn];
            
                                // Return the updated schema with the new column
                                return { ...schema, columns: updatedColumns };
                            }
                            return schema;
                        });
            
                        // Return the updated project with the modified schemas
                        return { ...project, schemas: updatedSchemas };
                    }
                    return project;
                });
            
                // Set the updated state
                set((state) => ({
                    ...state,
                    projects: updatedProjects
                }))
            },

            onNodesChange: (changes) => {

                set({
                    
                })
            },

            changeLocation: (projectId: string, schemaId: string, newPosition: { x: number, y: number }) => {
                console.log("changed");
                
                // Get the current state
                const projects = get().projects;
            
                // Find the project by projectId
                const updatedProjects = projects.map((project) => {
                    if (project.id === projectId) {
                        // Find the schema by schemaId
                        const updatedSchemas = project.schemas.map((schema) => {
                            if (schema.id === schemaId) {
                                // Update the position of the schema
                                const updatedSchema = { ...schema, position: newPosition };
            
                                // Return the updated schema
                                return updatedSchema;
                            }
                            return schema;
                        });
            
                        // Return the updated project with the modified schemas
                        return { ...project, schemas: updatedSchemas };
                    }
                    return project;
                });
            
                // Set the updated state
                set((state) => ({
                    ...state,
                    projects: updatedProjects
                }))
            }
            
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