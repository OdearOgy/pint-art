import { Photos } from 'pexels'
import { FC, useCallback, useLayoutEffect, useState } from 'react'
import { getImages } from '../_api/index.ts'
import { GridStyles } from './index.css.ts'
import { toMasonryItemDto } from './mapper.ts'
import VirtualizedMasonryGrid from './virtualized-masonry-grid/index.tsx'

const Images: FC<{
  data: Photos
}> = ({ data: initialData }) => {
  const [data, setData] = useState(initialData.photos)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(initialData.page)

  const handleLoadMoreTrigger = useCallback(() => {
    setPage((prevPage) => prevPage + 1)
  }, [setPage])

  const handleLoad = useCallback(async () => {
    try {
      const newData = await getImages({
        page,
        per_page: 40,
      })
      if (newData) {
        const photos = (newData as Photos).photos
        setData((prevData) => [...prevData, ...photos])
      }
    } catch (error) {
      console.error('Error loading more data:', error)
    } finally {
      setLoading(false)
    }
  }, [page])

  useLayoutEffect(() => {
    if (page > initialData.page) {
      setLoading(true)
      handleLoad()
    }
  }, [page, initialData, handleLoad])

  return (
    <div className={GridStyles}>
      <VirtualizedMasonryGrid
        items={data?.map(toMasonryItemDto)}
        loadMore={handleLoadMoreTrigger}
      />

      <div style={{ margin: '0 auto' }}>{loading && <div>Loading...</div>}</div>
    </div>
  )
}

export default Images
