'use client'

import dynamic from 'next/dynamic'
import JournalFormSkeleton from './loading'

const ContentForm = dynamic(() => import('../ContentForm'), {
  ssr: false,
  loading: () => <JournalFormSkeleton />,
})

const NewJournalPage = () => {
  return <ContentForm />
}

export default NewJournalPage
