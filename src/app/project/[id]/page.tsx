"use client"
import AddSchemaButton from '@/components/custom-ui/AddSchemaButton';
import { FC, useCallback, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import { useProject as getProject } from '@/store/dup';
import ReactFlow, {Background, ControlButton, Controls, MiniMap, Node, Position, addEdge, applyNodeChanges, useEdgesState, useNodesState} from 'reactflow';
import 'reactflow/dist/style.css';
import LoadingScreen from '@/components/LoadingScreen';
import CustomTableNode from '@/components/canvas/CustomTableNode';
import { useTheme as getTheme } from 'next-themes';
import CustomRelationEdge from '@/components/canvas/CustomRelationEdge';

interface indexProps {
  params: {
    id: string
  }
}


const index = ({ params: { id } }: indexProps) => {
  const { theme } = getTheme()
  const state = getProject()
  const project = state?.getProject(id)
  const nodeTypes = useMemo(() => ({ table: CustomTableNode }), []);
  const edgeTypes = useMemo(() => ({ customEdge: CustomRelationEdge }), []);

  const [edges, setEdges] = useEdgesState([]);
  const [nodes, setNodes] = useNodesState([]);

  useEffect(() => {
    if(!project) return

    const projectNodes = project.schemas.map(schema => {
      return{
        id: schema.id,
        type: "table",
        position: {
          x: schema.position?.x ? schema.position.x : 0 ,
          y: schema.position?.y ? schema.position.y : 0
        },
        data: {
          ...schema
        }
      }
    })
  
    setNodes(projectNodes)
    setEdges(project.edges)
  }, [project])
  


  return (
    <div
    className='h-screen'
    >
      {!project && <LoadingScreen />}
      <TopNav
      id={id}
      />
      {/* main */}
      <main
      className='flex h-[calc(100vh-80.8px)]'
      >
        <Sidebar />
        <div
        className='flex-grow relative overflow-hidden max-h-[calc(100vh-78px)]'
        >
          <AddSchemaButton
          id={project?.id}
          className='absolute top-5 right-5 z-10'
          />

          {/* canvas */}
            {project && (
              <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={(changes) => state?.onNodesChange(id, changes)}
              onEdgesChange={(changes) => state?.onEdgesChange(id, changes)}
              onConnect={(connection) => state?.onConnect(id, connection)}
              nodeTypes={nodeTypes}
              proOptions={{
                hideAttribution: true,
              }}
              edgeTypes={edgeTypes}
              >
                <Background 
                color='#1f2937'
                size={1.2}
                />
                <Controls
                style={{
                  backgroundColor: "#030712",
                  display: "flex",
                  border: "1px solid #1f2937",
                  borderRadius: "0.2rem",
                  overflow: 'hidden'
                }}
                />
                {/* <MiniMap
                maskStrokeColor='#6d28d9'
                style={{
                  backgroundColor: theme === "dark" ? "#030712" : "white",
                  color: "blue",
                  borderRadius: "0.3rem",
                  overflow: 'hidden'
                }}
                maskColor={"#6d28d920"}
                nodeColor="#6d28d9"
                /> */}
              </ReactFlow>
                
            )}
          {/* end of canvas */}

        </div>
      </main>
      {/* end of main */}
    </div>
  )
}

export default index