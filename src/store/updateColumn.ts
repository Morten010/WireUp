import { ColumnsProps } from "@/types";
import { getProjectProps, setProjectProps } from "./useProject";

export const updateColumn = (schemaId: string, columnId: string, updatedColumn: ColumnsProps, get: getProjectProps, set: setProjectProps) => {
    const projects = get().projects;

    const updatedProjects = projects.map((project) => {
        const updatedSchemas = project.schemas.map((schema) => {
            if (schema.id === schemaId) {
                const updatedColumns = schema.data.columns.map((column: ColumnsProps) => {
                    if (column.id === columnId) {
                        // Update the matched column
                        return updatedColumn;
                    }
                    return column;
                });

                return {
                    ...schema,
                    data: {
                        ...schema.data,
                        columns: updatedColumns,
                    },
                };
            }
            return schema;
        });

        return {
            ...project,
            schemas: updatedSchemas,
        };
    });

    set((state) => ({
        ...state,
        projects: updatedProjects,
    }));
};
