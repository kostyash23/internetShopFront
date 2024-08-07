import { TypePaginationProducts } from '@/types/product.interface'
import { FC, useEffect, useState } from 'react'
import ProductItem from './product-item/ProductItem'
import Spiner from '../Spiner'
import Heading from '../Heading'
import SortDropDown from './SortDropDown'
import Button from '../button/Button'
import { EnumProductSort } from '@/services/product/product.types'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product/product.service'

interface ICatelogPagination {
  data: TypePaginationProducts
  isLoading?: boolean
  title?: string
}

const CatalogWithPagination: FC<ICatelogPagination> = ({
  data,
  isLoading,
  title
}) => {
  const [sortType, setSortType] = useState<EnumProductSort>(
    EnumProductSort.NEWEST
  )
  const [perPage, setPerPage] = useState(4)
  if (isLoading) return <Spiner />

  const { data: response } = useQuery({
    queryKey: ['products', sortType, perPage],
    queryFn: () =>
      ProductService.getAll({
        page: 1,
        perPage,
        sort: sortType
      }),
    initialData: data
  })
  useEffect(() => {
    setPerPage(4)
  }, [sortType])
  return (
    <section>
      {title && <Heading className="mb-5">{title}</Heading>}
      <SortDropDown sortType={sortType} setSortType={setSortType} />
      {response.products.length ? (
        <div className="grid grid-cols-4 gap-10">
          {response.products?.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>There are no products</div>
      )}
      <div className="text-center mt-5">
        <Button variant="orange" onClick={() => setPerPage(perPage + 4)}>
          Load more
        </Button>
      </div>
    </section>
  )
}

export default CatalogWithPagination
