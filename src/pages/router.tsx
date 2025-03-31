import { createBrowserRouter } from 'react-router'
import { getImages } from '../features/images/_api'
import { getImage } from '../features/images/details/_api'
import ImageDetailsPage from './image-details-page'
import ImagesOverviewPage from './images-overview-page'

export const APP_ROUTES = {
  HOME: '/',
  IMAGE_DETAILS: '/:id',
} as const

const router = createBrowserRouter([
  {
    index: true,
    path: APP_ROUTES.HOME,
    element: <ImagesOverviewPage />,
    loader: async () => {
      return {
        data: await getImages(),
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
