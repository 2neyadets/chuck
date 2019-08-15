import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.chucknorris.io',
  timeout: 30000
})

instance.defaults.headers.post['Content-Type'] = 'application/json'

instance.interceptors.request.use(
  conf => conf,
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export default instance
