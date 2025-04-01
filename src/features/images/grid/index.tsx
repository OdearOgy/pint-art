import { Photos } from 'pexels'
import { FC } from 'react'
import { GridStyles } from './index.css.ts'
import { toMasonryItemDto } from './mapper.ts'
import VirtualizedMasonryGrid from './virtualized-masonry-grid/index.tsx'

const Images: FC<{
  data: Photos
}> = ({ data }) => {
  return (
    <div className={GridStyles}>
      <VirtualizedMasonryGrid items={data.photos?.map(toMasonryItemDto)} />
    </div>
  )
}

export default Images
