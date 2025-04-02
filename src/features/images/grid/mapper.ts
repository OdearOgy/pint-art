import { Photo } from 'pexels'
import { vars } from '../../../styles/theme.css'
import { MasonryItem } from './virtualized-masonry-grid/types'

export const toMasonryItemDto = (data: Photo): MasonryItem => {
  return {
    id: data.id?.toString(),
    src: data.src.large,
    height: data.height / 8,
    color: data?.avg_color ?? vars.color.neutral[500],
    alt: data.alt ?? '',
  }
}
