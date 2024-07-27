import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StarRatingDisplay} from 'react-native-star-rating-widget';

const VerticalProduct = () => {
  return (
    <View style={styles.item}>
      <View>
        <Image
          source={require('../assets/logo.png')}
          width={50}
          height={50}
          style={styles.img}
        />
      </View>
      <Text style={styles.name}>Man Blue Denim Jacket</Text>

      <View style={styles.rating}>
        <Text style={styles.ratingcount}>3.0</Text>
        <StarRatingDisplay
          rating={3}
          starSize={20}
          color="#FFBA4C"
          starStyle={{padding: 0, margin: 0, width: 8}}
        />
        <Text style={styles.ratingcount1}>(20)</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.newPrice}>₹999.00</Text>
        <Text style={styles.originalPrice}>₹599.00</Text>
        <Text style={styles.percentage}>(15% off)</Text>
      </View>
    </View>
  );
};

export default VerticalProduct;

const styles = StyleSheet.create({
  img: {
    width: 170,
    height: 230,
    borderRadius : 5
  },
  name: {
    color: '#222222',
    fontSize: 15,
    fontWeight: '500',
    marginTop : 7
  },
  price: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  newPrice: {
    color: '#222222',
    fontSize: 13,
    fontWeight: '500',
  },
  originalPrice: {
    color: '#777777',
    textDecorationLine: 'line-through',
    marginLeft: 7,
    fontSize: 13,
  },
  percentage: {
    color: '#FF4C3B',
    marginLeft: 7,
    fontSize: 13,
    fontWeight: '500',
  },
  rating: {
    marginLeft : -15,
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ratingcount: {
    color: '#777777',
    fontWeight: '500',
  },
  ratingcount1: {
    color: '#777777',
    marginLeft: 10,
  },
  textOuter: {
    marginLeft: 10,
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: 30,
    width: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#ffffff',
    // padding: 20,
    marginVertical: 10,
    marginHorizontal: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 8,
    // elevation: 2,
  },
});
