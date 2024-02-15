import { Connection, addEdge } from "reactflow";
import { getProjectProps, setProjectProps } from "./useProject";
import { ColumnsProps, RelationProps, SchemasProps } from "@/types";

export const onConnect = (projectId: string, connection: Connection, get: getProjectProps, set: setProjectProps) => {
    const projects = get().projects;

    set((state) => ({
        projects: state.projects.map((project) => {
            if (project.id === projectId) {
                const updatedEdges = addEdge({ ...connection, type: 'customEdge' }, project.edges);
    
                // Ensure one-to-one connection by removing existing edges with the same source
                const filteredEdges = updatedEdges.filter(edge => edge.source !== connection.source);
    
                // Extract target column information from connection
                const relation: RelationProps = {
                    columnOne: connection.sourceHandle?.replace("-right", "") || "failed",
                    columnTwo: connection.targetHandle?.replace("-left", "") || "failed",
                    connectionType: "one-to-one",
                    tableOne: connection.source || "failed",
                    tableTwo: connection.target || "failed",
                };
                
                // update the two columns relations
                const updatedRelations = project.schemas.map(schema => {

                    // check if schema has been changed
                    if(schema.data.id === connection.source || schema.data.id === connection.target){
                        const updatedSchema = schema.data.columns.map((column: ColumnsProps) => {

                            // check if column has been changed
                            if(column.id === relation.columnOne || column.id === relation.columnTwo){
                                // insert relation into column
                                console.log(relation);
                                
                                return {
                                    ...column,
                                    relations: [
                                        relation
                                    ]
                                } as ColumnsProps
                            }

                            // if column hasn't changed return it
                            return column
                        })

                        return {
                            ...schema,
                            data: {
                                ...schema.data,
                                columns: updatedSchema
                            }
                        } as SchemasProps
                    }
                    
                    // if schema hasn't been changed return
                    return schema
                })
                
                return {
                    ...project,
                    edges: filteredEdges.concat(updatedEdges),
                    schemas: updatedRelations,
                };
            }
            return project;
        }),
    }));
    
                    
}