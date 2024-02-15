import { ColumnsProps } from "@/types";
import { getProjectProps, setProjectProps } from "./useProject";

export const deleteColumn = (projectId: string, schemaId: string, columnId: string, set: setProjectProps, get: getProjectProps) => {
    // Get the current state
    const projects = get().projects;

    // Find the project by projectId
    const updatedProjects = projects.map((project) => {
        if (project.id === projectId) {
            // Find the schema by schemaId
            const updatedSchemas = project.schemas.map((schema) => {
                if (schema.data.id === schemaId) {
                    // Filter out the column with the specified columnId
                    const updatedColumns = schema.data.columns.filter((column: ColumnsProps) => column.id !== columnId);

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

    set((state) => ({
        ...state,
        projects: updatedProjects
    }));
}