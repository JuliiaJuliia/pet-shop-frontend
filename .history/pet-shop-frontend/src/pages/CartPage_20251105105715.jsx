import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateQty, removeFromCart, clearCart } from '../app/slices/cartSlice'
import { useForm } from 'react-hook-form'
import API from '../api/axios'
import styles from './CartPage.module.css'

const CartPage = () => {
  const { items, total } = useSelector(s => s.cart)
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      const order = {
        customer: data,
        items
      }
      await API.post('/order/send', order)
      // show modal / feedback
      alert('Order sent!')
      dispatch(clearCart())
      reset()
    } catch (err) {
      console.error(err)
      alert('Error sending order')
    }
  }

  if (items.length === 0) {
    return <div className={styles.empty}>Looks like you have no items in your basket currently. <a href="/">Continue shopping</a></div>
  }

  return (
    <div className={styles.container}>
      <h1>Shopping cart</h1>
      <div className={styles.grid}>
        <div className={styles.items}>
          {items.map(i => (
            <div key={i.id} className={styles.item}>
              <img src={i.image} alt={i.title} />
              <div>{i.title}</div>
              <div>${i.price}</div>
              <div>
                <button onClick={() => dispatch(updateQty({ id: i.id, qty: Math.max(1, i.qty - 1) }))}>-</button>
                <span>{i.qty}</span>
                <button onClick={() => dispatch(updateQty({ id: i.id, qty: i.qty + 1 }))}>+</button>
              </div>
              <button onClick={() => dispatch(removeFromCart(i.id))}>Remove</button>
            </div>
          ))}
        </div>
        <aside className={styles.summary}>
          <h3>Order details</h3>
          <div>{items.length} items</div>
          <div>Total ${total.toFixed(2)}</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name', { required: true })} placeholder="Name" />
            <input {...register('phone', { required: true })} placeholder="Phone number" />
            <input {...register('email')} placeholder="Email" />
            <button type="submit">Order</button>
          </form>
        </aside>
      </div>
    </div>
  )
}

export default CartPage