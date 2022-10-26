import React from 'react';
import {
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import OnBoardingImages from './components/OnBoardingImages';
import Title from '../../components/Title';
import MoviesFlatlist from '../../components/MoviesFlatlist';

const Home = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={{backgroundColor: '#FFFFFF'}}>
        <View style={styles.Contanier}>
          <View style={styles.searchContanier}>
            <AntDesign
              name="search1"
              size={26}
              color={'#6C63FF'}
              style={{flex: 1, padding: 17}}
            />
            <TextInput
              style={styles.searchTextInput}
              placeholder="Search for What you want.."
            />
            <FontAwesome
              name="microphone"
              size={26}
              color={'#6C63FF'}
              style={{flex: 1, padding: 17}}
            />
          </View>
          <Entypo
            name="list"
            size={35}
            color={'black'}
            style={{
              flex: 1,
              marginVertical: 27,
              marginRight: 29,
            }}
          />
        </View>
        <OnBoardingImages />
        <Title title="What's New" />
        <MoviesFlatlist />
        <Title title="Popular movies" />
        <MoviesFlatlist />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
