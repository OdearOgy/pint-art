import { RefObject } from 'react'
import { ColumnItem, MasonryItem } from './types'
import { useLayoutConfiguration } from './use-layout-configuration'

export const useVirtualization = (
  bufferRows: number,
  columnGap: number,
  columnWidth: number,
  gridContainerRef: RefObject<HTMLDivElement | null>,
  items: MasonryItem[],
  onScroll: () => void
): {
  visibleItems: ColumnItem[]
  longestColumn: number
} => {
  const { gridColumns, gridContainerHeight, scrollPosition } = useLayoutConfiguration(
    gridContainerRef,
    columnWidth,
    columnGap,
    onScroll
  )

  const gridColumnHeight = new Array(gridColumns).fill(0)
  const gridColumnItems: ColumnItem[] = []

  items.forEach((item) => {
    const shortestColumn = gridColumnHeight.indexOf(Math.min(...gridColumnHeight))
    const posY = gridColumnHeight[shortestColumn]
    const posX = shortestColumn * (columnWidth + columnGap)

    gridColumnItems.push({ ...item, posX, posY })
    gridColumnHeight[shortestColumn] += item.height + columnGap
  })

  const longestColumn = Math.max(...gridColumnHeight)
  const buffer = bufferRows * gridContainerHeight
  const containerTopBorder = scrollPosition - buffer
  const containerBottomBorder = scrollPosition + gridContainerHeight + buffer

  const visibleItems = gridColumnItems.filter((item) => {
    const { posY, height } = item
    return posY + height > containerTopBorder && posY < containerBottomBorder
  })

  return {
    visibleItems,
    longestColumn,
  }
}
