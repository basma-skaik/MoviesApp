import React from 'react';
import {useWindowDimensions, Image} from 'react-native';

const OnBoardingItem = ({imageUrl}) => {
  const {width} = useWindowDimensions();
  return <Image style={{width, height: 230}} source={imageUrl} />;
};

export default OnBoardingItem;
