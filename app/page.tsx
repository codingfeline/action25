import prisma from '@/prisma/client'
import logo from '@/public/Action-logo.svg'
import { Card, Flex } from '@radix-ui/themes'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import ReactMarkDown from 'react-markdown'
import { authOptions } from './api/auth/[...nextauth]/authOptions'
import { Pencil } from './components'
import ButtonWithComponent from './components/ButtonLink'
import CookiesAgreement from './components/CookiesAgreement'

export default async function Home() {
  const homeContent = await prisma.home.findMany()
  const session = await getServerSession(authOptions)

  console.log(homeContent)
  return (
    <Flex direction="column" className=" gap-3 ">
      <h1 className="flex text-3xl justify-center">
        Welcome to
        {/* <span className="text-3xl ml-2">AcTion Consultancy Service</span> */}
      </h1>
      <Image src={logo} alt="logo" className="place-self-center" />
      {/* <p className="tracking-wider">
        where we specialize in delivering top-tier computer support and consultancy
        solutions tailored to meet the dynamic needs of modern businesses. From
        troubleshooting technical issues to designing robust IT infrastructures, our
        mission is to empower organizations with the tools and expertise necessary to
        thrive in an increasingly digital world. Whether you need day-to-day IT support,
        strategic guidance on technology implementation, or assistance with digital
        transformation, we’re here to ensure your systems run smoothly and efficiently.
      </p> */}
      {/* <p>{homeContent[0].content.toString()}</p> */}
      <Card className="prose tracking-wider home  ">
        <ReactMarkDown>{homeContent[0].content.toString()}</ReactMarkDown>
      </Card>
      <ButtonWithComponent href="/About-Us">More about us</ButtonWithComponent>
      {session && (
        <ButtonWithComponent Icon={Pencil} href={`/content/${homeContent[0].id}/edit`}>
          Edit
        </ButtonWithComponent>
      )}
      <CookiesAgreement />
      {/* <AlertParent /> */}
    </Flex>
  )
}
