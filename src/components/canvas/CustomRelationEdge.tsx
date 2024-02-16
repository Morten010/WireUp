import { BaseEdge, EdgeLabelRenderer, EdgeProps, getSmoothStepPath, useReactFlow } from 'reactflow';

import { FC } from 'react';
import { Button } from '../ui/button';
import { TbRelationOneToOne } from 'react-icons/tb';
import { FaTrash } from 'react-icons/fa6';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { DropdownMenuGroup, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { useProject } from '@/store/useProject';

type CustomRelationEdgeProps = EdgeProps

const CustomRelationEdge: FC<CustomRelationEdgeProps> = ({sourceX, sourceY, targetX, targetY, id}) => {
    const [edgePath, labelX, labelY] = getSmoothStepPath({
      sourceX,
      sourceY: sourceY,
      targetX,
      targetY,
    });
    console.log(id);
    
    const edge = useProject()?.getEdge(id)

    console.log(edge);

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
                  {edge ? (
                    <>
                    <DropdownMenuItem
                    className='p-2 cursor-pointer hover:bg-border/30 rounded text-sm capitalize'
                    >
                      one {edge?.columnOne} to  one {edge?.columnTwo}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                    className='p-2 cursor-pointer hover:bg-border/30 rounded text-sm capitalize'
                    >
                      one {edge?.columnOne} to many {edge?.columnTwo}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                    className='p-2 cursor-pointer hover:bg-border/30 rounded text-sm capitalize'
                    >
                      many {edge?.columnOne} to  one {edge?.columnTwo}
                    </DropdownMenuItem>
                    
                    </>
                  ) : (
                    <DropdownMenuItem
                    className='p-2 cursor-pointer hover:bg-border/30 rounded text-sm capitalize'
                    >
                      Could not find relation
                    </DropdownMenuItem>
                  )}
                  {/* <DropdownMenuItem
                  className='p-2 cursor-pointer hover:bg-border/30 rounded text-sm capitalize'
                  >
                    one to one relation
                  </DropdownMenuItem>
                  <DropdownMenuItem
                  className='p-2 cursor-pointer hover:bg-border/30 rounded text-sm capitalize'
                  >
                    one to many relation
                  </DropdownMenuItem>
                  <DropdownMenuItem
                  className='p-2 cursor-pointer hover:hover:bg-border/30 rounded text-sm capitalize'
                  >
                    many to many relation
                  </DropdownMenuItem> */}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </EdgeLabelRenderer>
        </>
      )
}

export default CustomRelationEdge