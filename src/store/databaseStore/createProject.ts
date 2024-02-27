import { ProjectProps } from "@/types";
import { setProjectProps } from "./useProject";

export const createProject = (project: ProjectProps, set: setProjectProps) => set((state) => ({
    ...state, 
    projects: [
        ...state.projects,
        project
    ]
}))