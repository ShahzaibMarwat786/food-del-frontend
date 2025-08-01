import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalAmount, url} = useContext(StoreContext)

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>remove</p>

        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className='cros' onClick={()=>removeFromCart(item._id)}>X</p>
                </div>
                <hr />
              </div>
            )
          }
        })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-totel">
          <h2>Cart Totels</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalAmount()===0?0:getTotalAmount()+2}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/PlaceOrder')}>PROCCED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Enter promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart