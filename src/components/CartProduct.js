import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CartProduct = ({openModal}) => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.outer}>
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
              starStyle={{padding: 0, margin: 0, width: 8}}
            />
            <Text style={styles.ratingcount1}>(20)</Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.newPrice}>₹999.00</Text>
            <Text style={styles.originalPrice}>₹599.00</Text>
            <Text style={styles.percentage}>(15% off)</Text>
          </View>

          <View style={styles.variants}>
            <TouchableOpacity style={styles.box}  onPress={() => openModal('qty')}>
              
                <Text style={styles.boxText}>Qty: 1</Text>
              <Icon
                name={'chevron-down'}
                size={20}
                color={'#222222'}
                style={{paddingRight: 13, marginLeft: -13}}
                />
              
            </TouchableOpacity>
            <TouchableOpacity style={[styles.box, {marginLeft: 15}]}  onPress={() => openModal('size')}>
              <Text style={styles.boxText}>Size: L</Text>
              <Icon
                name={'chevron-down'}
                size={20}
                color={'#222222'}
                style={{paddingRight: 13, marginLeft: -13}}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.divider}></View>
          <View style={styles.bottom}>
            <View style={styles.bottom}>
              <Icon name={'cards-heart-outline'} size={18} color={'#222222'} />
              <Text style={styles.bottomTitle}>Move to Wishlist</Text>
            </View>
            <View style={styles.bottom}>
              <Icon name={'delete-outline'} size={18} color={'#222222'} />
              <Text style={styles.bottomTitle}>Remove</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#EDEFF4',
          height: 10,
          marginTop: 10,
          marginHorizontal: -15,
        }}
      />

      
    </SafeAreaView>
  );
};

export default CartProduct;

const styles = StyleSheet.create({
  outer: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 7,
    marginTop: 15,
  },
  imgOuter: {
    borderRadius: 7,
  },
  img: {
    borderRadius: 7,
    width: 115,
    height: 150,
    objectFit: 'cover',
  },
  name: {
    color: '#222222',
    fontSize: 17,
    fontWeight: '500',
  },
  price: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  newPrice: {
    color: '#222222',
    fontSize: 15,
    fontWeight: '500',
  },
  originalPrice: {
    color: '#777777',
    textDecorationLine: 'line-through',
    marginLeft: 10,
    fontSize: 15,
  },
  percentage: {
    color: '#FF4C3B',
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '500',
  },
  rating: {
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
    marginLeft: 20,
    width: '60%',
  },
  divider: {
    height: 2,
    backgroundColor: '#EDEFF4',
    marginVertical: 12,
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5,
  },
  bottomTitle: {
    color: '#222222',
    marginLeft: 3,
    fontWeight: '600',
  },
  variants: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 5,
  },
  box: {
    backgroundColor: '#EDEFF4',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxText: {
    color: '#222222',
    fontWeight: '600',
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontSize: 15,
  },
 
});
