import { Home } from '@prisma/client'
import { Card } from '@radix-ui/themes'
import ReactMarkDown from 'react-markdown'

const ContentDetails = ({ content }: { content: Home }) => {
  return (
    <>
      {/* <Heading>{content.topic}</Heading> */}
      <Card className="prose flex flex-col w-full " mt="4">
        <ReactMarkDown>{content.content}</ReactMarkDown>
      </Card>
      <div className="flex justify-end p-1">
        <p>{content.date.toDateString()}</p>
      </div>
    </>
  )
}

export default ContentDetails
