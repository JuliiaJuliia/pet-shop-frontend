import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'categories',
  initialState: { list: [], loading: false },
  reducers: {
    setCategories(state, action) { state.list = action.payload },
    setLoading(state, action) { state.loading = action.payload }
  }
})

export const { setCategories, setLoading } = slice.actions
export default slice.reducer