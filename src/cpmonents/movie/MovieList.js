import React, { useEffect, useState } from 'react';
import useSWR from 'swr'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MovieCard from './MovieCard';
import { fetcher } from '../../config';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const { data, error } = useSWR('https://api.themoviedb.org/3/movie/now_playing?api_key=bdbdc442fa53c848e35c2a262310be7f', fetcher);

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