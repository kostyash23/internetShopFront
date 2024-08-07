import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

interface ReviewResponse {
  data: number // або інший тип, що відповідає вашим даним
}

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
  const [rating, setRating] = useState<number>(
    Math.round(
      product.reviews.reduce((acc, review) => acc + review.rating, 0) /
        product.reviews.length
    ) || 0
  )

  return (
    <div className="flex items-center flex-wrap">
      {!!product.reviews.length && (
        <>
          <Rating
            initialValue={rating}
            readonly
            SVGstyle={{ display: 'inline-block' }}
            size={20}
            allowFraction
            transition
          />
          <span className="text-primary">{rating}</span>
        </>
      )}

      <span>({product.reviews.length} reviews )</span>
    </div>
  )
}

export default ProductRating
