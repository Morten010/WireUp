import { ColumnsProps, ProjectProps, SchemasProps } from "@/types";

export const getRelations = (column: ColumnsProps, schema: SchemasProps, project: ProjectProps) => {
    if(!column.relations?.length) return ""
    let relations: string[] = [];

    column.relations.map(rel => {
        console.log(rel);

        switch (rel.connectionType) {
            case "one-to-one":
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
                    console.log("ran");
                    
                    for(const s of project.schemas){
                        if(s.data.id === rel.tableOne || s.data.id === rel.tableOne){
                            for(const c of s.data.columns){
                                if(c.relations){
                                    if(c.id === rel.columnOne || c.id === rel.columnTwo)
                                    console.log("something");
                                    
                                    for(const r of c.relations){
                                        if(r.columnOne === rel.columnOne && r.columnTwo === rel.columnTwo){
                                            console.log("Found");
                                            if(rel.columnOne === column.id){
                                                console.log("Ran");
                                                
                                                relations.push(`\n\t${schema.data.name}s: many(${s.data.name}),\n`)
                                            }else if(rel.columnTwo === column.id){
                                                relations.push(`\n\t${s.data.name}: one(${s.data.name}, {\n\t\tfields: [${schema.data.name}.${column.name}],\n\t\treferences: [${s.data.name}.${c.name}],\n\t}),\n`)
                                                console.log("Ran");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        
                    }
                    break
                case "many-to-one":
                    console.log("ran");
                    for(const s of project.schemas){
                        if(s.data.id === rel.tableOne || s.data.id === rel.tableOne){
                            for(const c of s.data.columns){
                                if(c.relations){
                                    if(c.id === rel.columnOne || c.id === rel.columnTwo)
                                    console.log("something");
                                    
                                    for(const r of c.relations){
                                        if(r.columnOne === rel.columnOne && r.columnTwo === rel.columnTwo){
                                            console.log("Found");
                                            if(rel.columnOne === column.id){
                                                relations.push(`\n\t${s.data.name}: one(${s.data.name}, {\n\t\tfields: [${schema.data.name}.${column.name}],\n\t\treferences: [${s.data.name}.${c.name}],\n\t}),\n`)
                                            }else if(rel.columnTwo === column.id){
                                                relations.push(`\n\t${schema.data.name}s: many(${s.data.name}),\n`)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        
                    }
                    break
            default:
                relations.push("\n\tSomething went wrong.")
                break;
        }

    })

    let text = "";

    for(const relText of relations){
        text += relText
    }

    if(!text.length){
        return ""
    }
    

    const formattedRelation = `export const ${schema.data.name}Relations = relations(${schema.data.name}, ({ one, many }) => ({${text}}));\n\n`
    
    console.log(formattedRelation);
    
    return formattedRelation
}