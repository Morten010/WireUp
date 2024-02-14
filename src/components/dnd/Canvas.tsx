import { ProjectProps } from '@/types'
import { FC, WheelEvent, useState } from 'react'
import { FaHandRock } from "react-icons/fa";
import Table from "../../app/project/[id]/components/Table"
import { TbDragDrop, TbMinus, TbPlus } from 'react-icons/tb';

interface CanvasProps {
  project: ProjectProps
}

const Canvas: FC<CanvasProps> = ({
    project
}) => {
    const [zoomLevel, setZoomLevel] = useState(1);
    const [isDragging, setIsDragging] = useState(false)

    const onMouseWheel = (e: WheelEvent<HTMLDivElement>) => {
        e.preventDefault();
        let newZoomLevel = zoomLevel + (e.deltaY > 0 ? -0.1 : 0.1);
        if (newZoomLevel < 0.5) newZoomLevel = 0.5;
        else if (newZoomLevel > 3) newZoomLevel = 3;
        setZoomLevel(newZoomLevel);
    }

    const handleZoomOut = () => {
        if(zoomLevel >= 0.5){
            setZoomLevel(zoomLevel - 0.1)
            console.log(zoomLevel);
            
        }
    }

    const handleZoomIn = () => {
        if(zoomLevel < 1.5){
            setZoomLevel(zoomLevel + 0.1)
            console.log(zoomLevel);
            
        }
    }

  return <div
  className='w-full h-full relative scrollbar-hide'
  >
    {/* canvas screen */}
    <div
    onWheel={onMouseWheel}
    className={`w-full h-full relative scrollbar-hide ${isDragging ? "cursor-grab" : ""}`}
    style={{ transform: `scale(${zoomLevel})` }}
    >
        {project.schemas?.map(p => (
            <Table
            key={p.id + "canvas-table"}
            schema={p}
            />
        ))}
    </div>
    {/* canvas screen */}

    {/* bottom toolbar */}
    <div
    className='absolute bottom-0 right-0 bg-background border-t border-l  rounded-tl-lg flex select-none overflow-hidden'
    >
        <div
        className='p-3 hover:bg-muted cursor-pointer'
        onClick={handleZoomIn}
        >
            <TbPlus />
        </div>  
        <div
        className='p-3 hover:bg-muted cursor-pointer'
        onClick={handleZoomOut}
        >
            <TbMinus />
        </div>  
        <div
        className='p-3 hover:bg-muted cursor-pointer'
        onClick={() => setIsDragging(!isDragging)}
        >
            <TbDragDrop />
        </div>  
    </div>
    {/* bottom toolbar */}
  </div>
}

export default Canvas     