import { generateCode } from '@/lib/GenerateCode'
import { ProjectProps } from '@/types'
import { FC, useEffect, useState } from 'react'
import { CopyBlock, anOldHope } from "react-code-blocks"
import { RxExclamationTriangle } from "react-icons/rx"
import { TbDatabaseExport } from 'react-icons/tb'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

interface ExportProjectProps {
  project: ProjectProps
}

const ExportProject: FC<ExportProjectProps> = ({
    project
}) => {
    const [open, setOpen] = useState(false)
    const [code, setCode] = useState("")

    useEffect(() => {
        if(open){
            generateCode(project, setCode)
        }
    }, [open])
    

  return (
    <Dialog
    onOpenChange={setOpen}
    open={open}
    >
        <DialogTrigger asChild>
            <Button
            variant="outline"
            size="icon"
            >
                <TbDatabaseExport />
            </Button>
        </DialogTrigger>
        <DialogContent
        className='max-w-[80%] lg:max-w-[60%]'
        >
            <DialogHeader>
            <DialogTitle>
                Export to drizzle 🚂
            </DialogTitle>
            <DialogDescription>
                Ready to copy and paste into your project!
            </DialogDescription>
            <Alert variant="destructive">
                <RxExclamationTriangle className="h-4 w-4" />
                <AlertTitle>
                    Warning
                </AlertTitle>
                <AlertDescription>
                    This code is just the basics. If you want more fancy stuff, you'll have to throw it in yourself. But hey, I've got most of it covered already. Still a work in progress—I'll be tossing in some PostgreSQL magic later and spicing it up with more types. 🐻
                </AlertDescription>
            </Alert>
            </DialogHeader>
            <div
            className='max-h-[50vh] w-full overflow-auto'
            >
                <CopyBlock 
                language='javascript'
                
                text={code}
                theme={anOldHope}
                wrapLongLines={true}
                />
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default ExportProject