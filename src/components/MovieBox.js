import Rating from '@mui/material/Rating';

/**
 * Displays the movie poster, title, summary (on mouse hover) and option to rate.
 * @param {"poster", "title", "summary"} props 
 */
function MovieBox(props) {
    return (
        <div className="movieSlide">
            <img className="moviePoster movieSlideContent" src={props.poster}/>
            <p className="movieTitle movieSlideContent">{props.title}</p>
            <p className="movieSummary movieSlideContent">{props.summary}</p>
            <div className="movieRating movieSlideContent"><Rating/></div>
        </div>
    );
}

export default MovieBox;