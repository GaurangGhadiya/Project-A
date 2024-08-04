import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HorizontalProduct from '../components/HorizontalProduct';
import WishlistProduct from '../components/WishlistProduct';

const Wishlist = () => {
  return (
    <ScrollView style={styles.main}>
    <SafeAreaView>
      <View style={styles.header}>
        <View style={{display : "flex", alignItems : "center", flexDirection : "row"}}>
        <Icon name={'arrow-left'} size={28} color={'#222222'} />
          <Text style={styles.title}>Wishlist (3)</Text>
        </View>
        <View style={styles.rightIcon}>
          <Icon name={'bell-outline'} size={24} color={'#222222'} />
          {/* <Icon
            name={'cards-heart-outline'}
            size={24}
            color={'#222222'}
            style={styles.iconset}
          /> */}
          <Icon name={'cart-outline'} size={24} color={'#222222'} style={styles.iconset}/>
        </View>
      </View>

      <View style={styles.wishlist}>
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
      </View>

   
      </SafeAreaView>
      </ScrollView>
  )
}

export default Wishlist

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
        marginLeft: 12,
      },
      wishlist : {
        backgroundColor : 'white',
        paddingHorizontal: 15
      }
      
})