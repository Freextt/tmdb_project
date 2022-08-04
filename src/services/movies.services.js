import {axiosService} from "./axios.services";

const API_KEY = 'd019abb5e5f318415eb1e2c0181c130f';


const getMovies = async () => await axiosService.get(`/3/discover/movie/?api_key=d019abb5e5f318415eb1e2c0181c130f&page=3`);
const getMovie =  async (id) => await axiosService.get(`movie/${id}?api_key=${API_KEY}`);
const getGenres =  async () => await axiosService.get(`genre/movie/list?api_key=${API_KEY}`);
const getMoviesByGenre = async (id, pageNumber) => await axiosService.get(`discover/movie?api_key=${API_KEY}&with_genres=${id}&page=${pageNumber}`);

export {
    getMovie,
    getGenres,
    getMovies,
    getMoviesByGenre
}