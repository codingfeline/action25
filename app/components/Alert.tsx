'use client'

import { Button } from '@radix-ui/themes'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClose: () => void
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div>
      {children}
      <Button onClick={onClose}> X</Button>
    </div>
  )
}

export default Alert
