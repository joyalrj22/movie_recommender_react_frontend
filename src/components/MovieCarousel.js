import React from 'react';
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import MovieBox from './MovieBox';
import useMediaQuery from '../hooks/UseMediaQuery';

import '../css/MovieSlides/MovieSlides_SmallScreen.css';
import '../css/MovieSlides/MovieSlides.css';
import '../css/MovieSlides/MovieSlides_LargeScreen.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

const LARGE_SCREEN = '(min-width: 768px)';

function MovieCarousel(props) {
    let isLargeScreen = useMediaQuery(LARGE_SCREEN);
    return (
        <CarouselProvider infinite orientation={"horizontal"} step={2} visibleSlides={isLargeScreen ? 5 : 3} naturalSlideWidth={1} naturalSlideHeight={2} totalSlides={props.movies.length}>
            <div className='slideNavigation'>
                <ButtonBack className='slideNavigationButton'>&lt;</ButtonBack>
                <ButtonNext className='slideNavigationButton'>&gt;</ButtonNext>
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