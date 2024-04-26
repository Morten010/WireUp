import { getProjectProps, setProjectProps } from "./useProject"


export const deleteProject = (projectId: string, get: getProjectProps, set: setProjectProps) => {
    const projects = get().projects

    const filterdProjects = projects.filter(p => p.id !== projectId)

    set({
        projects: filterdProjects
    })
}