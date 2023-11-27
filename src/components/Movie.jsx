import React, { useState } from "react";
import fav from "../assets/img/favourite.svg";
import { getLocalStorageItem, setLocalStorageItem } from "../utilities/storage";
import { FAVOURITES, MOVIES } from "../utilities/constants";
import { FaHeart } from 'react-icons/fa'
import { FaPlayCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const Movie = (props) => {
  const toggleFavorite = () => {
    props.ontoggle && props.ontoggle()
    const Favs = getLocalStorageItem(FAVOURITES) || [];
    const movies = getLocalStorageItem(MOVIES) || [];
    const favIndex = Favs.findIndex((element) => element.id === props.id);
    const movieIndex = movies.findIndex((element) => element.id === props.id);
    console.log("favIndex", favIndex);
    if (favIndex !== -1) {
      Favs.splice(favIndex, 1);
    } else {
      Favs.push(props);
    }
    movies[movieIndex].favourite = !movies[movieIndex].favourite
    setLocalStorageItem(FAVOURITES, Favs);
    setLocalStorageItem(MOVIES, movies);
  };
  return (
    <div className=" flex flex-col items-center font-poppins cursor-pointer w-40">  
      
      <div className="image w-40 transform transition duration-300 hover:scale-110 relative">
      <div className="rating absolute top-0 grid place-content-center px-4 rounded bg-[#e6b951a2] text-yellow-300">
        <FaStar    />
        <p className="text-xs text-white font-semibold">{props.rating}</p>
      </div>

        <div className="flex items-center justify-center absolute  w-inherit h-inherit inset-0 bg-[#3DD2CC] opacity-0 hover:opacity-50 transition-opacity duration-500 ease-in-out rounded-xl">
          <div className=" ">
            <FaPlayCircle size={40} />
          </div>
         
        </div>
        <img src={props.thumbnail} alt="" className="rounded-xl" />
      </div>

      <div className="details relative w-full text-left pt-2">
        <div className="details__title__date w-full">
          <div className="text-slate-200 text-xs  whitespace-pre-wrap">
            {props.movieTitle}
          </div>
          <p className="text-gray-500 text-xs mt-1 whitespace-pre-wrap">
            {props.releaseDate}
          </p>
        </div>
        
        <div className="w-4 absolute top-2 right-2">
          <div className={props.favourite ? "text-[#3DD2CC]" : "text-white"} onClick={() => toggleFavorite()} >
            <FaHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
