
const getRelation = (relationType: string, schemaName: string, columnName: string, relatedSchema: string, relatedColumnName: string,) => {
    switch (relationType) {
        case "one-to-one":
            return `export const ${schemaName}Relations = relations(${schemaName}, ({ one }) => ({\n\tinvitee: one(${schemaName}, {\n\t\tfields: [${schemaName}.${columnName}],\n\t\treferences: [.id],\n\t}),\n}));`
            break;
    
        default:
            break;
    }
}