import React from 'react';


const MovieCard = ({ info }) => {
    return (
        <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
            <img
                src={`https://image.tmdb.org/t/p/original/${info.poster_path}`}
                alt=""
                className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <div className="flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">{info.original_title}</h3>
                <div className="flex items-center justify-between text-sm opacity-50 mb-10">
                    <span>{info.release_date}</span>
                    <span>{info.vote_average}</span>
                </div>
                <button className='w-full py-3 px-6 rounded-lg capitalize bg-red-600'>Watch now</button>
            </div>
        </div>
    );
};

export default MovieCard;