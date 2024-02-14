"use client"
import AddSchemaButton from '@/components/custom-ui/AddSchemaButton';
import { FC, useCallback, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import { useProject as getProject } from '@/store/useProject';
import ReactFlow, {Background, Controls, MiniMap, Node, Position, addEdge, applyNodeChanges, useEdgesState, useNodesState} from 'reactflow';
import 'reactflow/dist/style.css';
import LoadingScreen from '@/components/LoadingScreen';
import CustomTableNode from '@/components/canvas/CustomTableNode';
import { useTheme } from 'next-themes';

interface indexProps {
  params: {
    id: string
  }
}

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const index: FC<indexProps> = ({ params: { id } }) => {
  const { theme } = useTheme()
  const state = getProject()
  const project = state?.getProject(id)
  const nodeTypes = useMemo(() => ({ table: CustomTableNode }), []);

  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodes, setNodes] = useNodesState([]);
 
  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

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
          className='absolute top-5 right-5 z-50'
          />

          {/* canvas */}
            {project && (
              <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              >
                <Background 
                color='#1f2937'
                size={1.2}
                />
                <Controls 
                />
                <MiniMap
                maskStrokeColor='#6d28d9'
                style={{
                  backgroundColor: theme === "dark" ? "#030712" : "white",
                  color: "blue",
                  borderRadius: "0.3rem",
                  overflow: 'hidden'
                }}
                maskColor={"#6d28d920"}
                nodeColor="#6d28d9"
                />
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