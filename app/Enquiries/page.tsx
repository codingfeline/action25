import prisma from '@/prisma/client'
import { Card, Flex, Text } from '@radix-ui/themes'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import ReactMarkDown from 'react-markdown'
import { authOptions } from '../api/auth/[...nextauth]/authOptions'

const Message = async () => {
  const messages = await prisma.contact.findMany()
  const session = await getServerSession(authOptions)
  console.log(session)

  if (session?.user?.email !== 'post@nazs.net') redirect('/')

  return (
    <>
      <h2>List of enquiries</h2>
      {session && session.user?.name}
      {messages.map(m => {
        return (
          <div key={m.id}>
            <Card className="prose messages mb-2">
              <Flex
                justify="between"
                className="font-mono border border-b-2 border-gray-400 border-t-0 border-x-0"
              >
                <Text>
                  From {m.name} [{m.email}]
                </Text>
                <Text>{m.date.toLocaleString()}</Text>
              </Flex>
              <ReactMarkDown className="font-['Verdana']">{m.message}</ReactMarkDown>
            </Card>
          </div>
        )
      })}
    </>
  )
}

export default Message
