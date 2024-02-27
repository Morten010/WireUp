import { ColumnsProps, ProjectProps, SchemasProps } from "@/types";

export const getRelations = (column: ColumnsProps, schema: SchemasProps, project: ProjectProps) => {
    if(!column.relations?.length) return ""
    let relations: string[] = [];

    column.relations.map(rel => {
        console.log(rel);

        switch (rel.connectionType) {
            case "one-to-one":
                let refrenceTable;
                let refrenceColumn;
                let relTable;
                let relColumn;

                for(const s of project.schemas){
                    if(s.data.id === rel.tableOne || s.data.id === rel.tableOne){
                        if(s.data.id !== schema.data.id){
                            for(const c of s.data.columns){
                                if(c.relations){
                                    if(c.id === rel.columnOne || c.id === rel.columnTwo)
                                    console.log("something");
                                    
                                    for(const r of c.relations){
                                        if(r.columnOne === rel.columnOne && r.columnTwo === rel.columnTwo){
                                            console.log("Found");
                                            if(column.name === "id" || column.name === "Id" && rel.columnOne === column.id){

                                            }else{
                                                relations.push(`\n\t${s.data.name}: one(${s.data.name}, {\n\t\tfields: [${schema.data.name}.${column.name}],\n\t\treferences: [${s.data.name}.${c.name}],\n\t}),\n`)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                }
                break;
                case "one-to-many":
                    return "// Yet to make one-to-many insert here yourself"
                    break
                case "one-to-many":
                    return "// Yet to make many-to-one insert here yourself"
                    break
            default:
                relations.push("Other")
                break;
        }

        console.log(rel);
        
    })

    let text = "";

    for(const relText of relations){
        text += relText
    }

    if(!text.length){
        return ""
    }
    

    const formattedRelation = `export const ${schema.data.name}Relations = relations(${schema.data.name}, ({ one, many }) => ({${text}}));\n\n\n`
    
    console.log(formattedRelation);
    
    return formattedRelation
}