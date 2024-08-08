import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const ProfileBrforeLogin = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
      <ScrollView style={styles.main}>
        <View style={styles.header}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon name={'arrow-left'} size={28} color={'#222222'} />
            <Text style={styles.title}>Project A</Text>
          </View>
          <View style={styles.rightIcon} onPress={() => navigation.navigate('Search')}>
            <Icon name={'bell-outline'} size={24} color={'#222222'} />
            {/* <Icon
          name={'cards-heart-outline'}
          size={24}
          color={'#222222'}
          style={styles.iconset}
        /> */}
            <Icon
              name={'magnify'}
              size={26}
              color={'#222222'}
              style={styles.iconset}
            />
          </View>
        </View>

        <View style={styles.welcome}>
          <View style={styles.top}>
            <Text style={styles.topText}>Hello</Text>
            <View style={styles.rightTop}>
              <Icon
                name={'google-translate'}
                size={20}
                color={'#222222'}
                marginRight={7}
              />

              <Text style={styles.topText}>EN</Text>
            </View>
          </View>

          <Text style={styles.welcomeText}>Welcome To Project A</Text>
          <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signin} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signinText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.option} marginTop={30}>
          <Icon
                name={'cash-refund'}
                size={50}
                color={'#555555'}
                marginRight={20}
                marginLeft={10}
              />
              <View>

            <Text style={styles.optionText}>Upto ₹100 cashback on your first </Text>
            <Text style={styles.optionText}>order</Text>
              </View>

          </View>
          <View style={styles.option}>
          <Icon
                name={'truck-fast-outline'}
                size={50}
                color={'#555555'}
                marginRight={20}
                marginLeft={10}
              />
              <View>

            <Text style={styles.optionText}>Free Deliveryon first order - for </Text>
            <Text style={styles.optionText}>top categpries</Text>
              </View>

          </View>
          <View style={styles.option}>
          <Icon
                name={'swap-horizontal'}
                size={50}
                color={'#555555'}
                marginRight={20}
                marginLeft={10}
              />
              <View>

            <Text style={styles.optionText}>Easy Returns </Text>
              </View>

          </View>
          <View style={styles.option} marginBottom={45}>
          <Icon
                name={'hand-coin-outline'}
                size={50}
                color={'#444444'}
                marginRight={20}
                marginLeft={10}
              />
              <View>

            <Text style={styles.optionText}>Pay on Delivery </Text>
              </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileBrforeLogin;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EDEFF4',
  },
  header: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#222222',
    marginLeft: 10,
  },
  rightIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconset: {
    marginLeft: 12,
  },
  welcome: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 15,
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    paddingTop: 15,
  },
  topText: {
    color: '#222222',
    fontSize: 17,
    fontWeight: '400',
  },
  rightTop: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'center',
    flexDirection: 'row',
  },
  welcomeText: {
    color: '#222222',
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 45,
  },
  signup: {
    borderRadius: 4,
    backgroundColor: '#FF4C3B',
    textAlign: 'center',
    marginBottom : 15
  },
  signupText: {
    color: '#fff',
    fontSize: 17,
    paddingVertical: 13,
    textAlign: 'center',
  },
  signin: {
    borderRadius: 4,
    backgroundColor: 'lightgray',
    textAlign: 'center',
    marginBottom : 20

  },
  signinText: {
    color: '#222222',
    fontSize: 17,
    paddingVertical: 13,
    textAlign: 'center',
  },
  option : {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop : 15,
    marginBottom : 25
    
  },
  optionText:{
    color: '#222222',
    fontSize: 18,
    flexWrap: 'wrap',
  }
});
