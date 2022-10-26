import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useMoviesContext} from '../context/MoviesContext';

const MovieCards = ({name, imageUrl, id, isFavourite, like}) => {
  const {addToFavouiret, deleteFromFavouiret /*handleLike*/} =
    useMoviesContext();
  return (
    <View style={styles.imgContanierStyle}>
      <ImageBackground style={styles.movieImg} source={imageUrl}>
        {isFavourite ? (
          <Pressable onPress={() => deleteFromFavouiret(id)}>
            <AntDesign
              name="heart"
              size={30}
              color={'#6C63FF'}
              style={styles.icon}
            />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              addToFavouiret(id);
            }}>
            <AntDesign
              name="hearto"
              size={30}
              color={'#6C63FF'}
              style={styles.icon}
            />
          </Pressable>
        )}
        {/* <Pressable
          // style={{position: 'absolute'}}
          onPress={() => handleLike(id)}>
          <AntDesign
            name="heart"
            size={30}
            color={like ? 'red' : 'white'}
            style={styles.icon}
          />
        </Pressable> */}
        <Text style={styles.title}>{name}</Text>
      </ImageBackground>
    </View>
  );
};

export default MovieCards;

const styles = StyleSheet.create({
  imgContanierStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    flex: 1,
    height: 200,
    marginVertical: 10,
  },
  movieImg: {
    width: 180,
    height: 200,
    borderRadius: 50,
    position: 'relative',
  },
  title: {
    fontSize: 12,
    position: 'absolute',
    color: '#fff',
    paddingTop: 164,
    paddingBottom: 16,
    paddingLeft: 15,
  },
  icon: {
    paddingTop: 14,
    paddingBottom: 133.5,
    paddingLeft: 130.5,
    height: '100%',
  },
});
