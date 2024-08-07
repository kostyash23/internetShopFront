import { IProduct } from '@/types/product.interface'

import Image from 'next/image'
import { FC } from 'react'
import AddToCartButton from './AddToCartButton'
import ProductRating from './ProductRating'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { convertPrice } from '@/utils/convertPrice'

const DynamicFavoriteButton = dynamic(() => import('./FavoriteButton'), {
  ssr: false
})
const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div>
      <div className="relative bg-white rounded-xl z-10 overflow-hidden">
        <div className="absolute top-2 right-2">
          <DynamicFavoriteButton productId={product.id} />
          <AddToCartButton product={product} />
        </div>
        <Link href={`/product/${product.slug}`} className="block">
          <Image
            width={250}
            height={250}
            src={product.images[0]}
            alt={product.name}
          />
        </Link>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-1 font-semibold text-sm">{product.name}</h3>
        </Link>

        <Link
          href={`/category/${product.category.slug}`}
          className="text-aqua text-sm"
        >
          {product.category.name}
        </Link>

        <ProductRating product={product} />
        <div className="text-xl font-semibold">
          {convertPrice(product.price)}
        </div>
      </div>
    </div>
  )
}

export default ProductItem
