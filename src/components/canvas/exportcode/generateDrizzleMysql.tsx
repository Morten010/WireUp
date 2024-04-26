import { capitalizeFirstLetter } from "@/lib/capitalizeFirstLetter"
import { getRelations } from "@/lib/getRelations"
import { getTypeMysql } from "@/lib/getTypes"
import { ColumnsProps, ProjectProps, SchemasProps } from "@/types"

export const generateDrizzleMysql = (project: ProjectProps) => {
    let finalSchemas = ""
    const imports: string[] = []
    let finalImport = `${project.edges.length !== 0 ? `import { relations } from "drizzle-orm";\n` : ""}import {\n\tmysqlTable,\n`
    // `import {\n ${finalImport} \tmysqlTable\n} from "drizzle-orm/mysql-core"\n\n
    project?.schemas[0] as SchemasProps
    project.schemas.map((schema) => {
        let columns = ""
        let relation = "";

        schema.data.columns.map((column: ColumnsProps) => {
            let reference = "";

            columns += `\t${column.name}: ${getTypeMysql(column.value, column.name)}${column.nullable ? "" : ".notNull()"},\n`
            if(!imports.includes(column.value)){
                imports.push(column.value)
            }

            if(column.relations && column.relations[0]){
                const relations = getRelations(column, schema, project)
                console.log(relations);
                
                relation = `\n\n${relations}`
            }
            
        })

        const table = `export const ${schema.data.name} = mysqlTable("${schema.data.name}", {\n${columns}});` 

        console.log(relation);
        
        finalSchemas +=`${table} ${relation.length ? `${relation}` : ""}export type Select${capitalizeFirstLetter(schema.data.name)} = typeof ${schema.data.name}.$inferSelect;\nexport type Insert${capitalizeFirstLetter(schema.data.name)} = typeof ${schema.data.name}.$inferInsert;\n\n`
    })

    imports.map(imp => {
        finalImport += `\t${imp},\n`
    })
    finalImport += `} from "drizzle-orm/mysql-core"\n\n`

    return`${finalImport}${finalSchemas}`
}