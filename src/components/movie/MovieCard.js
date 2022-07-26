import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../button/Button';

const MovieCard = ({ info }) => {
    const navigate = useNavigate();
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
                    <span>{new Date(info.release_date).getFullYear()}</span>
                    <span>{info.vote_average}</span>
                </div>
                <Button className='w-full mt-auto py-3 px-6 rounded-lg capitalize bg-red-600' onClick={() => navigate(`/movies/${info.id}`)}>Watch now</Button>
            </div>
        </div>
    );
};

export default MovieCard;