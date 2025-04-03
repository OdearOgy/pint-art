import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'
import { getImages } from '../features/images/_api'
import { getImage } from '../features/images/details/_api'
import { DEFAULT_PAGINATION } from '../shared/constants'
import Layout from './_layout'
import { APP_ROUTES } from './routes'

const ImagesOverviewPage = lazy(() => import('./images-overview-page'))
const ImageDetailsPage = lazy(() => import('./image-details-page'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: APP_ROUTES.IMAGES,
        element: <ImagesOverviewPage />,
        loader: async ({ request }) => {
          const url = new URL(request.url)
          const searchParams = url.searchParams

          const page = parseInt(searchParams.get('page') ?? '') || DEFAULT_PAGINATION.page
          const per_page =
            parseInt(searchParams.get('per_page') ?? '') || DEFAULT_PAGINATION.per_page
          const query = searchParams.get('q') ?? ''

          return {
            data: await getImages({
              page,
              per_page,
              q: query,
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
    ],
  },
])

export default router
