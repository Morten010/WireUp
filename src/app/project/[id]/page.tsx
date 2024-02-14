"use client"
import AddSchemaButton from '@/components/custom-ui/AddSchemaButton';
import { FC } from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Table from './components/Table';
import { useProject as getProject } from '@/store/useProject';
import Canvas from '@/components/dnd/Canvas';

interface indexProps {
  params: {
    id: string
  }
}

const index: FC<indexProps> = ({ params: { id } }) => {
  const state = getProject()
  const project = state?.getProject(id)

  console.log(project);
  
  
  return (
    <div
    className='h-screen'
    >
      <TopNav 
      id={id}
      />
      {/* main */}
      <main
      className='flex h-[calc(100vh-81px)]'
      >
        <Sidebar />
        <div
        className='flex-grow relative overflow-hidden max-h-[calc(100vh-102px)] dots'
        >
          <AddSchemaButton
          id={project?.id}
          className='absolute top-5 right-5 z-50'
          />

          {/* canvas */}
            {project && <Canvas 
            project={project}
            />}
          {/* end of canvas */}

        </div>
      </main>
      {/* end of main */}
    </div>
  )
}

export default index