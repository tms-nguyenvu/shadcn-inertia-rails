import { Head } from '@inertiajs/react'
import { ProjectType } from './types'
import Form from './Form'

interface NewProps {
  project: ProjectType
}

export default function New({ project }: NewProps) {
  return (
    <>
      <Head title="New project" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New project</h1>

        <Form
          project={project}
          onSubmit={(form) => {
            form.transform((data) => ({ project: data }))
            form.post('/projects')
          }}
          submitText="Create Project"
        />
      </div>
    </>
  )
}
