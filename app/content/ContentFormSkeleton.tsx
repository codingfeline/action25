import { Skeleton } from '@/app/components'
import { Box } from '@radix-ui/themes'

const ContentFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height="2rem" />
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
    </Box>
  )
}

export default ContentFormSkeleton
