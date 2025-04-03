import { Outlet } from 'react-router'
import Cluster from '../components/layout/cluster'
import Search from '../features/images/search'

const Layout = () => {
  return (
    <>
      <Cluster
        style={{
          margin: '5% auto 2%',
          justifyContent: 'center',
        }}
      >
        <Search />
      </Cluster>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
