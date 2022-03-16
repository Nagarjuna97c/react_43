import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const priceArr = cartList.map(
        eachItem => eachItem.price * eachItem.quantity,
      )
      const cartItems = cartList.length

      const totalPrice =
        cartItems > 0 ? priceArr.reduce((prev, curr) => prev + curr) : 0
      console.log(totalPrice)

      return (
        <div className="order-details">
          <h1 className="order-total">
            Order Total: <span className="order-price">Rs {totalPrice}/-</span>
          </h1>
          <p className="cart-items-num">{cartItems} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
