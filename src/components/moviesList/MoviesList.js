import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {moviesActions} from "../../redux";
import MoviesListCard from "../moviesListCard/MoviesListCard";


export default function MoviesList(){
    const {movies} = useSelector(state => state.moviesReducer)
    let dispatch = useDispatch();
    useEffect(()=> {
        dispatch(moviesActions.get_Movies());
    },[]);
    return(
        <div>
            {
                movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
            }
        </div>
    )
}