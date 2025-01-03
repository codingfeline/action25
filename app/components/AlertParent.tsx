'use client'

import { Button } from '@radix-ui/themes'
import { useState } from 'react'
import Alert from './Alert'

const AlertParent = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      {visible && <Alert onClose={() => setVisible(false)}>Hide</Alert>}
      <Button onClick={() => setVisible(true)}>Show</Button>
    </div>
  )
}

export default AlertParent
