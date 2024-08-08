import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {
  DrawerActions,
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Category from './src/screen/Category';
import Wishlist from './src/screen/Wishlist';
import Cart from './src/screen/Cart';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Profile from './src/screen/Profile';
import Search from './src/screen/Search';
import ProfileBrforeLogin from './src/screen/ProfileBrforeLogin';
import SignIn from './src/screen/SignIn';
import SignUp from './src/screen/SignUp';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CategoryStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const WishlistStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

// Home Stack Navigator
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeMain" component={Home} />
      <HomeStack.Screen
        name="Search"
        component={Search}
      />
    </HomeStack.Navigator>
  );
}

// Category Stack Navigator
function CategoryStackNavigator() {
  return (
    <CategoryStack.Navigator screenOptions={{headerShown: false}}>
      <CategoryStack.Screen name="CategoryMain" component={Category} />
    </CategoryStack.Navigator>
  );
}
// Cart Stack Navigator
function CartStackNavigator() {
  return (
    <CartStack.Navigator screenOptions={{headerShown: false}}>
      <CartStack.Screen name="CartMain" component={Cart} />
    </CartStack.Navigator>
  );
}
// Wishlist Stack Navigator
function WishlistStackNavigator() {
  return (
    <WishlistStack.Navigator screenOptions={{headerShown: false}}>
      <WishlistStack.Screen name="WishlistMain" component={Wishlist} />
    </WishlistStack.Navigator>
  );
}
// Profile Stack Navigator
function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="ProfileMain" component={Profile} />
      <ProfileStack.Screen name="ProfileBrforeLogin" component={ProfileBrforeLogin} />
      <ProfileStack.Screen name="SignIn" component={SignIn} />
      <ProfileStack.Screen name="SignUp" component={SignUp} />
    </ProfileStack.Navigator>
  );
}

const SplashScreen = () => (
  <View style={styles.container}>
    <Image source={require('./src/assets/logo.png')} style={styles.image} />
  </View>
);
function App(): React.JSX.Element {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 1000); // Change the duration as needed
  }, []);

  const getTabBarStyle = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeMain';
    if (routeName === 'Search') {
      return {display: 'none'};
    }
    return {height: 55};
  };

  return splashVisible ? (
    <SplashScreen />
  ) : (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'Category') {
                iconName = 'menu';
              } else if (route.name === 'Cart') {
                iconName = 'cart-outline';
              } else if (route.name === 'Wishlist') {
                iconName = 'cards-heart-outline';
              } else if (route.name === 'Profile') {
                iconName = 'account-outline';
              }

              return (
                <Icon
                  name={iconName}
                  size={size}
                  color={color}
                  style={{marginTop: 5}}
                />
              );
            },
            headerShown: false,
            tabBarActiveTintColor: '#ff4c3b', // Set the active tab color
            tabBarInactiveTintColor: '#222222',
            tabBarLabelStyle: {fontSize: 14, marginBottom: 5},
            // tabBarStyle: {height: 55},
            tabBarStyle: getTabBarStyle(route),
          })}>
          <Tab.Screen name="Home" component={HomeStackNavigator} />
          <Tab.Screen name="Category" component={CategoryStackNavigator} />
          <Tab.Screen name="Cart" component={CartStackNavigator} />
          <Tab.Screen name="Wishlist" component={WishlistStackNavigator} />
          <Tab.Screen name="Profile" component={ProfileStackNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // backgroundColor: '#00B386',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    marginTop: 20,
    color: 'white',
  },
  btn: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
});
