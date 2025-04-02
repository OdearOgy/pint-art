import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import type { Photo } from 'pexels'
import { useCallback, type FC } from 'react'
import { useNavigate } from 'react-router'
import Button from '../../../components/button'
import Card from '../../../components/card'
import Cluster from '../../../components/cluster'
import { APP_ROUTES } from '../../../pages/routes'
import { vars } from '../../../styles/theme.css'

const ImageDetails: FC<{
  data: Photo
}> = ({ data }) => {
  const navigate = useNavigate()

  const handleBackNavigation = useCallback(() => {
    navigate(APP_ROUTES.HOME)
  }, [navigate])

  return (
    <Cluster>
      <Button
        onClick={handleBackNavigation}
        variant="primary"
        prefixIcon={<ArrowLeftIcon />}
        size="large"
      >
        Go Back
      </Button>

      <Cluster>
        <Card
          src={data.src.large2x}
          id={data.id?.toString()}
          style={{
            color: data.avg_color ?? vars.color.neutral[500],
          }}
        />
      </Cluster>
    </Cluster>
  )
}

export default ImageDetails
