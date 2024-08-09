import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
      <ScrollView style={styles.main}  >
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
           <Text style={styles.rightText} onPress={() => navigation.navigate('HomeMain')}>SKIP</Text>
          </View>
        </View>
     <View style={styles.mainContant}>
<Text style={styles.hey}>Hey,</Text>
<Text style={styles.now}>Sign Up</Text>


<View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        placeholderTextColor="#999"
      />
    </View>
<View style={styles.container}>
      <Text style={styles.label}>Email Id</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#999"
      />
    </View>
<View style={styles.container}>
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        placeholderTextColor="#999"
      />
    </View>
<View style={styles.container}>
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#999"
        secureTextEntry
      />
    </View>
    {/* <Text style={styles.forgot}>Forgot Password ?</Text> */}

    <TouchableOpacity style={styles.signup} >
            <Text style={styles.signupText} onPress={() => navigation.navigate('HomeMain')}>SIGN UP</Text>
          </TouchableOpacity>

<View style={styles.or}>
    <View style={styles.orBorder}><Text color={'#222'}>j</Text></View>
    <View ><Text style={styles.orText}>Or sign in with</Text></View>
    <View style={styles.orBorder}></View>
</View>

<View style={styles.iconsGroup} marginTop={15}>
            <View style={styles.outIcon}>
                <Image source={{uri : 'https://themes.pixelstrap.com/multikart-app/assets/images/social/google.png'}} height={30} width={30}/>
            </View>
            <View style={styles.outIcon} marginHorizontal={15}>
            <Image source={{uri : 'https://themes.pixelstrap.com/multikart-app/assets/images/social/google.png'}} height={30} width={30}/>

            </View>
            <View style={styles.outIcon}>
            <Image source={{uri : 'https://themes.pixelstrap.com/multikart-app/assets/images/social/google.png'}} height={30} width={30}/>

            </View>
</View>

<View style={styles.iconsGroup} marginBottom={30}>
    <Text style={styles.bottomText}>Already have an account?</Text>
    <Text style={styles.bottomText2} onPress={() => navigation.navigate('SignIn')}>Sign In</Text>
</View>
        </View>
        </ScrollView>
        </SafeAreaView>
  )
}

export default SignUp

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
        padding: 13,
      },
      title: {
        fontSize: 25,
        fontWeight: '600',
        color: '#222222',
        // marginLeft: 10,
      },
      rightSide:{
        backgroundColor : '#EDEFF4',
        borderRadius : 5
      },
      rightText:{
        color: '#222222',
        fontSize : 15,
        paddingVertical : 5,
        paddingHorizontal : 15
      },
      mainContant  : {
        backgroundColor : '#fff',
        paddingHorizontal : 15
      },
      hey : {
        fontSize: 26,
        fontWeight: '500',
        color: '#222222',
        paddingTop : 60,
        marginBottom : 5
      },
      now:{
        fontSize: 26,
        fontWeight: '500',
        color: '#222222',
        marginBottom : 15

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
        color  :'#222222',
        fontSize : 17
        // backgroundColor: '#f9f9f9',
      },
      forgot : {
        color : '#ff4c3b',
        fontSize : 14,
        textAlign : 'right'
      },
      signup: {
        borderRadius: 4,
        backgroundColor: '#FF4C3B',
        textAlign: 'center',
        marginBottom : 15,
        marginTop : 15
      },
      signupText: {
        color: '#fff',
        fontSize: 16,
        paddingVertical: 12,
        textAlign: 'center',
      },
      orText:{
        fontSize : 13,
        color: '#777777',
        paddingHorizontal : 5
      },
      or :{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical : 10
      },
      orBorder :{
        height: 1,
        backgroundColor : '#ddd',
        flex : 1,
        // border : '1px solid #ddd '
      },
      iconsGroup:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical : 10
      },
      outIcon : {
        height: 50,
        width: 50,
        borderRadius : 4,
        backgroundColor : '#EDEFF4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      bottomText : {
        color : '#777777',
        fontSize : 16
      },
      bottomText2 : {
        color : '#ff4c3b',
        fontSize : 16,
        marginLeft : 3
      },
})