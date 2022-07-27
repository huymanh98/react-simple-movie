import React, { useEffect, useState } from 'react';
import useSWRInfinite from "swr/infinite";
import { fetcher, tmdbAPI } from '../config';
import useDebounce from 'hooks/useDebounce';
import MovieCard, { MovieCardLoading } from 'components/movie/MovieCard';
const itemsPerPage = 20;

const MoviePageV2 = () => {
    const [filter, setFilter] = useState('');
    const [url, setUrl] = useState(tmdbAPI.getMovieList('popular', 1));
    const filterDebounce = useDebounce(filter, 1500);

    const handleFilter = (e) => {
        setFilter(e.target.value);
    }

    const { data, size, setSize } = useSWRInfinite(
        (index) => url.replace('page=1', `page=${index + 1}`),
        fetcher
    );

    useEffect(() => {
        if (filterDebounce) {
            setUrl(tmdbAPI.getMovieSearch(filterDebounce, 1));
        } else {
            setUrl(tmdbAPI.getMovieList('popular', 1));
        }
    }, [filterDebounce]);

    const loading = !data;
    const movies = data ? data.reduce((a, b) => a.concat(b.results), []) : [];
    const isEmpty = data?.[0]?.results.length === 0;
    const isReachingEnd = isEmpty || (data && data[data.length - 1]?.results.length < itemsPerPage);

    return (
        <div className="py-10 page-container">
            <div className="flex mb-10">
                <div className="flex-1">
                    <input
                        type="text"
                        className="w-full p-4 bg-slate-800 text-white outline-none"
                        placeholder="Type here to search..."
                        onChange={handleFilter}
                    />
                </div>
                <button className="p-4 bg-red-500 text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-4 gap-10">
                {loading &&
                    <>
                        <MovieCardLoading></MovieCardLoading>
                        <MovieCardLoading></MovieCardLoading>
                        <MovieCardLoading></MovieCardLoading>
                        <MovieCardLoading></MovieCardLoading>
                        <MovieCardLoading></MovieCardLoading>
                        <MovieCardLoading></MovieCardLoading>
                        <MovieCardLoading></MovieCardLoading>
                        <MovieCardLoading></MovieCardLoading>
                    </>
                }
                {!loading && movies.length > 0 &&
                    movies.map((item) => (
                        <MovieCard key={item.id} info={item}></MovieCard>
                    ))
                }
            </div>
            {!isReachingEnd &&
                <button className='py-3 px-8 bg-red-600 mx-auto block mt-10 rounded-lg' onClick={() => setSize(size + 1)}>Load More</button>
            }

        </div>
    );
};

export default MoviePageV2;