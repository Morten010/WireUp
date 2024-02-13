import { Button } from '@/components/ui/button'
import { useProject } from '@/store/useProject'
import { SchemasProps } from '@/types'
import { useParams } from 'next/navigation'
import { FC } from 'react'
import { FaTrash } from 'react-icons/fa6'
import { TbColumnInsertLeft, TbTableRow } from 'react-icons/tb'
import ColumnContextMenu from '../../../../components/custom-ui/ColumnContextMenu'
import AddColumnButton from './AddColumnButton'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface SideSchemaProps {
  schema: SchemasProps
}

const SideSchema: FC<SideSchemaProps> = ({schema: schema}) => {
  const { id }: { id: string } = useParams()
  const state = useProject();
  const project = state?.getProject(id)

  return(
    <div
    className='border-y border-border/40'
    >
      <div
      className='flex justify-between items-center py-2 px-4'
      >
        <p>
          {schema.name}
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
        {schema.columns?.map(c => (
          <ColumnContextMenu
          schemaId={schema.id}
          columnId={c.id}
          >
            <div
            className='py-2 px-4 flex justify-between cursor-pointer hover:bg-border/20 transition-colors'
            >
              <p
              className='flex gap-2 items-center'
              >
                <TbTableRow />
                {c.name}
              </p>
              <span
              className='text-muted-foreground'
              >
                {c.value}
              </span>
            </div>
          </ColumnContextMenu>
        ))}
      </div>
    </div>
  )
}

export default SideSchema