import { configureStore } from '@reduxjs/toolkit'

import chatReducer from './redux/reducers/chatReducer'

export default configureStore({
  reducer: { chatReducer },
})