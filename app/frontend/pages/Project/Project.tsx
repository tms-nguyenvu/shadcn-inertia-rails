import { ProjectType } from './types'

interface ProjectProps {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  return (
    <div>
      <p className="my-5 flex items-center gap-2">
        <strong className="font-medium">Title:</strong>
        {project.title?.toString()}
      </p>
    </div>
  )
}
