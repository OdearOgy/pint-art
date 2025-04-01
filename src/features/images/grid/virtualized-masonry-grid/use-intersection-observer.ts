import type { Dispatch, SetStateAction } from 'react'

export const useIntersectionObserver = (
  setItemsFn: Dispatch<SetStateAction<Record<string, boolean>>>
) => {
  const observer = new IntersectionObserver(
    (records) => {
      const newItems: Record<string, boolean> = {}
      records.forEach((record) => {
        if (record.isIntersecting) {
          const id = (record.target as HTMLElement).dataset.id

          if (id) {
            newItems[id] = true
          }
        }

        if (Object.keys(newItems).length > 0) {
          setItemsFn((prev) => ({
            ...prev,
            ...newItems,
          }))
        }
      })
    },

    {
      rootMargin: '200px',
      threshold: 0.1,
    }
  )

  return observer
}
