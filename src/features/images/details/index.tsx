import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { useCallback, type FC } from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import Button from '../../../components/button'
import Stack from '../../../components/stack'
import { APP_ROUTES } from '../../../pages/router'

const ImageDetails: FC = () => {
  const { data } = useLoaderData()
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
