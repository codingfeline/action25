'use client'

import ErrorMessage from '@/app/components/ErrorMessage'
import Spinner from '@/app/components/Spinner'
import { ContactSchema } from '@/app/validationSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Callout, Heading, TextArea, TextField } from '@radix-ui/themes'
import axios from 'axios'
import 'easymde/dist/easymde.min.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { z } from 'zod'
import ExpenseTracker from '../components/ExpenseTracker/Expenses'

type ContactFormData = z.infer<typeof ContactSchema>

const ContentForm = () => {
  const [error] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  })

  const onSubmit = handleSubmit(async data => {
    const convertedData = {
      ...data,
      message: data.message.replace(/\n/g, '<br />'),
    }
    try {
      setSubmitting(true)
      await axios.post('/api/contact/', convertedData)
      // router.push('/')
      // setSubmitted(true)
      toast('Enquiry submitted')
      reset()
      setSubmitting(false)
      // router.refresh()
    } catch (error) {
      console.log(error)
      setSubmitting(false)
      toast.error('Unexpected error occured')
      // setError('Unexpected error')
    }
  })

  return (
    <div className="w-full">
      {/* <ErrorMessage>{submitted && 'Your enquiry has been submitted'}</ErrorMessage> */}
      <Toaster />
      {submitted && (
        <Callout.Root color="violet" mb="2">
          <Callout.Text>Your enquiry has been submitted.</Callout.Text>
        </Callout.Root>
      )}

      {error && (
        <Callout.Root color="red" mb="2">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className=" space-y-3">
        {/* <form className=" space-y-3" onSubmit={onSubmit}> */}
        <Heading>Contact Us</Heading>
        <TextField.Root placeholder="Name" {...register('name')} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <TextField.Root placeholder="Email" {...register('email')} />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <TextField.Root placeholder="Phone" {...register('phone')} type="number" />
        <ErrorMessage>{errors.phone?.message}</ErrorMessage>

        {/* <Controller
          name="message"
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Message" {...field} />}
          /> */}
        <TextArea placeholder="Message" {...register('message')} />
        <ErrorMessage>{errors.message?.message}</ErrorMessage>

        <Button disabled={submitting} onClick={onSubmit}>
          <a href="#">Send enquiry {submitting && <Spinner />}</a>
        </Button>
      </form>

      <ExpenseTracker />
    </div>
  )
}

export default ContentForm
