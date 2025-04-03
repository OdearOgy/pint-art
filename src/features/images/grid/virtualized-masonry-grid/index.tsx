import { FC, memo, useCallback, useRef } from 'react'
import { Link } from 'react-router'
import Card from '../../../../components/card'
import { BUFFER_MARGIN } from './constants'
import { VirtualizedMasonryGridProps } from './types'
import { useVirtualization } from './use-virtualization'

const VirtualizedMasonryGrid: FC<VirtualizedMasonryGridProps> = ({
  bufferRows = 2,
  columnGap = 16,
  columnWidth = 320,
  items,
  loadMore,
}) => {
  const gridContainerRef = useRef<HTMLDivElement | null>(null)
  const loadMoreTriggered = useRef(false)

  const handleInfiniteLoading = useCallback(() => {
    const scrollY = globalThis.scrollY
    const windowHeight = globalThis.innerHeight
    const pageHeight = globalThis.document.documentElement.scrollHeight

    if (
      scrollY + windowHeight >= pageHeight - BUFFER_MARGIN &&
      loadMore &&
      !loadMoreTriggered.current
    ) {
      loadMoreTriggered.current = true
      loadMore()
    } else if (scrollY + windowHeight < pageHeight - BUFFER_MARGIN) {
      loadMoreTriggered.current = false
    }
  }, [loadMore])

  const { visibleItems, longestColumn } = useVirtualization(
    bufferRows,
    columnGap,
    columnWidth,
    gridContainerRef,
    items,
    handleInfiniteLoading
  )

  return (
    <div
      ref={gridContainerRef}
      style={{
        position: 'relative',
        height: `${longestColumn}px`,
        margin: '0 auto',
        maxWidth: '90%',
        display: 'flex',
      }}
    >
      {visibleItems?.map((item) => {
        const url = `/images/${item.id}`

        return (
          // TODO: The api sometimes returns the same image(s), so the id can't be used as a key
          <Link to={url} key={item.id} viewTransition>
            <Card
              id={item.id}
              src={item.src}
              alt={item.alt ?? ''}
              style={{
                background: item.color,
                color: item.color,
                height: `${item.height}px`,
                left: `${item.posX}px`,
                top: `${item.posY}px`,
                position: 'absolute',
                width: columnWidth,
              }}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default memo(VirtualizedMasonryGrid)
