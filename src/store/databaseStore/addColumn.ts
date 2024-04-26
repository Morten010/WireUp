import { ColumnsProps } from "@/types";
import { getProjectProps, setProjectProps } from "../databaseStore/useProject";


export const addColumn = (projectId: string, schemaId: string, newColumn: ColumnsProps, get: getProjectProps, set: setProjectProps) => {
    // Get the current state
    const projects = get().projects;

    // Find the project by projectId
    const updatedProjects = projects.map((project) => {
        if (project.id === projectId) {
            // Find the schema by schemaId
            const updatedSchemas = project.schemas.map((schema) => {
                if (schema.data.id === schemaId) {
                    // Add the new column to the existing columns
                    
                    const updatedColumns = [...schema.data.columns, newColumn];

                    // Return the updated schema with the new column
                    return { ...schema, data: { ...schema.data, columns: updatedColumns } };
                }
                return schema;
            });

            // Return the updated project with the modified schemas
            return { ...project, schemas: updatedSchemas };
        }
        return project;
    });

    // Set the updated state
    set({ projects: updatedProjects });
}