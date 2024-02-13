"use client"
import AddSchemaButton from '@/components/custom-ui/AddSchemaButton';
import { FC } from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Table from './components/Table';
import { useProject } from '@/store/useProject';

interface indexProps {
  params: {
    id: string
  }
}

const index: FC<indexProps> = ({ params: { id } }) => {
  const state = useProject()
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
        className='flex-grow relative p-5 overflow-auto max-h-[calc(100vh-102px)] dots'
        // style={{
        //   backgroundColor: "transparent",
        //   backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23282828' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='0'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
        // }}
        >
          <AddSchemaButton
          id={project?.id}
          className='absolute top-5 right-5'
          />

          {/* canvas */}
          <div
          className='flex gap-4 flex-wrap'
          
          >
            {!!project && project.schemas?.map(p => (
              <Table 
              schema={p}
              />
            ))}
          </div>
          {/* end of canvas */}

        </div>
      </main>
      {/* end of main */}
    </div>
  )
}

export default index