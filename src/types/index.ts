export type ProjectProps = {
    id: string
    name: string
    description: string | undefined,
    schemas: SchemasProps[]
}

export type SchemasProps = {
    id: string
    name: string
    columns: ColumnsProps[]
}

export type ColumnsProps = {
    id: string
    name: string
    value: string
    relations?: {
        fieldId: "",
        schemaId: "",
    }
    // value: "int" | "varchar" | "date"
}