import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { RiShoppingCartFill, RiShoppingCart2Line } from 'react-icons/ri'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
  const { addToCart, removeFromCart } = useActions()
  const { items } = useCart()
  const currentElement = items.find(
    cartItem => cartItem.product.id === product.id
  )
  return (
    <div className="text-primary">
      <button
        onClick={() => {
          currentElement
            ? removeFromCart({ id: currentElement?.id })
            : addToCart({
                product,
                quantity: 1,
                price: product.price
              })
        }}
      >
        {!currentElement ? <RiShoppingCart2Line /> : <RiShoppingCartFill />}
      </button>
    </div>
  )
}

export default AddToCartButton
