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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import {data} from './Home';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import Review from '../components/Review';
import VerticalProduct from '../components/VerticalProduct';
import {FlatList} from 'react-native-gesture-handler';

const renderItemTabsKids = ({item}) => (
  <View style={{marginRight: 15}}>
    <VerticalProduct />
  </View>
);
const ProductDetails = () => {
  return (
      <SafeAreaView>
    <>
    <ScrollView style={styles.main}>
        <View style={styles.header}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon name={'arrow-left'} size={28} color={'#222222'} />
            <Text style={styles.title}>Product Name</Text>
          </View>
          <View style={styles.rightIcon}>
            <Icon name={'share-variant-outline'} size={24} color={'#222222'} />
            <Icon
              name={'cards-heart-outline'}
              size={24}
              color={'#222222'}
              style={styles.iconset}
            />
            <Icon name={'cart-outline'} size={24} color={'#222222'} />
          </View>
        </View>

        <View style={styles.slidermain}>
          <Swiper
            style={styles.wrapper}
            showsPagination={true}
            autoplay={true}
            loop={true}
            activeDotColor="#ff4c3b"
            renderPagination={(index, total, context) => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  {Array.from({length: total}).map((_, i) => (
                    <View
                      key={i}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        margin: 3,
                        backgroundColor: i === index ? '#ff4c3b' : '#EDEFF4',
                      }}
                    />
                  ))}
                </View>
              );
            }}>
            {data.map((item, index) => (
              <View key={index} style={styles.slide}>
                <Image source={item.img} style={styles.image} />
              </View>
            ))}
          </Swiper>
        </View>

        <View style={styles.namePart}>
          <Text style={styles.productName}>Man Blue Denim Jacket</Text>
          <Text style={styles.productDesc}>
            Black, off-white and peach-coloured printed flared skirt, has zip
            closure, attached lining
          </Text>
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

        <View style={styles.sizeColor}>
          <View style={styles.dealesHeader}>
            <Text style={styles.dealesLeft}>Select Size: </Text>
            <Text style={styles.dealesRight}>Size Chart</Text>
          </View>
          <View style={styles.sizeList}>
            {['S', 'M', 'L', 'XL']?.map(v => (
              <>
                <View style={styles.sizeBox}>
                  <Text style={styles.sizeText}>{v}</Text>
                </View>
              </>
            ))}
          </View>

          <Text style={styles.dealesLeft}>Select Color: </Text>
          <View style={styles.colorList}>
            {[
              '#E6E6FA',
              '#B0C4DE',
              '#EBACA2',
              'skyblue',
              'orange',
              'black',
            ]?.map(v => (
              <>
                <View style={styles.colorBox} backgroundColor={v}></View>
              </>
            ))}
          </View>
        </View>

        <View style={styles.offers}>
          <Text style={styles.offersLabel}>Offers for You </Text>
          <Text style={styles.offersShoryDesc}>
            Use code PROJECT10 to get flat 10%
          </Text>
          <Text style={styles.offersShoryDesc2}>
            Use code PROJECT10 to get flat 10% off on minimum order of ₹200.00.
            Offer valid for first time users only
          </Text>
          <View style={styles.coupon}>
            <View style={styles.couponBox}>
              <Text style={styles.couponText}>PROJECT10</Text>
            </View>
            <Text style={styles.copy}>Tap to copy</Text>
          </View>
        </View>

        <View style={styles.return}>
          <Text style={styles.offersLabel}>Return & Exchange Policy</Text>
          <Text style={styles.returnDesc}>
            This product is eligible for returns and size replacements. Please
            initiate returns/replacements from the 'My Orders' section in the
            App within 7 days of delivery. Please ensure the product is in its
            original condition with all tags attached.
          </Text>
        </View>

        <View style={styles.return}>
          <Text style={styles.offersLabel}>Product Details</Text>
          <Text style={styles.returnDesc1}>
            Black, off-white and peach-coloured printed flared skirt, has zip
            closure, attached lining
          </Text>
          <Text style={styles.offersLabel}>Model Size & Fit </Text>
          <Text style={styles.returnDesc1}>
            The model (height 5'8") is wearing a size 28{' '}
          </Text>
          <Text style={styles.offersLabel}>Material & Care </Text>
          <Text style={styles.returnDesc1}>100% polyester, Machine-wash </Text>
          <Text style={styles.offersLabel}>Product Code</Text>
          <Text style={styles.returnDesc1}>460356366_shirt</Text>
        </View>

        <View style={styles.return}>
          <View style={styles.dealesHeader} marginBottom={-1}>
            <Text style={styles.dealesLeft}>Customer Reviews (24) </Text>
            <Text style={styles.dealesRight}>All Reviews</Text>
          </View>

          <Review />
          <Review />
        </View>

        <View style={styles.return}>
          <Text style={styles.offersLabel}>Check Delivery</Text>
          <Text style={styles.returnDesc1}>
            Enter Pincode to check delivery date / pickup option{' '}
          </Text>

          <View style={styles.container}>
            <TextInput
              style={styles.input}
              // value={value}
              // onChangeText={setValue}
              placeholder="Pin code"
              placeholderTextColor={'#777777'}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.suffix}>
              <Text style={styles.check}>Check</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.list}>
            <Icon name={'truck-fast-outline'} size={22} color={'#999999'} />
            <Text style={styles.returnDesc1} marginTop={0} marginLeft={10}>
              Free Delivery on order above ₹200.00
            </Text>
          </View>
          <View style={styles.list}>
            <Icon name={'hand-coin-outline'} size={22} color={'#999999'} />
            <Text style={styles.returnDesc1} marginTop={0} marginLeft={10}>
              Cash On delivery Available
            </Text>
          </View>
          <View style={styles.list}>
            <Icon name={'swap-horizontal'} size={22} color={'#999999'} />
            <Text style={styles.returnDesc1} marginTop={0} marginLeft={10}>
              Easy 21 days returns and exchanges
            </Text>
          </View>
        </View>

        <View style={styles.return} marginBottom={66}>
          <Text style={styles.offersLabel} marginBottom={-7}>
            Similar Products
          </Text>
          <FlatList
            data={data}
            renderItem={renderItemTabsKids}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          />
        </View>
    </ScrollView>
    <View style={styles.fixedBtns}>
    <View flex={1} textAlign="center" display="flex" justifyContent="center" alignItems="center" flexDirection="row">
    <Icon
              name={'cards-heart-outline'}
              size={24}
              color={'#222222'}
            //   style={styles.iconset}
            /><Text style={styles.fixedText1}>WISHLIST</Text></View>
             <View flex={1} textAlign="center" display="flex" justifyContent="center" alignItems="center" flexDirection="row" >
             <Icon name={'cart-outline'} size={24} color={'#FF4C3B'} />
             <Text style={styles.fixedText}>ADD TO BAG</Text></View>
        </View>
    </>
      </SafeAreaView>
  );
};

