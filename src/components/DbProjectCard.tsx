import { FC } from 'react'
import { Card, CardHeader, CardTitle } from './ui/card'
import { ProjectProps } from '@/types'
import { iframeResizer } from 'iframe-resizer'
import Link from 'next/link'

interface DbProjectCardProps {
  project: ProjectProps,
}

const DbProjectCard: FC<DbProjectCardProps> = ({
  project
}) => {


  return (
    <Link
    href={`/project/${project.id}`}
    className="max-w-[320px] w-full min-w-[210px]"
    >
      <Card
      className="w-full overflow-hidden"
      >
        <iframe 
        src={`/project/${project.id}`}
        id={`iframe-${project.id}`}
        className='w-full aspect-video scaled-frame'
        
        />
        <CardHeader>
          <CardTitle
          className="text-xl"
          >
            {project.name}
          </CardTitle>
          <p>
            {project.description ? project.description : "No description"}
          </p>
        </CardHeader>
      </Card>
    </Link>
  )
}

export default DbProjectCard