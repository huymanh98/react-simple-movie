import React from "react";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { fetcher, tmdbAPI } from '../../config';
import { SwiperSlide, Swiper } from "swiper/react";
import Button from "../button/Button";

const Banner = () => {
    const { data } = useSWR(tmdbAPI.getMovieList('upcoming'), fetcher);
    const movies = data?.results || [];
    return (
        <section className="banner h-[500px] page-container mb-20 overflow-hidden">
            <Swiper grabCursor="true" slidesPerView={"auto"}>
                {movies.length > 0 &&
                    movies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <BannerItem item={item}></BannerItem>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
};

function BannerItem({ item }) {
    const navigate = useNavigate();
    const { title, poster_path, id } = item;
    return (
        <div className="w-full h-full rounded-lg relative">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
            <img
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt=""
                className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute left-5 bottom-5 w-full text-white">
                <h2 className="font-bold text-3xl mb-5">{title}</h2>
                <div className="flex items-center gap-x-3 mb-8">
                    <span className="py-2 px-4 border border-white rounded-md">
                        Adventure
                    </span>
                    <span className="py-2 px-4 border border-white rounded-md">
                        Adventure
                    </span>
                    <span className="py-2 px-4 border border-white rounded-md">
                        Adventure
                    </span>
                </div>
                <Button className='py-3 px-6 rounded-lg text-white bg-red-600 font-medium' onClick={() => navigate(`/movies/${id}`)}>Watch now</Button>
            </div>
        </div>
    );
}

export default Banner;