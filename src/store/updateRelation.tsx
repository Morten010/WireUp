import { ColumnsProps, RelationProps } from "@/types";
import { getProjectProps, setProjectProps } from "./useProject";
import { Edge } from "reactflow";

export const updateRelation = (change: string, edge: { 
    edge: Edge | undefined, 
    edges: ColumnsProps[], 
    columnOne: string | undefined
    columnTwo: string | undefined
}, get: getProjectProps, set: setProjectProps ) => {
    console.log(edge, change);
    const projects = get().projects

    const updatedProjects = projects.map(project => {
        const updatedSchemas = project.schemas.map(schema => {
            const updatedColumns: ColumnsProps = schema.data.columns.map((column: ColumnsProps) => {
                if(column.relations){
                    const updatedRelations = column.relations.map(r => {
                        const columnOne = edge?.edge?.sourceHandle?.replace("-right", "")
                        const columnTwo = edge?.edge?.targetHandle?.replace("-left", "")

                        if(r.columnOne === columnOne && r.columnTwo === columnTwo){
                            const relation = {
                                ...r,
                                connectionType: change
                            } as RelationProps
                            console.log(relation);
                            
                            return relation
                        }

                        return r
                    })

                    return {
                        ...column,
                        relations: updatedRelations
                    } as ColumnsProps
                }

                return column
            })
            
            return {
                ...schema,
                data: {
                    ...schema.data,
                    columns: updatedColumns
                }
            } 
        })

        return {
            ...project,
            schemas: updatedSchemas
        }
    })

    set({  
        projects: updatedProjects
    })
}