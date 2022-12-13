import { combineReducers } from '@reduxjs/toolkit'

// Reducers
import authReducer from '../pages/Auth/authSlice'

const rootReducer = combineReducers({
	auth: authReducer
})

// export
export default rootReducer
