import ContentForm from '@/app/content/ContentForm'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'

// const JournalForm = dynamic(() => import('@/app/journals/_components/JournalForm'), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// })

interface Props {
  params: Promise<{ id: string }>
}

const EditContent = async ({ params }: Props) => {
  if ((await params).id.length !== 24) notFound()

  const content = await prisma.home.findUnique({
    where: { id: (await params).id },
  })

  if (!content) notFound()

  return <ContentForm content={content} />
}

export default EditContent
