import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HorizontalProduct = () => {
  return (
    <View style={styles.outer}>
      <View style={styles.left}>
        <View style={styles.imgOuter}>
          <Image
            source={require('../assets/logo.png')}
            width={50}
            height={50}
            style={styles.img}
          />
        </View>
        <View style={styles.textOuter}>
          <Text style={styles.name}>Man Blue Denim Jacket</Text>
          <View style={styles.rating}>
            <Text style={styles.ratingcount}>3.0</Text>
          <StarRatingDisplay
        rating={3}
        starSize={20}
        color="#FFBA4C"
        starStyle={{padding : 0, margin : 0, width : 8 }}
      />
      <Text style={styles.ratingcount1}>(20)</Text>
          </View>
          <View style={styles.price}>
                <Text style={styles.newPrice}>₹999.00</Text>
                <Text style={styles.originalPrice}>₹599.00</Text>
                <Text style={styles.percentage}>(15% off)</Text>
          </View>
        </View>
      </View>
      <View style={styles.right}>
      <View style={styles.icon}>
      <Icon name={"cards-heart-outline"} size={20} color={"#222222"} />
      </View>
      </View>
    </View>
  );
};

export default HorizontalProduct;

const styles = StyleSheet.create({
  outer: {
    backgroundColor: '#EDEFF4',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7,
    marginTop: 15,
  },
  left: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgOuter: {
    borderRadius: 4,
  },
  img: {
    width: 90,
    height: 90,
    objectFit: 'cover'
  },
  name: {
    color: '#222222',
    fontSize : 17,
    fontWeight : "500"
  },
  price :{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  newPrice:{
    color: '#222222',
    fontSize : 15,
    fontWeight : '500'
  },
  originalPrice:{
    color: '#777777',
    textDecorationLine : 'line-through',
    marginLeft : 10,
    fontSize : 15
  },
  percentage:{
    color : '#FF4C3B',
    marginLeft : 10,
    fontSize : 15,
    fontWeight : '500'
  },
  rating:{
    // marginLeft : -7,
    marginBottom : 5,
    display : 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ratingcount:{
    color: '#777777',
    fontWeight: '500',
  },
  ratingcount1:{
    color: '#777777',
    marginLeft : 10
  },
  textOuter:{
    marginLeft : 10
  },
  icon : {
    backgroundColor : "white",
    borderRadius : 50,
    height: 30,
    width: 30,
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
  },
  right : {
    marginTop : 9,
  }
});
