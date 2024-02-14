import { BaseEdge, EdgeLabelRenderer, EdgeProps, getSmoothStepPath, useReactFlow } from 'reactflow';

import { FC } from 'react';
import { Button } from '../ui/button';
import { TbRelationOneToOne } from 'react-icons/tb';
import { FaTrash } from 'react-icons/fa6';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { DropdownMenuGroup, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

type CustomRelationEdgeProps = EdgeProps

const CustomRelationEdge: FC<CustomRelationEdgeProps> = ({sourceX, sourceY, targetX, targetY, id}) => {
    // const { setEdges } = useReactFlow();
    const [edgePath, labelX, labelY] = getSmoothStepPath({
        sourceX,
        sourceY: sourceY,
        targetX,
        targetY,
      });
     
      return (
        <>
          <BaseEdge 
          style={{
            color: "red"
          }}
          id={id} 
          path={edgePath} 
          />
          <EdgeLabelRenderer>
            <DropdownMenu>
              <DropdownMenuTrigger
              style={{
                position: 'absolute',
                transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
                pointerEvents: 'all',
              }}   
              >
                <Button
                className='w-8 h-8 p-2'             
                >
                    <TbRelationOneToOne 
                    className='text-xl'
                    />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem
                  className='p-2 cursor-pointer hover:bg-muted/30 rounded text-sm'
                  >
                    one to one relation
                  </DropdownMenuItem>
                  <DropdownMenuItem
                  className='p-2 cursor-pointer hover:bg-muted/30 rounded text-sm'
                  >
                    one to many relation
                  </DropdownMenuItem>
                  <DropdownMenuItem
                  className='p-2 cursor-pointer hover:bg-muted/30 rounded text-sm'
                  >
                    many to many relation
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </EdgeLabelRenderer>
        </>
      )
}

export default CustomRelationEdge