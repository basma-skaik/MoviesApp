import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import MovieCards from './MovieCards';
import {useMoviesContext} from '../context/MoviesContext';

const MoviesFlatlist = () => {
  const {movies = [], setMovies} = useMoviesContext();
  const {width} = useWindowDimensions();
  return (
    <FlatList
      data={movies}
      keyExtractor={item => item.id}
      // pagingEnabled
      // disableIntervalMomentum
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.imgContentContainerStyle}
      renderItem={({item}) => (
        <MovieCards
          imageUrl={item && item.imageUrl}
          id={item && item.id}
          name={item && item.name}
        />
      )}
    />
  );
};

export default MoviesFlatlist;

const styles = StyleSheet.create({
  imgContentContainerStyle: {
    paddingHorizontal: 15,
    marginLeft: 15,
  },
});
