export type MasonryItem = {
  height: number
  id: string
  src: string
  color?: string
  alt: string
}

export type ColumnItem = MasonryItem & {
  posX: number
  posY: number
}

export type LayoutConfiguration = {
  gridColumns: number
  gridContainerHeight: number
  scrollPosition: number
}

export interface VirtualizedMasonryGridProps {
  bufferRows?: number
  columnGap?: number
  columnWidth?: number
  items: MasonryItem[]
  loadMore: () => void
}
