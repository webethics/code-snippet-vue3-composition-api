import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5174',
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})

export default api
