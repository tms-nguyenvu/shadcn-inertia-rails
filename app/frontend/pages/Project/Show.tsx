import { Head, Link, router } from '@inertiajs/react'
import { ProjectType } from './types'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import { toast } from 'sonner'
import Project from './Project'

interface ShowProps {
  project: ProjectType
  flash: { notice?: string }
}

export default function Show({ project, flash }: ShowProps) {
  useEffect(() => {
    if (flash.notice) {
      toast.success(flash.notice)
    }
  }, [])

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this project?')) {
      router.delete(`/projects/${project.id}`)
    }
  }

  return (
    <>
      <Head title={`Project #${project.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          <h1 className="font-bold text-4xl">Project #{project.id}</h1>

          <Project project={project} />

          <div className="flex gap-4 items-center">
            <Button asChild>
              <Link
                href={`/projects/${project.id}/edit`}
              >
                Edit this project
              </Link>
            </Button>

            <Button variant={"outline"} asChild>
              <Link
                href="/projects"
              >
                Back to projects
              </Link>
            </Button>

            <Button variant={"destructive"} onClick={handleDelete}>
              Destroy this project
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
