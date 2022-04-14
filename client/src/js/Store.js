import { configureStore } from '@reduxjs/toolkit'
import gameSlice  from './gameslice/gameSlice'

export const Store = configureStore({
  reducer: {
    game:gameSlice
  },
})