import { ProjectProps, SchemasProps } from "@/types";
import { getProjectProps, setProjectProps } from "./useProject";


export const addSchema = (projectId: string, schema: SchemasProps, get: getProjectProps, set: setProjectProps) => {
    const projects = get().projects;

    const updatedProjects: ProjectProps[] = projects.map((p) => {

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
}