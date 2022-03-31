import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:1337'
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