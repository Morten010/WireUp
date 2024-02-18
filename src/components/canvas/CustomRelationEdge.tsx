import { BaseEdge, EdgeLabelRenderer, EdgeProps, getSmoothStepPath, useReactFlow } from 'reactflow';

import { FC, Fragment, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { TbRelationOneToOne } from 'react-icons/tb';
import { FaTrash } from 'react-icons/fa6';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { DropdownMenuGroup, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { useProject } from '@/store/useProject';
import { toast } from 'sonner';

type CustomRelationEdgeProps = EdgeProps

const CustomRelationEdge: FC<CustomRelationEdgeProps> = ({sourceX, sourceY, targetX, targetY, id, source, target}) => {
    const state = useProject()
    const edge = state?.getEdge(id, source, target)
    const [connectionType, setConnectionType] = useState("")
    const [edgePath, labelX, labelY] = getSmoothStepPath({
      sourceX,
      sourceY: sourceY,
      targetX,
      targetY,
    });
    
    
    useEffect(() => {
      
      if(edge?.edges[0]?.relations !== undefined){
        if(edge?.edges[0]?.relations[0].connectionType !== connectionType){
          
          setConnectionType(edge?.edges[0]?.relations[0].connectionType)
        }
        
      } 
    }, [edge])
    
    
    
      return (
        <Fragment
        key={id}
        >
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
                    className={`p-2 cursor-pointer hover:bg-border/30 rounded text-sm capitalize ${connectionType === "one-to-one" ? "bg-purple-600/10 hover:bg-purple-600/20" : ""}`}
                    onClick={() => connectionType === "one-to-one" ? toast.error("Already one-to-one relation") : state?.updateRelation("one-to-one", edge)}
                    >
                      one {edge?.columnOne} to  one {edge?.columnTwo}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                    className={`p-2 cursor-pointer hover:bg-border/30 rounded text-sm capitalize ${connectionType === "one-to-many" ? "bg-purple-600/10 hover:bg-purple-600/20" : ""}`}
                    onClick={() => connectionType === "one-to-many" ? toast.error("Already one-to-one relation") :  state?.updateRelation("one-to-many", edge)}
                    >
                      one {edge?.columnOne} to many {edge?.columnTwo}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                    className={`p-2 cursor-pointer hover:bg-border/30 rounded text-sm capitalize ${connectionType === "many-to-one" ? "bg-purple-600/10 hover:bg-purple-600/20" : ""}`}
                    onClick={() => connectionType === "many-to-one" ? toast.error("Already one-to-one relation") : state?.updateRelation("many-to-one", edge)}
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
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </EdgeLabelRenderer>
        </Fragment>
      )
}

export default CustomRelationEdge