export default ProductDetails;

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
    marginHorizontal: 12,
  },
  slide: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 500,
    borderRadius: 7,
    // resizeMode: 'cover',
  },
  slidermain: {
    height: 530,
    backgroundColor: '#FFFFFF',
    marginTop: -10,
  },
  namePart: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    // marginBottom : 200
  },
  rating: {
    // marginLeft : -15,
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
  price: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  newPrice: {
    color: '#222222',
    fontSize: 16,
    fontWeight: '600',
  },
  originalPrice: {
    color: '#777777',
    textDecorationLine: 'line-through',
    marginLeft: 7,
    fontSize: 14,
  },
  percentage: {
    color: '#FF4C3B',
    marginLeft: 7,
    fontSize: 14,
    fontWeight: '500',
  },
  productName: {
    color: '#222222',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 2,
  },
  productDesc: {
    color: '#777777',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 3,
  },
  sizeColor: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    marginTop: 15,
  },

  dealesHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dealesLeft: {
    color: '#222222',
    fontWeight: '600',
    fontSize: 16,
  },
  dealesRight: {
    color: '#FF4C3B',
    fontWeight: '400',
    fontSize: 14,
  },
  styleLeft: {
    color: '#222222',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 20,
  },
  sizeText: {
    color: '#222222',
    fontSize: 16,
  },
  sizeBox: {
    backgroundColor: '#EDEFF4',
    borderRadius: 5,
    marginRight: 10,
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sizeList: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  colorList: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  colorBox: {
    borderRadius: 50,
    marginRight: 10,
    height: 40,
    width: 40,
  },
  offers: {
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    marginTop: 15,
  },
  offersLabel: {
    color: '#222222',
    fontWeight: '600',
    fontSize: 16,
    paddingVertical: 10,
  },
  offersShoryDesc: {
    color: '#222222',
    fontWeight: '500',
    fontSize: 14,
  },
  offersShoryDesc2: {
    color: '#777777',
    fontWeight: '500',
    fontSize: 12,
    marginTop: 1,
  },
  coupon: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 15,
  },
  couponBox: {
    // border: '1px dashed #ff4c3b',
    borderRadius: 5,
    paddingHorizontal: 22,
    paddingVertical: 8,
    backgroundColor: '#FF4C3B0D',
    borderWidth: 1,
    borderColor: '#ff4c3b',
    borderStyle: 'dashed',
  },
  couponText: {
    color: '#222222',
    fontSize: 14,
    fontWeight: '600',
  },
  copy: {
    color: '#777777',
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 10,
  },
  return: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginTop: 15,
  },
  returnDesc: {
    color: '#777777',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 15,
  },
  returnDesc1: {
    color: '#777777',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 7,
    marginTop: -10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EDEFF4',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#EDEFF4',
    marginTop: 5,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 38,
    fontSize: 16,
    color: '#222222',
  },
  suffix: {
    paddingHorizontal: 5,
  },
  check: {
    color: '#FF4C3B',
    fontSize: 14,
  },
  list: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 7,
  },
  fixedBtns :{
    padding: 17,
    // paddingBottom : 30,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 }, // iOS shadow
    shadowOpacity: 0.1, // iOS shadow
    shadowRadius: 4, // iOS shadow
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  fixedText : {
    textAlign: 'center',
    color : '#FF4C3B',
    fontSize : 16,
    fontWeight : '500',
    marginLeft:5
  },
  fixedText1 : {
    textAlign: 'center',
    color : '#222222',
    fontSize : 16,
    fontWeight : '500',
    marginLeft:5

  }
});
