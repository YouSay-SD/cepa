import axios from 'axios'
import { STRAPI_URL } from 'constants'

const client = axios.create({
  baseURL: STRAPI_URL
})

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = 'Bearer token'
  const onSuccess = resp => resp
  const onError = error => {
    // optionally catch errors 
    return error
  }

  return client(options).then(onSuccess).catch(onError)
}