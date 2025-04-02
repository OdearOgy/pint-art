import { RefObject, useCallback, useEffect, useState } from 'react'
import { LayoutConfiguration } from './types'

export const useLayoutConfiguration = (
  gridContainerRef: RefObject<HTMLDivElement | null>,
  columnWidth: number,
  columnGap: number,
  onScroll: () => void
): LayoutConfiguration => {
  const [gridColumns, setGridColumns] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [gridContainerHeight, setGridContainerHeight] = useState(globalThis.innerHeight)

  const handleResize = useCallback(() => {
    if (gridContainerRef.current) {
      const width = gridContainerRef.current.offsetWidth
      const columns = Math.max(1, Math.floor(width / (columnWidth + columnGap)))
      setGridColumns(columns)
    }

    setGridContainerHeight(globalThis.innerHeight)
  }, [gridContainerRef, columnWidth, columnGap, setGridColumns, setGridContainerHeight])

  const handleScroll = useCallback(() => {
    setScrollPosition(globalThis.scrollY)
    onScroll()
  }, [onScroll])

  useEffect(() => {
    globalThis.requestAnimationFrame(handleResize)

    globalThis.addEventListener('resize', handleResize)
    return () => globalThis.removeEventListener('resize', handleResize)
  }, [handleResize])

  useEffect(() => {
    globalThis.addEventListener('scroll', handleScroll)
    return () => globalThis.removeEventListener('scroll', handleScroll)
  })

  return {
    gridColumns,
    scrollPosition,
    gridContainerHeight,
  }
}
