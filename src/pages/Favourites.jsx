import React, { useEffect, useState, useSyncExternalStore } from "react";
import Movie from "../components/Movie";
import { getLocalStorageItem } from "../utilities/storage";
import { FAVOURITES } from "../utilities/constants";

function Favourites() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    console.log('favvve');
    const data = getLocalStorageItem(FAVOURITES) || [];
    setdata(data);
  }, []);

  
  const togo = (id) => {
    let sat = [...data];
    console.log("sat", sat);
    const favIndex = sat.findIndex((element) => element.id === id);
    if (favIndex !== -1) {
      sat.splice(favIndex, 1);
      setdata(sat);
    }
  };

  const movies = data.map((details) => (
    <Movie
      key={details.id}
      id={details.id}
      thumbnail={details.thumbnail}
      //   thumbnail={`https://www.themoviedb.org/t/p/w1280${details.thumbnail}`}
      movieTitle={details.movieTitle}
      releaseDate={details.releaseDate}
      favourite={true}
      ontoggle={() => togo(details.id)}
    />
  ));
  return (
    <div className="flex gap-4 overflow-x-auto whitespace-nowrap max-w-[1200px] mx-auto px-16 hide-scrollbar ">
      {movies}
    </div>
  );
}

export default Favourites;
