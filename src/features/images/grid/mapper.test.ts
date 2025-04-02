import { Photo } from 'pexels'
import { describe, expect, it } from 'vitest'
import { toMasonryItemDto } from './mapper'

describe('mapper', () => {
  describe('toMasonryDto()', () => {
    it('should map Photo to MasonryItem', () => {
      const mockPhoto = {
        avg_color: 'red',
        height: 800,
        id: 19,
        src: {
          large: 'https://image.com/image-120.jpg',
        },
      } as Photo

      const result = toMasonryItemDto(mockPhoto)

      expect(result).toEqual({
        alt: '',
        color: 'red',
        height: 100,
        id: '19',
        src: 'https://image.com/image-120.jpg',
      })
    })
  })
})
