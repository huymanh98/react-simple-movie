import React, { useEffect, useState } from 'react';
import useSWR from 'swr'
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from './MovieCard';
import { fetcher, tmdbAPI } from '../../config';

const MovieList = ({ type = 'now_playing' }) => {
    const [movies, setMovies] = useState([]);

    const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);

    useEffect(() => {
        setMovies(data?.results)
    }, [data]);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={'true'}
                spaceBetween={40}
                slidesPerView={'auto'}
            >
                {
                    movies?.length > 0 &&
                    movies.map((item) => (<SwiperSlide>
                        <MovieCard key={item.id} info={item}></MovieCard>
                    </SwiperSlide>))
                }
            </Swiper>
        </div>
    );
};

export default MovieList;