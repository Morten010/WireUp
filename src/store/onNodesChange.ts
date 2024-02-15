import { NodeChange } from "reactflow";
import { getProjectProps, setProjectProps } from "./useProject";

export const onNodesChange = (projectId: string, changes: NodeChange[], get: getProjectProps, set: setProjectProps) => {

    // Get the current state
    const projects = get().projects;

    // Find the project by projectId
    const updatedProjects = projects.map((project) => {
        if (project.id === projectId) {
            // Find the schema by schemaId

            // Return the updated project with the modified schemas
            console.log(changes[0].type);
            
            const schemas = project.schemas.map(schema => {
                if(changes[0].type === "position"){
                    if(!!changes[0].position){
                        if(schema.data.id === changes[0].id){
                            console.log(changes[0].position);
                            
                            return {
                                ...schema,
                                position: {
                                    ...changes[0].position
                                }
                            }
                        }
                    }
                }
                return schema
            })

            return { 
                ...project, 
                schemas: schemas
            };
        }
        return project;
    });

    set({
        projects: updatedProjects
    })
}