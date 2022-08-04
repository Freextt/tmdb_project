import axios from "axios";
import {baseURL} from "../consts/urls/urls";

const axiosService =  axios.create({baseURL});
axiosService.interceptors.request.use((config) =>{
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDE5YWJiNWU1ZjMxODQxNWViMWUyYzAxODFjMTMwZiIsInN1YiI6IjYyZTJlNmEwMGU1YWJhMDA1YjVmYzk2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5AYbAi7v_8wmgx0QhJPxglZzzbgXILf2udWWbZz9mGo'
   if(token){
       config.headers.Authorization = `Bearer ${token}`
   }
   return config;
})
export {
    axiosService
}

