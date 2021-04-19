import rootReducer from '@app/rootReducer'
import type { Store } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

const store: Store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export default store
