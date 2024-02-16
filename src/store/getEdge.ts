import { ColumnsProps, RelationProps } from "@/types";
import { getProjectProps, setProjectProps } from "./useProject";
import { Edge } from "reactflow";

export const getEdge = (edgeId: string, get: getProjectProps, set: setProjectProps) => {
    const projects = get().projects;

    const columns: ColumnsProps[] = []
    let column1: string | undefined;
    let column2: string | undefined;
    let finalEdge: Edge | undefined;
    for (const project of projects) {
        for (const schema of project.schemas) {
            for (const column of schema.data.columns) {
                if (column.relations) {
                    column.relations.find((relation: RelationProps) => {
                        project.edges.find(e => {
                            const columnOne = e?.sourceHandle?.replace("-right", "")
                            const columnTwo = e?.targetHandle?.replace("-left", "")

                            if(column.id === relation.columnOne){
                                console.log("match");
                                console.log(column.name);
                                console.log(column);
                                
                                column1 = column.name
                            }
                            if(column.id === relation.columnTwo){
                                console.log("match");
                                console.log(column.name);

                                column2 = column.name
                            }
                            
                            if(e.id === edgeId){
                                console.log("return");
                                console.log(e.id);
                                console.log(edgeId);
                                
                                if(relation.columnOne === columnOne && columnTwo === relation.columnTwo){
                                    column as ColumnsProps;
                                    columns.push(column)
                                }
                                finalEdge = project.edges.find(e => e.id === edgeId)
                            }
                        })
                    });
                }
            }
        }
    }

    return {
        edge: finalEdge,
        edges: columns,
        columnOne: column1,
        columnTwo: column2
    };
    
} 