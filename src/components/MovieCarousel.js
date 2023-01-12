import React from 'react';
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import MovieBox from './MovieBox';
import '../css/MovieSlides.css'
import 'pure-react-carousel/dist/react-carousel.es.css';

function MovieCarousel(props) {
    return (
        <CarouselProvider infinite orientation={"horizontal"} step={2} visibleSlides={5} naturalSlideWidth={1} naturalSlideHeight={2} totalSlides={props.movies.length}>
            <div className='slideNavigationButtons'>
                <ButtonBack className='movieSlideBack'>Back</ButtonBack>
                <ButtonNext className='movieSlideNext'>Next</ButtonNext>
            </div>
            <Slider className={"slider"}>
                {
                props.movies.map((movie,i) => 
                    <Slide index={i++} key={i}>
                        <MovieBox poster={movie.poster} title={movie.title} summary={movie.summary}/>
                    </Slide>)
                }
            </Slider>
        </CarouselProvider>
    );
}

export default MovieCarousel;