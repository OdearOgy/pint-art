import type { Photos } from 'pexels'
import { FC, Suspense } from 'react'
import { Await, useLoaderData } from 'react-router'
import Images from '../features/images/grid'

const ImagesPage: FC = () => {
  const {
    data,
  }: {
    data: Photos
  } = useLoaderData()

  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Await resolve={data}>
        <Images data={data} />
      </Await>
    </Suspense>
  )
}

export default ImagesPage
