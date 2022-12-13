import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authApi } from '../../api/apiServices'

export const login = createAsyncThunk('auth/login', async formData => {
	try {
		const response = await authApi.login(formData)
		if (response.data.success) return response.data
	} catch (error) {
		if (error.response.data) return error.response.data
		else return { success: false, message: error.message }
	}
})

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		loading: 'ide',
		token: '',
		isLoggedIn: false
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(login.pending, state => {
			state.loading = 'pending'
		})
        builder.addCase(login.fulfilled, (state, action) => {
			state.loading = 'ide'
            localStorage.setItem('learn-it', action.payload)
            state.token = action.payload
            state.isLoggedIn = true
		})
        builder.addCase(login.rejected, state => {
			state.loading = 'ide'
		})
	}
})
export default authSlice.reducer
