import React, { useEffect, useState } from 'react';
import useSWR from 'swr'
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard, { MovieCardLoading } from './MovieCard';
import { fetcher, tmdbAPI } from '../../config';

const MovieList = ({ type = 'now_playing' }) => {
    const [movies, setMovies] = useState([]);

    const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
    const isLoading = !data && !error;
    console.log(isLoading);

    useEffect(() => {
        setMovies(data?.results)
    }, [data]);

    return (
        <div className="movie-list">
            {isLoading &&
                <>
                    <Swiper
                        grabCursor={'true'}
                        spaceBetween={40}
                        slidesPerView={'auto'}
                    >
                        <SwiperSlide>
                            <MovieCardLoading></MovieCardLoading>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCardLoading></MovieCardLoading>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCardLoading></MovieCardLoading>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCardLoading></MovieCardLoading>
                        </SwiperSlide>
                    </Swiper>
                </>
            }
            {!isLoading &&
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
            }
        </div>
    );
};

export default MovieList;