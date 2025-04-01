import { Photos } from 'pexels'
import { FC } from 'react'
import VirtualizedMasonryGrid from '../../../components/virtualized-masonry-grid/index.tsx'
import { GridStyles } from './index.css.ts'

const Images: FC<{
  data: Photos
}> = ({ data }) => {
  return (
    <div className={GridStyles}>
      <VirtualizedMasonryGrid items={data.photos} />
    </div>
  )
}

export default Images
