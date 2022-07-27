import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import ReactPaginate from 'react-paginate';
import { fetcher, tmdbAPI } from '../config';
import useDebounce from 'hooks/useDebounce';
import MovieCard, { MovieCardLoading } from 'components/movie/MovieCard';

const itemsPerPage = 20;

const MoviePage = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('');
    const [url, setUrl] = useState(tmdbAPI.getMovieList('popular'));
    const filterDebounce = useDebounce(filter, 1500);
    const handleFilter = (e) => {
        setFilter(e.target.value);
    }
    useEffect(() => {
        if (filterDebounce) {
            setUrl(tmdbAPI.getMovieSearch(filterDebounce, page));
        } else {
            setUrl(tmdbAPI.getMovieList('popular', page));
        }
    }, [filterDebounce, page]);
    const { data } = useSWR(url, fetcher);
    const loading = !data;
    const movies = data?.results || [];
    useEffect(() => {
        if (!data || !data.total_pages) return;
        setPageCount(Math.ceil(data.total_pages / itemsPerPage));
    }, [data]);

    const handlePageClick = (event) => {
        setPage(event.selected + 1);
    };

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
            {/* {
                loading && (<div className='w-10 h-10 rounded-full border-4 border-red-500 border-t-transparent border-t-4 mx-auto animate-spin'></div>)
            } */}
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
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                marginPagesDisplayed={4}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className="custom-paginate mt-20 flex justify-center"
                pageClassName="mx-1 rounded-md border"
                previousClassName="bg-red-600 rounded-md text-white"
                nextClassName="bg-red-600 rounded-md text-white"
                breakClassName="px-4 py-2"
                activeClassName="bg-slate-500 text-white"
                pageLinkClassName="px-4 py-2 flex justify-center"
                previousLinkClassName="px-4 py-2 flex justify-center"
                nextLinkClassName="px-4 py-2 flex justify-center"
            />
        </div>
    );
};

export default MoviePage;