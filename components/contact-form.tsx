'use client'

import React from 'react'
import { useForm as useFormspree } from '@formspree/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Define schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
})

// Infer type
type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [formspreeState, handleFormspreeSubmit] = useFormspree('xpwpbdwv')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted, isValid }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await handleFormspreeSubmit(data)
    } catch (error) {
      console.error('Submission error:', error)
    }
  }

  React.useEffect(() => {
    if (formspreeState.succeeded) {
      reset()
    }
  }, [formspreeState.succeeded, reset])

  React.useEffect(() => {
    if (formspreeState.errors) {
      console.error('Formspree errors:', formspreeState.errors)
    }
  }, [formspreeState.errors])

  if (formspreeState.succeeded) {
    return (
      <p className='text-green-500 text-sm'>
        Thanks for your message - we will get back to you soon!
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4' noValidate>
      {isSubmitted && !isValid && !formspreeState.succeeded && (
        <div className='text-red-500 text-sm'>
          Please correct the errors below and try again.
        </div>
      )}

      {formspreeState.errors && !formspreeState.succeeded && (
        <div className='text-red-500 text-sm'>
          There was an error submitting the form. Please try again later.
        </div>
      )}

      <div>
        <label htmlFor='name' className='block mb-1 font-rheiborn'>
          Name
        </label>
        <input
          id='name'
          {...register('name')}
          className='w-full bg-cheetah-dark-brown/45 border border-black p-2 text-white rounded-none text-sm'
        />
        {errors.name && (
          <p className='text-red-400 text-xs mt-1'>{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='email' className='block mb-1 font-rheiborn'>
          Email
        </label>
        <input
          id='email'
          type='email'
          {...register('email')}
          className='w-full bg-cheetah-dark-brown/45 border p-2 text-white rounded-none text-sm'
        />
        {errors.email && (
          <p className='text-red-400 text-xs mt-1'>{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='message' className='block mb-1 font-rheiborn'>
          Message
        </label>
        <textarea
          id='message'
          {...register('message')}
          rows={4}
          className='w-full bg-cheetah-dark-brown/45 border p-2 text-white rounded-none text-sm'
        />
        {errors.message && (
          <p className='text-red-400 text-xs mt-1'>{errors.message.message}</p>
        )}
      </div>

      <button
        type='submit'
        disabled={formspreeState.submitting || isSubmitting}
        className='bg-cheetah-dark-brown text-black px-3 py-1 text-sm hover:bg-cheetah-brown hover:text-white transition-colors disabled:opacity-50'
      >
        {formspreeState.submitting || isSubmitting
          ? 'Sending...'
          : 'Send Message'}
      </button>
    </form>
  )
}
