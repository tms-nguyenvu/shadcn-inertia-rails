import { Head, Link } from '@inertiajs/react'
import { Fragment, useEffect } from 'react'
import { ProjectType } from './types'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import Project from './Project'

interface IndexProps {
  projects: ProjectType[]
  flash: { notice?: string }
}

export default function Index({ projects, flash }: IndexProps) {
  useEffect(() => {
    if (flash.notice) {
      toast.success(flash.notice)
    }
  }, [])
  return (
    <>
      <Head title="Projects" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">Projects</h1>
          <Button variant={"outline"}>
            <Link
              href="/projects/new"
            >
              New project
            </Link>
          </Button>
        </div>

        <div className="min-w-full">
          {projects.map((project) => (
            <Fragment key={project.id}>
              <Project project={project} />
              <p>
                <Button>
                  <Link
                    prefetch
                    href={`/projects/${project.id}`}
                  >
                    Show this project
                  </Link>
                </Button>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
