import type { Photo } from 'pexels'
import { FC } from 'react'
import { Link } from 'react-router'
import Card from '../../../../components/card'

type GridItemProps = {
  data: Photo
}

const GridItem: FC<GridItemProps> = ({ data }) => {
  return (
    <Link to={`/${data.id}`}>
      <Card src={data.src.large} alt={data.alt ?? ''} />
    </Link>
  )
}

export default GridItem
