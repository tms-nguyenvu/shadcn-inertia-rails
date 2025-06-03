import { Link, useForm } from '@inertiajs/react'
import { FormEvent } from 'react'
import { ProjectFormType, ProjectType } from './types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// Temporary fix for InertiaFormProps not being exported from @inertiajs/react
type InertiaFormProps<TForm extends Record<string, any>> = ReturnType<typeof useForm<TForm>>

interface FormProps {
  project: ProjectType
  onSubmit: (form: InertiaFormProps<ProjectFormType>) => void
  submitText: string
}

export default function Form({ project, onSubmit, submitText }: FormProps) {
  const form = useForm<ProjectFormType>({
    title: project.title,
  })
  const { data, setData, errors, processing } = form

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="contents">
      <div className="my-5">
        <label htmlFor="title">Title</label>
        <Input
          type="text"
          name="title"
          id="title"
          required
          value={data.title || ""}
          onChange={(e) => setData('title', e.target.value)}
        />
        {errors.title && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.title}
          </div>
        )}
      </div>

      <div className="flex gap-4 items-center">
        <Button
          type="submit"
          disabled={processing}
        >
          {submitText}
        </Button>

        <Button variant={"outline"}>
          <Link
            href="/projects"
          >
            Back to projects
          </Link>
        </Button>
      </div>
    </form>
  )
}
