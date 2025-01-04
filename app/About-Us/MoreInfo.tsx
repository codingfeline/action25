'use client'

import { Button, Flex } from '@radix-ui/themes'
import { useState } from 'react'

const MoreInfo = () => {
  const [show, setShow] = useState(false)
  const maxChars = 150

  const para =
    'Choosing Action Consultancy Service means gaining a trusted partner committed to your success. We pride ourselves on delivering personalized support, quick response times, and innovative solutions that drive results. As technology   continues to evolve, we’ll be by your side, ensuring your IT environment stays ahead of the curve. Let’s work together to harness the power of technology and       create a secure, efficient, and future-ready foundation for your business.'

  return (
    <div>
      <Flex direction="column" gap="3" my="3">
        {show ? para : para.substring(0, maxChars)}
      </Flex>
      <Button onClick={() => setShow(!show)}>Show {show ? 'less' : 'more...'}</Button>
    </div>
  )
}

export default MoreInfo
