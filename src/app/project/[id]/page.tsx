"use client"
import LoadingScreen from '@/components/LoadingScreen';
import CustomRelationEdge from '@/components/canvas/CustomRelationEdge';
import CustomTableNode from '@/components/canvas/CustomTableNode';
import AddSchemaButton from '@/components/custom-ui/AddSchemaButton';
import { useProject as getProject } from '@/store/databaseStore/useProject';
import { useEffect, useMemo, useState } from 'react';
import ReactFlow, { Background, Controls, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import TopNav from '../../../components/custom-ui/TopNav';
import Link from 'next/link';
import Sidebar from '@/components/sidebar/Sidebar';
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

interface indexProps {
  params: {
    id: string
  }
}


const index = ({ params: { id } }: indexProps) => {
  const state = getProject()
  const project = state?.getProject(id)
  const nodeTypes = useMemo(() => ({ table: CustomTableNode }), []);
  const edgeTypes = useMemo(() => ({ customEdge: CustomRelationEdge }), []);
  const [edges, setEdges] = useEdgesState([]);
  const [nodes, setNodes] = useNodesState([]);
  const [hidden, setHidden] = useState(false)


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
      {!state && !project && <LoadingScreen />}
      {/* if state has arrived but no project found */}
      {!!state && !project && (
        <div
        className='absolute top-0 left-0 w-full h-screen grid place-content-center backdrop-blur z-20 text-center'
        >
          <h2
          className='text-xl font-bold'
          >
            Project not found
          </h2>
          <p
          className='text-muted-foreground text-sm'
          >
            Go back to the <Link
            href="/"
            className='text-primary hover:text-primary/70 transition-colors'
            >
            homepage
            </Link>
          </p>
        </div>
      )}
      <TopNav
      id={id}
      />
      {/* main */}
      <main
      className='flex h-screen sm:h-[calc(100vh-80.8px)]'
      >
        <div
        className='relative'
        >
          {!hidden && <Sidebar />}
          <div
          className='absolute left-full bg-background p-1 grid place-content-center text-2xl top-3 z-30 border-t border-r border-b rounded-r cursor-pointer  hover:bg-accent hideOnIframe transition-all'
          onClick={() => setHidden(!hidden)}
          >
            {hidden ? <CgChevronRight className='pr-1' /> :
            <CgChevronLeft className='pr-1' />}
          </div>
        </div>
        <div
        className=' flex-grow relative overflow-hidden sm:max-h-[calc(100vh-78px)]'
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