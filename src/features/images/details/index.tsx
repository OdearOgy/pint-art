import type { Photo } from 'pexels'
import { useCallback, type FC } from 'react'
import { Link, useNavigate } from 'react-router'
import Button from '../../../components/button'
import Card from '../../../components/card'
import ArrowLeftIcon from '../../../components/icons/arrow-left-icon.tsx'
import Center from '../../../components/layout/center'
import Stack from '../../../components/layout/stack'
import { vars } from '../../../styles/theme.css.ts'
import Author from './author'

const ImageDetails: FC<{
  data: Photo
}> = ({ data }) => {
  const navigate = useNavigate()

  const handleBackNavigation = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <Stack
      space={5}
      style={{
        marginBlock: 'auto',
      }}
    >
      <Center>
        <Button
          onClick={handleBackNavigation}
          variant="primary"
          prefixIcon={<ArrowLeftIcon />}
          size="medium"
        >
          Go Back
        </Button>
      </Center>

      <Center>
        <Stack
          style={{
            height: '50vh',
            width: '50vw',
          }}
          space={2}
        >
          <Link to={data.url} target="_blank" aria-label={data.alt ?? ''}>
            <Card
              src={data.src.large2x}
              id={data.id?.toString()}
              alt={data.alt ?? ''}
              style={{
                background: data.avg_color ?? vars.color.neutral[900],
                borderRadius: vars.radii['2xl'],
                color: data.avg_color ?? vars.color.neutral[900],
                height: '100%',
                minHeight: '80vh',
                minWidth: '25vw',
                position: 'relative',
                width: 'auto',
              }}
            />
          </Link>

          <Center>
            <Author data={data} />
          </Center>
        </Stack>
      </Center>
    </Stack>
  )
}

export default ImageDetails
