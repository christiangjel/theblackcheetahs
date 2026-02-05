'use client'

import { useEffect } from 'react'
import { useForm as useFormspree } from '@formspree/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { content } from '@/lib/content'
import { FORMSPREE_CONFIG } from '@/lib/constants'

const { contactForm: c } = content

const formSchema = z.object({
  name: z.string().min(2, { message: c.validation.nameMin }),
  email: z.string().email({ message: c.validation.emailInvalid }),
  message: z.string().min(10, { message: c.validation.messageMin })
})

type FormValues = z.infer<typeof formSchema>

const formIdForHook = FORMSPREE_CONFIG.FORM_ID || 'placeholder-no-form-id'

export const ContactForm = () => {
  const [formspreeState, handleFormspreeSubmit] = useFormspree(formIdForHook)

  if (!FORMSPREE_CONFIG.FORM_ID) {
    if (process.env.NODE_ENV === 'development') {
      return (
        <p className='text-sm text-cheetah-brown'>
          Set{' '}
          <code className='px-1 bg-black/20'>
            NEXT_PUBLIC_FORMSPREE_FORM_ID
          </code>{' '}
          in <code className='px-1 bg-black/20'>.env.local</code> to enable the
          contact form.
        </p>
      )
    }
    return null
  }

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

  useEffect(() => {
    if (formspreeState.succeeded) {
      reset()
    }
  }, [formspreeState.succeeded, reset])

  useEffect(() => {
    if (formspreeState.errors) {
      console.error('Formspree errors:', formspreeState.errors)
    }
  }, [formspreeState.errors])

  if (formspreeState.succeeded) {
    return <p className='text-cheetah-brown text-sm'>{c.successMessage}</p>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4' noValidate>
      {isSubmitted && !isValid && !formspreeState.succeeded && (
        <div className='text-sm text-red-500'>{c.validationSummary}</div>
      )}

      {formspreeState.errors && !formspreeState.succeeded && (
        <div className='text-sm text-red-500'>{c.submitError}</div>
      )}

      <div>
        <label htmlFor='contact-name' className='block mb-1 font-rheiborn'>
          {c.nameLabel}
        </label>
        <input
          id='contact-name'
          type='text'
          autoComplete='name'
          aria-label={c.nameLabel}
          {...register('name')}
          className='w-full rounded-none border border-black bg-cheetah-dark-brown/45 p-2 text-sm text-white'
        />
        {errors.name && (
          <p className='mt-1 text-xs text-red-400'>{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='contact-email' className='block mb-1 font-rheiborn'>
          {c.emailLabel}
        </label>
        <input
          id='contact-email'
          type='email'
          autoComplete='email'
          aria-label={c.emailLabel}
          {...register('email')}
          className='w-full rounded-none border bg-cheetah-dark-brown/45 p-2 text-sm text-white'
        />
        {errors.email && (
          <p className='mt-1 text-xs text-red-400'>{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='contact-message' className='block mb-1 font-rheiborn'>
          {c.messageLabel}
        </label>
        <textarea
          id='contact-message'
          autoComplete='off'
          aria-label={c.messageLabel}
          {...register('message')}
          rows={4}
          className='w-full rounded-none border bg-cheetah-dark-brown/45 p-2 text-sm text-white'
        />
        {errors.message && (
          <p className='mt-1 text-xs text-red-400'>{errors.message.message}</p>
        )}
      </div>

      <button
        type='submit'
        disabled={formspreeState.submitting || isSubmitting}
        className='bg-cheetah-dark-brown px-3 py-1 text-sm text-black transition-colors hover:bg-cheetah-brown hover:text-white disabled:opacity-50'
      >
        {formspreeState.submitting || isSubmitting
          ? c.submittingButton
          : c.submitButton}
      </button>
    </form>
  )
}
