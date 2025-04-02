// toMasonryItemDto.test.ts
import { Photo } from 'pexels'
import { describe, expect, it } from 'vitest'
import { toMasonryItemDto } from './mapper'

describe('mapper', () => {
  describe('toMasonryDto()', () => {
    it('should convert Photo to MasonryItem', () => {
      const mockPhoto = {
        id: 19,
        src: {
          large: 'https://image.com/image-120.jpg',
        },
        height: 800,
        avg_color: 'red',
      } as Photo

      const result = toMasonryItemDto(mockPhoto)

      expect(result).toEqual({
        id: '19',
        src: 'https://image.com/image-120.jpg',
        height: 100,
        color: 'red',
        alt: '',
      })
    })
  })
})
