import { ColumnsProps, ProjectProps, SchemasProps } from "@/types";
import { getProjectProps, setProjectProps } from "./useProject";


export const deleteSchema = (projectId: string, schemaId: string, get: getProjectProps, set: setProjectProps) => {
    const projects = get().projects;
    
    const newProjects: ProjectProps[] = projects.map((p: ProjectProps) => {

        if(p.id === projectId){
            const schemas: SchemasProps[] = p.schemas.filter(( schema: SchemasProps ) => schema.data.id !== schemaId)
 
            const updatedSchemas = schemas.map(schema => {
                const updatedColumns = schema.data.columns.map((column: ColumnsProps) => {
                    if(column.relations){
                        const updatedRelations = column.relations.filter(rel => {
                            if(
                                schemaId === rel.tableOne ||
                                schemaId === rel.tableTwo
                            ){
                                return
                            }else{
                                return rel
                            }
                        })
                        return{
                            ...column,
                            relations: updatedRelations
                        } as ColumnsProps
                    }else{
                        return column
                    }
                })
                return {
                    ...schema,
                    data: {
                        ...schema.data,
                        columns: updatedColumns
                    }
                }
            })

            const updatedEdges = p.edges.filter(edge => {
                console.log(edge.target);
                console.log(schemaId);
                console.log(edge.source);
                
                if(
                    edge.target === schemaId ||
                    edge.source === schemaId    
                ){
                    return
                }else{
                    return edge
                }
            })

            return {
                ...p,
                schemas: updatedSchemas,
                edges: updatedEdges
            }
        }

        return p
    })

    set((state) => ({
        ...state,
        projects: newProjects
    }))
}