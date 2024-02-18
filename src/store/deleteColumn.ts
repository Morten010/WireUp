import { ColumnsProps, ProjectProps, RelationProps, SchemasProps } from "@/types";
import { getProjectProps, setProjectProps } from "./useProject";

export const deleteColumn = (projectId: string, schemaId: string, columnId: string, set: setProjectProps, get: getProjectProps) => {
    // Get the current state
    const projects = get().projects;
    const deletedRelations: RelationProps[] = []
    // Find the project by projectId
    const updatedProjects = projects.map((project) => {
        if (project.id === projectId) {
            // Find the schema by schemaId
            const updatedSchemas = project.schemas.map((schema) => {
                if (schema.data.id === schemaId) {
                    // Filter out the column with the specified columnId
                    const updatedColumns = schema.data.columns.filter((column: ColumnsProps) => {
                        if(column.id !== columnId){
                            return column
                        }else{
                            if(column.relations){
                                deletedRelations.push(...column.relations)
                            }
                        }
                    });

                    // Return the updated schema with the filtered columns
                    return { ...schema, data: { ...schema.data, columns: updatedColumns } };
                }
                return schema;
            });

            // Return the updated project with the modified schemas
            return { ...project, schemas: updatedSchemas };
        }
        return project;
    });

    // remove any relations to the deleted column
    const finalProjects = updatedProjects.map(project => {
        if(project.id === projectId){
            const updatedSchemas = project.schemas.map(schema => {
                const updatedColumns = schema.data.columns.map((column: ColumnsProps) => {
                    if(column.relations){
                        const updatedRelations = column.relations.filter(rel => {
                            
                            if(deletedRelations.find(delRel => {
                                if(delRel.columnOne === rel.columnOne && delRel.columnTwo === rel.columnTwo ){
                                    return delRel
                                }
                            })){
                                return
                            }else{
                                return rel
                            }
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
                } as SchemasProps
            })

            const updatedEdges = project.edges.filter(edge => {
                let passed = true
                for(const rel of deletedRelations){
                    if(
                        edge.id.includes(rel.columnOne+"-right") &&
                        edge.id.includes(rel.columnTwo+"-left")
                    ){
                        passed = false
                    }
                }

                if(passed){
                    return edge
                }
            })
            return {
                ...project,
                schemas: updatedSchemas,
                edges: updatedEdges
            } as ProjectProps
        }

        return project
    })

    set((state) => ({
        ...state,
        projects: finalProjects
    }));
}