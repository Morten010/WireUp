"use client"
import { Button } from '@/components/ui/button'
import { useProject } from '@/store/useProject'
import { useParams } from 'next/navigation'
import { FC } from 'react'
import { FaTrash } from 'react-icons/fa6'
import { TbColumnInsertLeft, TbRelationOneToOne, TbTableRow } from 'react-icons/tb'
import ColumnContextMenu from '../../../../components/custom-ui/ColumnContextMenu'
import AddColumnButton from './AddColumnButton'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ColumnsProps, SchemasProps } from '@/types'

interface SideSchemaProps {
  schema: SchemasProps
}

const SideSchema: FC<SideSchemaProps> = ({schema: schema}) => {
  const { id }: { id: string } = useParams()
  const state = useProject();
  const project = state?.getProject(id)
  console.log(schema);
  
  return(
    <div
    className='border-y border-border/40'
    >
      <div
      className='flex justify-between items-center py-2 px-4'
      >
        <p>
          {schema && schema.data.name}
        </p>
        <div
        className='flex gap-2'
        >
          <AddColumnButton 
          schemaId={schema.id}
          />
          <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                  className='h-6 w-6 p-0 bg-red-600/80 hover:bg-red-600/40 hover:border-none border-none'
                  size={'sm'}
                  variant="outline"
                  onClick={() => state?.deleteSchema(project?.id!, schema.id)}
                  >
                    <FaTrash
                    className='text-[10px]'
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                className='text-[11px]'
                >
                    <p>Delete Table</p> 
                </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div
      className='border-l ml-8 mb-2'
      >
        {schema.data.columns?.map((c: ColumnsProps) => {
          const edges = project?.edges;
          const edge = edges?.find(edge => {
            if(edge.targetHandle?.replace("-left", "") === c.id || edge.sourceHandle?.replace("-right", "") === c.id){
              return edge
            }
          })

          return (
          <ColumnContextMenu
          key={c.name + c.id}
          schemaId={schema.id}
          columnId={c.id}
          column={c}
          >
            <div
            className='py-2 px-4 flex justify-between cursor-pointer hover:bg-border/20 transition-colors'
            >
              <p
              className='flex gap-2 items-center'
              >
                <TbTableRow />
                {c.name} {edge ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                      <Button
                      className='h-6 w-6 text-[10px]
                      grid place-content-center'
                      size="icon"
                      variant="outline"
                      >
                        <TbRelationOneToOne />
                      </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        have 1 or more relations
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : ""}
              </p>

              <span
              className='text-muted-foreground'
              >
                {c.value}
              </span>
            </div>
          </ColumnContextMenu>
        )})}
      </div>
    </div>
  )
}

export default SideSchema