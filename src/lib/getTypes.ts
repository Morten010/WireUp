export const getTypeMysql = (type: string, name: string) => {
    // types to add 
    // https://orm.drizzle.team/docs/column-types/mysql
    switch (type) {
        case "int":
            return `int("${name}")`;
        case "tinyint":
            return `tinyint("${name}")`;
        case "smallint":
            return `smallint("${name}")`;
        case "mediumint":
            return `mediumint("${name}")`;
        case "bigint":
            return `bigint("${name}", { mode: 'number' })`;
        case "real":
            return `real("${name}")`;
        case "decimal":
            return `decimal("${name}")`;
        case "double":
            return `double("${name}")`;
        case "float":
            return `float("${name}")`;
        case "serial":
            return `serial("${name}")`;
        case "binary":
            return `binary("${name}")`;
        case "varbinary":
            return `varbinary("${name}", { length: 2 })`;
        case "char":
            return `char("${name}")`;
        case "varchar":
            return `varchar("${name}")`;
        case "text":
            return `text("${name}")`;
        case "boolean":
            return `boolean("${name}")`;
        case "date":
            return `date("${name}")`;
        case "datetime":
            return `datetime("${name}")`;
        case "time":
            return `time("${name}")`;
        case "year":
            return `year("${name}")`;
        case "timestamp":
            return `timestamp("${name}")`;
        case "json":
            return `json("${name}")`;
        default:
            return "missing";
    }
    
}