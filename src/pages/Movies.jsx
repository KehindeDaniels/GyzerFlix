import { useEffect, useState } from "react";
import { MOVIES } from "../utilities/constants";
import { getLocalStorageItem, setLocalStorageItem } from "../utilities/storage";
import Movie from "../components/Movie";

function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const movies = getLocalStorageItem(MOVIES) || [];
    if (movies.length !== 0) {
      console.log("new every monnin");
      setMovies(movies);
      return;
    }
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGRkZmQ1OTdkMDg3MTU3YjRkMTE2Zjk2ZDYxODMwOSIsInN1YiI6IjY1NjI3M2FjYjIzNGI5MDBlMmM3M2M5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pUn00vaZM5EswjGB_8C40MIzckjsdEss-_SWQ9GWeeo",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const moves = response.results.map((movieData) => ({
          ...movieData,
          favourite: false,
        }));

        setMovies(moves);
        setLocalStorageItem(MOVIES, moves);
      })
      .catch((err) => console.error(err));

    // const dataAndFav = movieDatas.map((movieData) => ({
    //   ...movieData,
    //   favourite: false,
    // }));
  }, []);

  const togo = (id) => {
    let moviesCopy = [...movies];
    // let sat = movies
    console.log("sat", moviesCopy);
    const movieIndex = moviesCopy.findIndex((element) => element.id === id);
    if (movieIndex !== -1) {
      moviesCopy[movieIndex].favourite = !moviesCopy[movieIndex].favourite;
      // sat.splice(movieIndex, 1);
      setMovies(moviesCopy);
    }
  };

  const renderMovies = movies.map((details) => {
    // details.favourite = false;
    return (
      <Movie
        key={details.id}
        id={details.id}
        thumbnail={`https://www.themoviedb.org/t/p/w1280${details.poster_path}`}
        movieTitle={details.title}
        releaseDate={details.release_date}
        rating={details.vote_average}
        favourite={details.favourite}
        ontoggle={() => togo(details.id)}
      />
    );
  });

  return (
    <div className="relative font-poppins mt-4 max-w-[1200px]">
      <h2 className="pl-16 mb-4 text-slate-100  text-2xl">Trending</h2>
      <div className="flex gap-4 overflow-x-auto whitespace-nowrap mx-auto px-16 hide-scrollbar">
        {renderMovies}
      </div>

    </div>
  );
} 

export default Movies;
