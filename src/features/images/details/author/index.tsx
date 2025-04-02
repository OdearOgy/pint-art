import { Photo } from 'pexels'
import type { FC } from 'react'
import { Link } from 'react-router'
import ArrowTopRightIcon from '../../../../components/icons/arrow-top-right-icon.tsx'
import Cluster from '../../../../components/layout/cluster'
import Stack from '../../../../components/layout/stack'

const Author: FC<{
  data: Photo
}> = ({ data }) => {
  return (
    <Stack
      style={{
        textAlign: 'center',
        marginBottom: '20vh',
      }}
    >
      <h3>Author</h3>
      <Link rel="stylesheet" to={data.photographer_url} target="_blank">
        <h2>
          <Cluster
            space={2}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ArrowTopRightIcon />
            {data.photographer}
          </Cluster>
        </h2>
      </Link>
    </Stack>
  )
}

export default Author
