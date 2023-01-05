import Rating from '@mui/material/Rating';
/**
 * Displays the movie poster, title, summary (on mouse hover) and option to rate.
 * @param {"poster", "title", "summary"} props 
 */
function MovieBox(props) {
    return (
        <div>
            <img src={props.poster}/>
            <p>{props.title}</p>
            <p>{props.summary}</p>
            <Rating></Rating>
        </div>
    );
}

export default MovieBox;