import { getTypeMysql } from "@/lib/getTypes"
import { ColumnsProps, ProjectProps, SchemasProps } from "@/types"

export const generateDrizzleMysql = (project: ProjectProps) => {
    let finalSchemas = ""

    project?.schemas[0] as SchemasProps
    project.schemas.map(schema => {
        let columns = ""

        schema.data.columns.map((column: ColumnsProps) => {
            columns += `\t${column.name}: ${getTypeMysql(column.value, column.name)}${column.nullable ? "" : ".notNull()"},\n`
        })

        const table = `export const ${schema.data.name} = mysqlTable("${schema.data.name}", {\n${columns}}` 

        finalSchemas += `${table} \n\n`
    })
    
    

    return finalSchemas
}