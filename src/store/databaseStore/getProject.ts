import { getProjectProps } from "./useProject"

export const getProject = (id: string, get: getProjectProps) => {
    const project = get().projects.find(p => p.id === id)
    
    return project
}