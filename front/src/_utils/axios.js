import axios from 'axios';

const instanceAxios = axios.create( {
  baseURL: 'http://localhost:81/api/',
  withCredentials: true
});

instanceAxios.defaults.headers.post['Content-Type'] = 'application/json';

export default instanceAxios;