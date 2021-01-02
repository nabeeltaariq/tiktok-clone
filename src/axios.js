import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://mern-tiktok-backend-practice.herokuapp.com',
})

export default instance
