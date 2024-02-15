import { ProjectProps, SchemasProps } from "@/types";
import { getProjectProps, setProjectProps } from "./useProject";


export const deleteSchema = (projectId: string, schemaId: string, get: getProjectProps, set: setProjectProps) => {
    const projects = get().projects;
    console.log(projects);
    
    const newProjects: ProjectProps[] = projects.map((p: ProjectProps) => {

        if(p.id === projectId){
            const schemas: SchemasProps[] = p.schemas.filter(( schema: SchemasProps ) => schema.data.id !== schemaId)
 

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
}