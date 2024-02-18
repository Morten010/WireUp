import {
    Edge,
    Node
} from 'reactflow';

export type RelationProps = {
    tableOne: string
    columnOne: string
    connectionType: string; // type of connection, e.g., 'one-to-one', 'many-to-one', etc.
    tableTwo: string; // table of the target connection
    columnTwo: string; // ID of the target column
}

export type ProjectProps = {
    id: string
    name: string
    description: string | undefined,
    schemas: SchemasProps[]
    edges: Edge[];
}

export type SchemasProps = Node & {
    data: {
        id: string
        name: string
        columns: ColumnsProps[]
    },
}

export type ColumnsProps = {
    id: string
    name: string
    value: string
    nullable: boolean
    relations?: RelationProps[]
}
