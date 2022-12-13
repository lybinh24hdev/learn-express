import axios from "axios"

import { API_URL } from "./config"

const axiosClient = (opts = {}, optsHeader = {}) => {
  const defaultOptions = {
    ...opts,
    headers: optsHeader
  }
  /*
  |--------------------------------------------------
  | Custom axios api
  |--------------------------------------------------
  */
  const axiosApi = axios.create({
    baseURL: API_URL,
    ...defaultOptions
    // withCredentials: true
  })

  // error will be showed in catch block instead of appeared in then
  axiosApi.interceptors.request.use(
    config =>
      // Do something before request is sent
      // NOTE: log here to see the config of request,
      // TODO: remove when authentication feature completed
      // console.log(config)
      config,
    error =>
      // Do something with request error
      Promise.reject(error)
  )
  axiosApi.interceptors.response.use(
    response => {
      if (response.data.type === "error") {
        throw response.data.msg || "Load API error"
      }
      return response
    },
    error =>
      // Do something with response error
      // Handle logout here
      // if (error.response.status === 401) {
      // }
      Promise.reject(error.response)
  )

  return axiosApi
}

export default axiosClient
