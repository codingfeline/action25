import { Button, IconProps } from '@radix-ui/themes'
// import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { ComponentType, ReactNode } from 'react'
// import { authOptions } from '../api/auth/[...nextauth]/authOptions'

interface Prop {
  href: string
  Icon?: ComponentType<IconProps>
  children: ReactNode
  full?: boolean
}

const ButtonWithComponent = async ({ href, Icon, children, full }: Prop) => {
  // const session = await getServerSession(authOptions)
  // if (!session) return null

  return (
    <div className={`${full} && 'w-full'}`}>
      <Link href={href}>
        <Button className={`my-1 cursor-pointer mr-1 `}>
          <div className="flex items-center gap-2">
            {Icon && <Icon />} {children}
          </div>
        </Button>
      </Link>
    </div>
  )
}

export default ButtonWithComponent
