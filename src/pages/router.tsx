import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'
import { getImages } from '../features/images/_api'
import { getImage } from '../features/images/details/_api'
import { APP_ROUTES } from './routes'

const ImagesOverviewPage = lazy(() => import('./images-overview-page'))
const ImageDetailsPage = lazy(() => import('./image-details-page'))

const router = createBrowserRouter([
  {
    index: true,
    path: APP_ROUTES.HOME,
    element: <ImagesOverviewPage />,
    loader: async () => {
      return {
        data: await getImages({
          page: 1,
          per_page: 40,
        }),
      }
    },
  },
  {
    path: APP_ROUTES.IMAGE_DETAILS,
    element: <ImageDetailsPage />,
    loader: async ({ params }) => {
      const id = params?.id ?? ''

      return {
        data: await getImage({ id }),
      }
    },
  },
])

export default router
