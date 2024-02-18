import { Input } from '@/components/ui/input'
import { useProject } from '@/store/useProject'
import { SchemasProps } from '@/types'
import { useParams } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import SideSchema from './SideSchema'

interface SidebarProps {
  
}

const Sidebar: FC<SidebarProps> = ({}) => {
  const { id }: {id: string} = useParams()
  const [search, setSearch] = useState("")
  const [filteredProjects, setFilteredProjects] = useState<SchemasProps[] | undefined>()
  const state = useProject()
  const project = state?.getProject(id)

  useEffect(() => {
    if(!search) return setFilteredProjects(undefined);
    const filitedProjects = project?.schemas.filter((s) => s.data.name.toLocaleLowerCase().includes(search.toLowerCase()));
    console.log(filitedProjects);
    console.log(search);
    
    
    setFilteredProjects(filitedProjects)

  }, [search, project?.schemas])
  
  
  return (
    <div
    className='w-[330px] border-r h-full shadow max-h-[calc(100vh-81px)] overflow-auto hideOnIframe'
    >
      <div
      className='relative p-4 border-b'
      >
          <IoMdSearch 
          className='absolute text-xl top-2/4 -translate-y-2/4 ml-2'
          />
          <Input 
          className='pl-8'
          placeholder='Search for schema...'
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          />
      </div>

      <div>
        {!search && project?.schemas.map(s => (
          <SideSchema 
          schema={s}
          key={"side-schema" + s.id}
          />
        ))}
        {!!search && filteredProjects?.map(schema => (
          <SideSchema 
          schema={schema}
          key={"side-schema" + schema.id}
          />
        ))}
      </div>
  
    </div>
  )
}

export default Sidebar