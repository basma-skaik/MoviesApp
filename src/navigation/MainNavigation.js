import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Favorite} from '../screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

export function MainNavigation() {
  const {goBack, canGoBack} = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 80,
          borderColor: 'gray',
          borderTopEndRadius: 40,
          borderTopStartRadius: 40,
          borderWidth: 1,
        },
        tabBarItemStyle: {
          margin: 13,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="home"
              size={36}
              color={focused ? '#6C63FF' : 'black'}
              style={{paddingVertical: 0}}
            />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="hearto"
              size={36}
              color={focused ? '#6C63FF' : 'black'}
              style={{paddingVertical: 0}}
            />
          ),
          tabBarLabel: '',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerLeft: () =>
            canGoBack() && (
              <Pressable onPress={goBack}>
                <Ionicons name="arrow-back" size={50} color="black" />
              </Pressable>
            ),
        }}
        name="Favorite"
        component={Favorite}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
