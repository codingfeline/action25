'use client'

import ErrorMessage from '@/app/components/ErrorMessage'
import Spinner from '@/app/components/Spinner'
import { ContentSchema } from '@/app/validationSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Home } from '@prisma/client'
import { Button, Callout, Heading } from '@radix-ui/themes'
import axios from 'axios'
import 'easymde/dist/easymde.min.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import SimpleMDE from 'react-simplemde-editor'
import { z } from 'zod'

type ContentFormData = z.infer<typeof ContentSchema>

const ContentForm = ({ content }: { content?: Home }) => {
  const router = useRouter()
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContentFormData>({
    resolver: zodResolver(ContentSchema),
  })

  const onSubmit = handleSubmit(async data => {
    try {
      setSubmitting(true)
      if (content) await axios.patch('/api/content/' + content.id, data)
      else await axios.post('/api/content/', data)
      router.push('/')
      router.refresh()
    } catch (error) {
      console.log(error)
      setSubmitting(false)
      setError('Unexpected error')
    }
  })

  return (
    <div className="w-full">
      {error && (
        <Callout.Root color="red" mb="2">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className=" space-y-3">
        {/* <form className=" space-y-3" onSubmit={onSubmit}> */}
        <Heading>New Journal</Heading>
        <Controller
          name="content"
          control={control}
          defaultValue={content?.content}
          render={({ field }) => <SimpleMDE placeholder="Comment" {...field} />}
        />
        <ErrorMessage>{errors.content?.message}</ErrorMessage>

        <Button disabled={submitting} onClick={onSubmit}>
          <a href="#">
            {content ? 'Update Content' : 'Add Content'} {submitting && <Spinner />}
          </a>
        </Button>
        {/* <Button disabled={submitting}>
          {content ? 'Update Journal' : 'Add Journal'} {submitting && <Spinner />}
        </Button> */}
      </form>
    </div>
  )
}

export default ContentForm
