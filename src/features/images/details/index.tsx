import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import type { Photo } from 'pexels'
import { useCallback, type FC } from 'react'
import { useNavigate } from 'react-router'
import Button from '../../../components/button'
import Stack from '../../../components/stack'
import { APP_ROUTES } from '../../../pages/routes'

const ImageDetails: FC<{
  data: Photo
}> = ({ data }) => {
  const navigate = useNavigate()

  const handleBackNavigation = useCallback(() => {
    navigate(APP_ROUTES.HOME)
  }, [navigate])

  return (
    <Stack>
      <Button onClick={handleBackNavigation} variant="primary" prefixIcon={<ArrowLeftIcon />}>
        go back
      </Button>
      <br />
      Image details
      <br />
      {JSON.stringify(data, null, 4)}
    </Stack>
  )
}

export default ImageDetails
