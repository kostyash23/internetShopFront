import { TypePaginationProducts } from '@/types/product.interface'

import CatalogWithPagination from '@/ui/catalog/CatalogWithPagination'
import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/Meta'
import { FC } from 'react'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
  return (
    <Meta title="Home">
      <Layout>
        <CatalogWithPagination
          data={{ products, length }}
          title={'Fresh products'}
        />
      </Layout>
    </Meta>
  )
}

export default Home
