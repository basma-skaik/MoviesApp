import {
  StyleSheet,
  useWindowDimensions,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import OnBoardingItem from './OnBoardingItem';
import Dots from './Dots';
import {useState} from 'react';

const onBoardingList = [
  {
    id: 1,
    imageUrl: require('../../../assets/imgs/batman.jpg'),
  },
  {
    id: 2,
    imageUrl: require('../../../assets/imgs/cooker-mouse.jpg'),
  },
  {
    id: 3,
    imageUrl: require('../../../assets/imgs/joker.jpg'),
  },
  {
    id: 4,
    imageUrl: require('../../../assets/imgs/simba.jpg'),
  },
  {
    id: 5,
    imageUrl: require('../../../assets/imgs/spiderman.jpg'),
  },
  {
    id: 6,
    imageUrl: require('../../../assets/imgs/tubac.jpg'),
  },
];

const OnBoardingImages = () => {
  const {width} = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnScroll = event => {
    const leftSpace = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(leftSpace / width);
    setActiveIndex(currentIndex);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={onBoardingList}
        keyExtractor={item => item.id}
        pagingEnabled
        disableIntervalMomentum
        onScroll={handleOnScroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imgContentContainerStyle}
        renderItem={({item}) => <OnBoardingItem imageUrl={item.imageUrl} />}
      />
      <FlatList
        data={onBoardingList}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        style={styles.dotsContentContainerStyle}
        contentContainerStyle={{justifyContent: 'center', width: '100%'}}
        renderItem={({index}) => (
          <Dots index={index} activeIndex={activeIndex} />
        )}
      />
    </SafeAreaView>
  );
};

export default OnBoardingImages;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  imgContentContainerStyle: {
    backgroundColor: 'red',
    height: '100%',
    zIndex: -1,
  },
  dotsContentContainerStyle: {
    marginTop: -20,
  },
});
