import { Outlet, useNavigation } from 'react-router'
import Cluster from '../components/layout/cluster'
import Spinner from '../components/spinner'
import Search from '../features/images/search'

const Layout = () => {
  const navigation = useNavigation()

  const isPending = navigation.state === 'loading'

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
        {isPending ? (
          <Cluster
            style={{
              justifyContent: 'center',
            }}
          >
            <Spinner />
          </Cluster>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  )
}

export default Layout
