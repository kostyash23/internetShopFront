import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CarouselState {
  items: string[] // Change the type as per your carousel items
  currentIndex: number
}

const initialState: CarouselState = {
  items: [],
  currentIndex: 0
}

const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<string[]>) {
      state.items = action.payload
    },
    setCurrentIndex(state, action: PayloadAction<number>) {
      state.currentIndex = action.payload
    },
    next(state) {
      state.currentIndex = (state.currentIndex + 1) % state.items.length
    },
    previous(state) {
      state.currentIndex =
        (state.currentIndex - 1 + state.items.length) % state.items.length
    }
  }
})

export const { setItems, setCurrentIndex, next, previous } =
  carouselSlice.actions
export default carouselSlice.reducer
