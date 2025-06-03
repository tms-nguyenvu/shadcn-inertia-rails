import { Head } from '@inertiajs/react'
import Form from './Form'
import { ProjectType } from './types'

interface EditProps {
  project: ProjectType
}

export default function Edit({ project }: EditProps) {
  return (
    <>
      <Head title="Editing project" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">Editing project</h1>

        <Form
          project={project}
          onSubmit={(form) => {
            form.transform((data) => ({ project: data }))
            form.patch(`/projects/${project.id}`)
          }}
          submitText="Update Project"
        />

      </div>
    </>
  )
}
