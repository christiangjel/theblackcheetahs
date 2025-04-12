'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm as useFormspree } from '@formspree/react'

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
})

// Infer the type from the schema
type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [formspreeState, handleFormspreeSubmit] = useFormspree('xpwpbdwv')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(
    null
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xpwpbdwv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div>
        <label htmlFor='name' className='block mb-1 font-rheiborn'>
          Name
        </label>
        <input
          id='name'
          {...register('name')}
          className='w-full bg-cheetah-dark-brown/45 border border-cheetah-brown p-2 text-white rounded-none text-sm'
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
          className='w-full bg-cheetah-dark-brown/45 border border-cheetah-brown p-2 text-white rounded-none text-sm'
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
          className='w-full bg-cheetah-dark-brown/45 border border-cheetah-brown p-2 text-white rounded-none text-sm'
        />
        {errors.message && (
          <p className='text-red-400 text-xs mt-1'>{errors.message.message}</p>
        )}
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        className='bg-cheetah-dark-brown text-black px-3 py-1 text-sm hover:bg-cheetah-brown hover:text-white transition-colors disabled:opacity-50'
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <p className='text-green-500 text-sm'>
          Your message has been sent successfully!
        </p>
      )}
      {submitStatus === 'error' && (
        <p className='text-red-500 text-sm'>
          There was an error sending your message. Please try again.
        </p>
      )}
    </form>
  )
}
