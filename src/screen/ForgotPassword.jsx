import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();

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
            {/* <Icon name={'arrow-left'} size={28} color={'#222222'} /> */}
            <Text style={styles.title}>Project A</Text>
          </View>
          <View style={styles.rightSide}>
            <Text
              style={styles.rightText}
              onPress={() => navigation.navigate('HomeMain')}>
              SKIP
            </Text>
          </View>
        </View>
        <View style={styles.mainContant}>
          {/* <Text style={styles.hey}>Hey,</Text> */}
          <Text style={styles.hey}>Forgot Password</Text>

          <View style={styles.container}>
            <Text style={styles.label}>Email Id</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email id"
              placeholderTextColor="#999"
            />
          </View>

          {/* <Text style={styles.forgot} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password ?</Text> */}

          <TouchableOpacity
            style={styles.signup}
            onPress={() => navigation.navigate('OtpVerification')}
          >
            <Text style={styles.signupText}>SEND OTP</Text>
          </TouchableOpacity>

          

          <View style={styles.iconsGroup} marginBottom={140}>
            <Text style={styles.bottomText}>Back to</Text>
            <Text
              style={styles.bottomText2}
              onPress={() => navigation.navigate('SignIn')}>
              Sign In
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  header: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 13,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: '#222222',
    // marginLeft: 10,
  },
  rightSide: {
    backgroundColor: '#EDEFF4',
    borderRadius: 5,
  },
  rightText: {
    color: '#222222',
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  mainContant: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  hey: {
    fontSize: 26,
    fontWeight: '500',
    color: '#222222',
    paddingTop: 90,
    marginBottom: 20,
  },
  now: {
    fontSize: 26,
    fontWeight: '500',
    color: '#222222',
    marginBottom: 15,
  },
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 3,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#222222',
    fontSize: 17,
    // backgroundColor: '#f9f9f9',
  },
  forgot: {
    color: '#ff4c3b',
    fontSize: 14,
    textAlign: 'right',
  },
  signup: {
    borderRadius: 4,
    backgroundColor: '#FF4C3B',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 5,
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 12,
    textAlign: 'center',
  },
  orText: {
    fontSize: 13,
    color: '#777777',
    paddingHorizontal: 5,
  },
  or: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  orBorder: {
    height: 1,
    backgroundColor: '#ddd',
    flex: 1,
    // border : '1px solid #ddd '
  },
  iconsGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  outIcon: {
    height: 50,
    width: 50,
    borderRadius: 4,
    backgroundColor: '#EDEFF4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomText: {
    color: '#777777',
    fontSize: 16,
  },
  bottomText2: {
    color: '#ff4c3b',
    fontSize: 16,
    marginLeft: 3,
  },
});
