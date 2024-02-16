import { ColumnsProps, RelationProps } from "@/types";
import { getProjectProps, setProjectProps } from "./useProject";
import { Edge } from "reactflow";

export const getEdge = (edgeId: string, tableOne: string, tableTwo: string,  get: getProjectProps) => {
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
                            // {
                            //     source: 'UeMD4TIXYOuvZ5rN14gm_',
                            //     sourceHandle: 'wkl2QNVQdDZZXzb77ooth-right',
                            //     target: 'T3JpGYNxIM98AjIA3dP8o',
                            //     targetHandle: 'Ilw_0ydryQdP_Ora5oJfO-left',
                            //     type: 'customEdge',
                            //     id: 
                            //       'reactflow__edge-UeMD4TIXYOuvZ5rN14gm_wkl2QNVQdDZZXzb77ooth-right-T3JpGYNxIM98AjIA3dP8oIlw_0ydryQdP_Ora5oJfO-left'
                            //   },
                            
                            if(e.id === edgeId){
                                if(e.source === ""){
                                    
                                }
                            }
                            if(column.id === relation.columnOne){
                                if(relation.tableOne === tableOne && relation.tableTwo === tableTwo) {
                                    
                                    column1 = column.name
                                }
                            }
                            if(column.id === relation.columnTwo){
                                if(relation.tableOne === tableOne && relation.tableTwo === tableTwo) {
                                    column2 = column.name
                                }
                            }
                            
                            if(e.id === edgeId){
                                if(
                                    relation.columnOne === columnOne && 
                                    columnTwo === relation.columnTwo &&
                                    relation.tableOne === tableOne &&
                                    relation.tableTwo === tableTwo
                                    ){
                                    
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