import axios from 'axios';

const axiosService = axios.create({baseURL: "https://api.themoviedb.org/3/"});
export default axiosService;


