


export default function MoviesListCard({movie}){
const {title,overview} = movie;
    return(
        <div>
           <p>{title}</p>
           <p>{overview}</p>
        </div>
    )
}