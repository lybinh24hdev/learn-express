import axiosClient from "../axiosClient"

const authApi = {
  login: (formData) => {
    return axiosClient().get('auth/login', formData)
  },
  register: (formData) => {
    return axiosClient().get('auth/register', formData)
  }
}

export default authApi
