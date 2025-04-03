import { PaginationParams } from 'pexels'
import { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import Button from '../../../components/button'
import Cluster from '../../../components/layout/cluster/index.tsx'
import type { PhotosDto } from '../../../shared/types.ts'
import { getImages } from '../_api/index.ts'
import { toMasonryItemDto } from './mapper.ts'
import VirtualizedMasonryGrid from './virtualized-masonry-grid'

const Images: FC<{
  data: PhotosDto
}> = ({ data: initialData }) => {
  const [data, setData] = useState(initialData.photos)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(initialData.page)
  const [searchParams] = useSearchParams()

  const handleLoadMoreTrigger = useCallback(() => {
    setPage((prevPage) => prevPage + 1)
  }, [setPage])

  const handleLoad = useCallback(async () => {
    try {
      const pagination = {
        per_page: initialData.per_page,
        q: searchParams.get('q') || '',
        page,
      } as PaginationParams

      const newData = await getImages(pagination)
      if (newData) {
        const photos = (newData as PhotosDto).photos
        setData((prevData) => [...prevData, ...photos])
      }
    } catch (error) {
      console.error('Error loading more data:', error)
    } finally {
      setLoading(false)
    }
  }, [page, initialData, searchParams])

  useEffect(() => {
    setData(initialData.photos)
  }, [initialData])

  useLayoutEffect(() => {
    if (page > initialData.page) {
      setLoading(true)
      handleLoad()
    }
  }, [page, initialData, handleLoad])

  return (
    <div>
      <VirtualizedMasonryGrid
        items={data?.map(toMasonryItemDto)}
        loadMore={handleLoadMoreTrigger}
      />

      {initialData.total_results > data.length && (
        <Cluster
          style={{
            justifyContent: 'center',
            marginTop: '5vh',
          }}
        >
          <Button
            onClick={handleLoadMoreTrigger}
            variant="primary"
            loading={loading}
            disabled={loading}
            size="large"
          >
            Load More
          </Button>
        </Cluster>
      )}
    </div>
  )
}

export default Images
