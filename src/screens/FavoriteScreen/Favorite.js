import React from 'react';
import {FlatList, Text, View} from 'react-native';
import MovieCards from '../../components/MovieCards';
import {useMoviesContext} from '../../context/MoviesContext';

const Favorite = () => {
  const {favouiret = []} = useMoviesContext();
  return (
    <View style={{marginTop: 40, height: '100%'}}>
      {favouiret.length ? (
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
          Favourite Movies
        </Text>
      ) : (
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
          There is no favouiret movies
        </Text>
      )}
      <FlatList
        style={{height: '100%'}}
        data={favouiret}
        keyExtractor={item => item && item.id}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => (
          <MovieCards
            imageUrl={item && item.imageUrl}
            id={item && item.id}
            name={item && item.name}
            isFavourite={true}
          />
        )}
      />
    </View>
  );
};

export default Favorite;
