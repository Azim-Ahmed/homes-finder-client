//to centralise the api , so we can change the data in every place by changing one place.
import axios from 'axios';
import { server } from '../urlConfig';

const axiosInstance = axios.create({
  baseURL: server,
});

export default axiosInstance;
