import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [], // {id, title, price, qty, image}
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload
      const exist = state.items.find(i => i.id === product.id)
      if (exist) {
        exist.qty += product.qty || 1
      } else {
        state.items.push({ ...product, qty: product.qty || 1 })
      }
      state.total = state.items.reduce((s, it) => s + it.price * it.qty, 0)
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload)
      state.total = state.items.reduce((s, it) => s + it.price * it.qty, 0)
    },
    updateQty(state, action) {
      const { id, qty } = action.payload
      const item = state.items.find(i => i.id === id)
      if (item) item.qty = qty
      state.total = state.items.reduce((s, it) => s + it.price * it.qty, 0)
    },
    clearCart(state) {
      state.items = []
      state.total = 0
    }
  }
})

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions
export default cartSlice.reducer