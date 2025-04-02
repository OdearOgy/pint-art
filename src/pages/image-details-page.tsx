import type { Photo } from 'pexels'
import { Suspense, type FC } from 'react'
import { Await, useLoaderData } from 'react-router'
import ImageDetails from '../features/images/details'

const ImageDetailsPage: FC = () => {
  const {
    data,
  }: {
    data: Photo
  } = useLoaderData()

  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Await resolve={data}>
        <ImageDetails data={data} />
      </Await>
    </Suspense>
  )
}

export default ImageDetailsPage
