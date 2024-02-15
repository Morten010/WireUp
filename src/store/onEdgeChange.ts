import { EdgeChange, applyEdgeChanges } from "reactflow";
import { getProjectProps, setProjectProps } from "./useProject";
import { ColumnsProps, ProjectProps, SchemasProps } from "@/types";

export const onEdgeChange = (projectId: string, changes: EdgeChange [], set: setProjectProps, get: getProjectProps ) => {
    // Get the current state
    const projects = get().projects;
    console.log(changes);
    console.log(changes[0].type);

    if(changes[0].type === "remove"){
        const edgeId = changes[0].id

        const updatedProjects = projects.map(project => {
            // if project have beenChanged
            if(project.id === projectId){
                const edge = project.edges.find(e => e.id === edgeId)
                const columnOne = edge?.sourceHandle?.replace("-right", "")
                const columnTwo = edge?.targetHandle?.replace("-left", "")
                const newEdges = project.edges.filter(e => e.id !== edgeId)
                
                // map through schemas of project
                const updatedSchemas = project.schemas.map(schema => {
                    const updatedColumns = schema.data.columns.map((column: ColumnsProps) => {
                        
                        if(column.id === columnOne || column.id === columnTwo){
                            console.log(column);
                            // remove relations
                            const removedRelations = column.relations?.filter(relation => {
                                if( relation.columnOne === columnOne && columnTwo === relation.columnTwo){
                                    console.log(relation);
                                    
                                    return
                                }
                                console.log("not removed");
                                
                                return relation
                            })

                            console.log({
                                ...column,
                                relations: removedRelations
                            });
                            

                            return {
                                ...column,
                                relations: removedRelations
                            } as ColumnsProps
                        }
                        return column
                    })
                
                    
                    return {
                        ...schema,
                        data: {
                            ...schema.data,
                            columns: updatedColumns
                        },
                    } as SchemasProps
                })

                return {
                    ...project,
                    schemas: updatedSchemas,
                    edges: newEdges
                } as ProjectProps
            }

            // if not right project return
            return project as ProjectProps
        })
        
        set({
            projects: updatedProjects
        })
        return
    }
    
    // Find the project by projectId
    const updatedProjects = projects.map((project) => {
        if (project.id === projectId) {
            // Update the edges for the specific project
            const updatedEdges = applyEdgeChanges(changes, project.edges);

            // Return the updated project with the modified edges
            return {
                ...project,
                edges: updatedEdges,
            };
        }
        return project;
    });

    // Set the updated state
    set({
        projects: updatedProjects,
    });
}