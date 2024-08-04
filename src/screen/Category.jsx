import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Category = () => {
  return (
    <ScrollView style={styles.main}>
    <SafeAreaView>
      <View style={styles.header}>
        <View style={{display : "flex", alignItems : "center", flexDirection : "row"}}>
        <Icon name={'arrow-left'} size={28} color={'#222222'} />
          <Text style={styles.title}>Categories</Text>
        </View>
        <View style={styles.rightIcon}>
          <Icon name={'bell-outline'} size={24} color={'#222222'} />
          <Icon
            name={'cards-heart-outline'}
            size={24}
            color={'#222222'}
            style={styles.iconset}
          />
          <Icon name={'cart-outline'} size={24} color={'#222222'} />
        </View>
      </View>

      <View style={styles.category}>
            <Image source={require('../assets/women.jpg')} width={100} height={100} style={styles.images}/>
            <Image source={require('../assets/man.jpg')} width={100} height={100} style={styles.images}/>
            <Image source={require('../assets/kids.jpg')} width={100} height={100} style={styles.images}/>
            <Image source={require('../assets/beauty.jpg')} width={100} height={100} style={styles.images}/>
            <Image source={require('../assets/footware.jpg')} width={100} height={100} style={styles.images}/>
            <Image source={require('../assets/jewelery.jpg')} width={100} height={100} style={styles.images}/>
      </View>
      </SafeAreaView>
      </ScrollView>
  )
}

export default Category

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
        marginLeft : 10
      },
      rightIcon: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
      },
      iconset: {
        marginHorizontal: 12,
      },
      category:{
        backgroundColor : "white",
        paddingHorizontal : 15
      },
      images : {
        objectFit : 'fill',
        height : 150,
        width : '100vw',
        marginBottom : 25
        // borderColor : 'red',
        // borderWidth : 5
      }
})