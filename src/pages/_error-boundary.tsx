import { useCallback } from 'react'
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router'
import Button from '../components/button'
import ArrowLeftIcon from '../components/icons/arrow-left-icon'
import ArrowPathIcon from '../components/icons/arrow-path-icon'
import Center from '../components/layout/center'
import Cluster from '../components/layout/cluster'
import Cover from '../components/layout/cover'
import Stack from '../components/layout/stack'

const ErrorBoundary = () => {
  const navigate = useNavigate()
  const error = useRouteError()

  let title = 'Something went wrong'
  let message = 'An unexpected error occurred.'
  let status = 500

  if (isRouteErrorResponse(error)) {
    status = error.status
    title = `${status} - ${error.statusText}`
    message = error.data || message
  } else if (error instanceof Error) {
    message = error.message
  }

  const handleBackNavigation = useCallback(() => {
    navigate(-1)
  }, [navigate])

  const handleReload = useCallback(() => {
    globalThis.location.reload()
  }, [])

  return (
    <Cover>
      <Center
        style={{
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <Stack space={3}>
          <Stack space={1}>
            <h2>{title}</h2>
            <h3>{message}</h3>
          </Stack>

          <Cluster
            space={2}
            style={{
              justifyContent: 'center',
            }}
          >
            <Button variant="neutral" onClick={handleBackNavigation} prefixIcon={<ArrowLeftIcon />}>
              Go Home
            </Button>

            <Button variant="primary" onClick={handleReload} prefixIcon={<ArrowPathIcon />}>
              Reload
            </Button>
          </Cluster>

          {import.meta.env.MODE === 'development' && error instanceof Error && (
            <details
              style={{
                maxWidth: '50vw',
              }}
            >
              <summary>Stack trace</summary>
              <Stack space={2}>{error.stack}</Stack>
            </details>
          )}
        </Stack>
      </Center>
    </Cover>
  )
}

export default ErrorBoundary
