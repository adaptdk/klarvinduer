import { combineReducers } from '@reduxjs/toolkit'

// Reducers
import uiReducer from '@features/ui/uiSlice'

const rootReducer = combineReducers({
  ui: uiReducer,
})

export default rootReducer
