import Rating from '@mui/material/Rating';

/**
 * Displays the movie poster, title, summary (on mouse hover) and option to rate.
 * @param {"poster", "title", "summary"} props 
 */
function MovieBox(props) {
    return (
        <div className={"movieSlide"}>
            <img className={"moviePoster"} src={props.poster}/>
            <p className={"movieTitle"}>{props.title}</p>
            <p className={"movieSummary"}>{props.summary}</p>
            <Rating className={"movieRating"}/>
        </div>
    );
}

export default MovieBox;