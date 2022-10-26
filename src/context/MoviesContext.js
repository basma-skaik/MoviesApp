import {useState, useContext, createContext} from 'react';
import {MoviesList} from '../utils/MoviesList';

const MoviesContext = createContext();

export const MoviesContextProvider = ({children}) => {
  const [movies, setMovies] = useState(MoviesList);

  const [favouiret, setFavouiret] = useState([]);

  const addToFavouiret = movieId => {
    const isExist = favouiret.find(item => item && item.id === movieId);
    if (!isExist) {
      const findedFilm = movies.find(item => item && item.id === movieId);
      setFavouiret(prev => [findedFilm, ...prev]);
    }
  };
  // const handleLike = id => {
  //   let temp = [...movies];
  //   let index = temp.findIndex(el => el.id == id);
  //   temp[index].like = !temp[index].like;
  //   setMovies(temp);
  // };
  const deleteFromFavouiret = movieId => {
    const findedFilms = favouiret.filter(item => item && item.id !== movieId);
    setFavouiret(findedFilms);
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        favouiret,
        setFavouiret,
        addToFavouiret,
        deleteFromFavouiret,
        // handleLike,
      }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => useContext(MoviesContext);
