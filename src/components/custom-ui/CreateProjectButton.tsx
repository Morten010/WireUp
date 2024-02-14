"use client"
import { FC, useState } from 'react'
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useProject } from '@/store/dup';
import { toast } from 'sonner';
import { nanoid } from 'nanoid';


interface CreateProjectButtonProps {
  
}



const CreateProjectButton: FC<CreateProjectButtonProps> = ({}) => {
    const state = useProject();
    const [open, setOpen] = useState(false);
    const [project, setProject] = useState({
        name: "",
        description: ""
    });

    const handleCreate = () => {
        if(!project.name) return toast.error("Missing project name 🔍")
        if(!project.description) return toast.error("Missing project name 🔍")
        
        state?.createProject({
            ...project,
            schemas: [],
            edges: [],
            id: nanoid()
        })

        setProject({
            description: "",
            name: ""
        })
        setOpen(false)
    };

  return (
    <AlertDialog
    open={open}
    onOpenChange={setOpen}
    >
        <AlertDialogTrigger asChild>
            <Button>
                Create new project
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
        <AlertDialogHeader>
            <AlertDialogTitle>
            Create new project
            </AlertDialogTitle>
            <AlertDialogDescription
            className="flex flex-col gap-2"
            >
            <Input 
            placeholder="Project name"
            value={project.name}
            onChange={(e) => setProject({
                name: e.currentTarget.value,
                description: project.description
            })}
            />
            <Input 
            placeholder="Description"
            value={project.description}
            onChange={(e) => setProject({
                description: e.currentTarget.value,
                name: project.name
            })}
            />
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
            <Button
            variant="destructive"
            onClick={() => setOpen(false)}
            >
            Cancel
            </Button>
            <Button
            onClick={handleCreate}
            >
            Create project
            </Button>
        </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default CreateProjectButton