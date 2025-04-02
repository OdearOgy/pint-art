import { FC, useCallback, useLayoutEffect, useState } from 'react'
import Button from '../../../components/button'
import Cluster from '../../../components/layout/cluster'
import type { PhotosDto } from '../../../utils/types.ts'
import { getImages } from '../_api/index.ts'
import { GridStyles } from './index.css.ts'
import { toMasonryItemDto } from './mapper.ts'
import VirtualizedMasonryGrid from './virtualized-masonry-grid'

const Images: FC<{
  data: PhotosDto
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
        const photos = (newData as PhotosDto).photos
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

      <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
        {loading && <div>Loading...</div>}
      </div>
      <Cluster
        style={{
          justifyContent: 'center',
        }}
      >
        {initialData.total_results > data.length && !loading && (
          <Button onClick={handleLoadMoreTrigger} variant="primary" loading={loading} size="large">
            Load More
          </Button>
        )}
      </Cluster>
    </div>
  )
}

export default Images
