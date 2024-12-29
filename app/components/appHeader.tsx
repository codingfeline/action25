'use client'

import { Avatar, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes'
import classnames from 'classnames'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaComputer } from 'react-icons/fa6'
// import ColorByPath from './utilities'

const AppHeader = () => {
  const currentPath = usePathname()
  const { status, data: session } = useSession()
  // const colourLink = ColorByPath()

  const colourLink = (link: string) =>
    classnames({
      'text-zinc-900': link === currentPath,
      'text-zinc-500': link !== currentPath,
      'hover:text-zinc-800 transition-colors': true,
    })

  const links = [
    { label: 'home', url: '/' },
    { label: 'About Us', url: '/About-Us' },
    { label: 'Contact Us', url: '/Contact-Us' },
  ]

  return (
    <nav className="borber-b  px-5  bg-[#AAC3F7] justify-between py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <FaComputer size="24px" />
            </Link>
            {links.map(link => (
              <Link className={colourLink(link.url)} href={link.url} key={link.url}>
                {link.label}
              </Link>
            ))}
            {status === 'authenticated' && session.user!.email! === 'post@nazs.net' && (
              <Link href="/Enquiries" className={colourLink('/Enquiries')}>
                Enquiries
              </Link>
            )}
          </Flex>
          <Flex justify="between" gapX="3">
            {status === 'unauthenticated' && (
              <Link className="" href="/api/auth/signin">
                SignIn
              </Link>
            )}

            {status === 'authenticated' && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    src={session.user!.image!}
                    fallback="?"
                    size="2"
                    radius="full"
                    className="cursor-pointer"
                  />
                  {/* <p>test</p> */}
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text size="2">{session.user!.email!}</Text>
                    {/* <p>fdff</p> */}
                  </DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <Link href="/api/auth/signout">Sign Out</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}
            {/* {status === 'authenticated' && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar src={session.user!.image!} fallback="?" />
                </DropdownMenu.Trigger>
              </DropdownMenu.Root>
            )} */}
            {/* <Link className="" href="#">
              Another
            </Link> */}
          </Flex>
        </Flex>
      </Container>
      {/* <div className="flex justify-between items-center bg-red-50 w-1/4 ">
      </div> */}
    </nav>
  )
}

export default AppHeader
