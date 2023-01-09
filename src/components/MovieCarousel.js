import React from 'react';
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import MovieBox from './MovieBox';

function MovieCarousel(props) {
    return (
        <CarouselProvider infinite orientation={"horizontal"} visibleSlides={3} naturalSlideWidth={150} naturalSlideHeight={300} totalSlides={props.movies.length}>
            <Slider>
                {
                props.movies.map((movie,i) => 
                    <Slide index={i++} key={i}>
                        <MovieBox poster={movie.poster} title={movie.title} summary={movie.summary}/>
                    </Slide>)
                }
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
    );
}

export default MovieCarousel;