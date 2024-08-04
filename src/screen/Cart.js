import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HorizontalProduct from '../components/HorizontalProduct';
import CartProduct from '../components/CartProduct';
import {Modalize} from 'react-native-modalize';
import VerticalProduct from '../components/VerticalProduct';

const images = {
  women: require('../assets/logo.png'),
  man: require('../assets/logo.png'),
  kids: require('../assets/logo.png'),
  beauty: require('../assets/logo.png'),
  footwear: require('../assets/logo.png'),
  kitchen: require('../assets/logo.png'),
  electronics: require('../assets/logo.png'),
};

const data = [
  {
    id: '1',
    title: 'Women',
    img: images.women,
    imgBrands:
      'https://themes.pixelstrap.com/multikart-app/assets/images/brand-logos/5.png',
    text: 'UNDER ₹999.00',
  },
  {
    id: '2',
    title: 'Man',
    img: images.man,
    imgBrands:
      'https://themes.pixelstrap.com/multikart-app/assets/images/brand-logos/1.png',
    text: 'FLAT ₹99 OFF',
  },
  {
    id: '3',
    title: 'Kids',
    img: images.kids,
    imgBrands:
      'https://themes.pixelstrap.com/multikart-app/assets/images/brand-logos/2.png',
    text: 'BUY 1 GET 1',
  },
  {
    id: '4',
    title: 'Beauty',
    img: images.beauty,
    imgBrands:
      'https://themes.pixelstrap.com/multikart-app/assets/images/brand-logos/3.png',
    text: 'UPTO 50% OFF',
  },
  {
    id: '5',
    title: 'Footwear',
    img: images.footwear,
    imgBrands:
      'https://themes.pixelstrap.com/multikart-app/assets/images/brand-logos/4.png',
  },
  {
    id: '6',
    title: 'Kitchen',
    img: images.kitchen,
    imgBrands:
      'https://themes.pixelstrap.com/multikart-app/assets/images/brand-logos/6.png',
  },
  {
    id: '7',
    title: 'Electronics',
    img: images.electronics,
    imgBrands:
      'https://themes.pixelstrap.com/multikart-app/assets/images/brand-logos/3.png',
  },
];

const Cart = () => {
  const [drawerType, setDrawerType] = useState(null);

  const modalizeRef = useRef(null);
  const bottomRef = useRef(null);


  const openModal = type => {
    modalizeRef.current?.open();
    setDrawerType(type);
  };
  const closeModal = () => {
    modalizeRef.current?.close();
    setDrawerType(null);
  };

  const renderItemQty = ({item}) => (
    <View style={styles.qtyItem}>
      <Text style={{color: '#222222', fontWeight: '600'}}>{item}</Text>
    </View>
  );

  const renderItemTabsKids = ({item}) => (
    <View style={{marginRight: 15}}>
      <VerticalProduct />
    </View>
  );

  const handleScrollToBottom = () => {
    bottomRef.current.scrollTo({
      y: 2000, // Adjust this value as needed
      animated: true,
    });
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.main}  ref={bottomRef}>
        <View style={styles.header}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon name={'arrow-left'} size={28} color={'#222222'} />
            <Text style={styles.title}>Shopping Cart</Text>
          </View>
          <View style={styles.rightIcon}>
            <Icon name={'bell-outline'} size={24} color={'#222222'} />
            {/* <Icon
            name={'cards-heart-outline'}
            size={24}
            color={'#222222'}
            style={styles.iconset}
          /> */}
            <Icon
              name={'cards-heart-outline'}
              size={24}
              color={'#222222'}
              style={styles.iconset}
            />
          </View>
        </View>

        <View style={styles.wishlist}>
          <CartProduct openModal={openModal} />
          <CartProduct openModal={openModal} />
          <CartProduct openModal={openModal} />
          <CartProduct openModal={openModal} />
          <CartProduct openModal={openModal} />
          <CartProduct openModal={openModal} />
          <CartProduct openModal={openModal} />
        </View>

        <View style={styles.mainContantLike}>
          <View style={{paddingHorizontal: 15}}>
            <Text style={styles.styleLeft}>You May also Like</Text>

            <View style={styles.kidsFlat}>
              <FlatList
                data={data}
                renderItem={renderItemTabsKids}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled
              />
            </View>
          </View>
        </View>
        <View style={styles.mainContantLike}>
          <View style={{paddingHorizontal: 15}}>
            <Text style={styles.styleLeft}>Coupons</Text>
            <View style={styles.coupanFiels}>
              <View style={styles.coupanFielsLeft}>
                <Icon
                  name={'ticket-percent-outline'}
                  size={28}
                  color={'#222222'}
                  onPress={closeModal}
                />
                <TextInput
                  style={styles.inputbox}
                  placeholder="Apply Coupons"
                  placeholderTextColor="#777777"
                  selectionColor="#ff4c3b"
                />
              </View>
              <Icon name={'chevron-right'} size={28} color={'#222222'} />
            </View>
          </View>
        </View>
        <View style={styles.mainContantLike}>
          <View style={{paddingHorizontal: 15}}>
            <Text style={styles.styleLeft}>Order Details</Text>
            <View style={[styles.orderDetails, {marginTop: 20}]}>
              <Text style={styles.detailsLabel}>Price</Text>
              <Text style={styles.detailsPrice}>₹320.00</Text>
            </View>
            <View style={styles.orderDetails}>
              <Text style={styles.detailsLabel}>Discount</Text>
              <Text style={[styles.detailsPrice, {color: '#198754'}]}>
                -₹20.00
              </Text>
            </View>
            <View style={styles.orderDetails}>
              <Text style={styles.detailsLabel}>Coupon Discount</Text>
              <Text style={[styles.detailsPrice, {color: '#FF4C5B'}]}>
                Apply Coupon
              </Text>
            </View>
            <View style={styles.orderDetails}>
              <Text style={styles.detailsLabel}>Delivery Charges</Text>
              <Text style={styles.detailsPrice}>₹50.00</Text>
            </View>

            <View style={styles.devider}></View>
            <View style={styles.amountOut}>
              <Text style={styles.styleLeftLow}>Total Amount</Text>
              <Text style={styles.styleLeftLow}>₹280.00</Text>
            </View>
          </View>
        </View>
        <View style={[styles.mainContantLike, {marginBottom : 93}]}>
          <View style={{paddingHorizontal: 15}}>
            <View style={styles.return}>
              <View style={{textAlign : "center"}}>
                <View style={styles.iconOuter}>
                <Icon name={'rotate-3d-variant'} size={26} color={'#222222'} />
                </View>
                <Text style={styles.iconText}>7 Day Return</Text>
              </View>
              <View style={{textAlign : "center"}}>
                <View style={styles.iconOuter}>
                <Icon name={'phone-check-outline'} size={26} color={'#222222'} />
                </View>
                <Text style={styles.iconText}>24/7 Support</Text>
              </View>
              <View style={{textAlign : "center"}}>
                <View style={styles.iconOuter}>
                <Icon name={'credit-card-check-outline'} size={26} color={'#222222'} />
                </View>
                <Text style={styles.iconText}>Secure Payment</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
        <View style={styles.bottomPrice}>
              <View >
                <Text style={styles.bottomPriceValue}>₹280.00</Text>
                <TouchableOpacity onPress={handleScrollToBottom}><Text  style={styles.bottomPriceDetails}>View Details</Text></TouchableOpacity>
              </View>
              <View style={styles.bottomPriceRight}>
                <Text style={styles.bottomPriceRightText}>PLACE ORDER</Text>
              </View>
        </View>

      <Modalize ref={modalizeRef} adjustToContentHeight withHandle={false}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.headerText}>
              Select {drawerType == 'qty' ? 'Quantity' : 'Size'}
            </Text>
            <Icon
              name={'close'}
              size={28}
              color={'#222222'}
              onPress={closeModal}
            />
          </View>
          <View style={styles.mainContantModal}>
            {drawerType == 'size' ? (
              <FlatList
                data={['S', 'M', 'L', 'XL', 'XXL']}
                renderItem={renderItemQty}
                keyExtractor={item => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled
              />
            ) : (
              <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderItem={renderItemQty}
                keyExtractor={item => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled
              />
            )}
          </View>
        </View>
        <TouchableOpacity onPress={closeModal} style={styles.modalFooter}>
          <Text style={styles.footerText}>Done</Text>
        </TouchableOpacity>
      </Modalize>
    </SafeAreaView>
  );
};

export default Cart;

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
  wishlist: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  modalContent: {
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red',
  },
  modalItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFF4',
  },
  modalItemText: {
    fontSize: 18,
    color: '#222222',
  },
  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#222222',
    fontWeight: 'bold',
    fontSize: 18,
  },
  mainContantModal: {
    marginTop: 15,
  },
  modalFooter: {
    backgroundColor: '#FF4C3B',
    paddingVertical: 10,
  },
  footerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  qtyItem: {
    marginRight: 15,
    borderRadius: 50,
    borderColor: '#222222',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 45,
    width: 45,
  },
  mainContantLike: {
    marginTop: 10,
    backgroundColor: 'white',
    // paddingHorizontal:10,
  },
  styleLeft: {
    color: '#222222',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 20,
  },
  styleLeftLow: {
    color: '#222222',
    fontWeight: '600',
    fontSize: 17,
    // marginTop: 20,
  },
  styleDesc: {
    color: '#777777',
    fontWeight: '400',
    fontSize: 17,
  },
  kidsFlat: {
    marginVertical: 15,
  },
  coupanFiels: {
    backgroundColor: '#F7F8FA',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 25,
    marginTop: 15,
  },
  inputbox: {
    // borderColor :"red",
    // borderWidth: 1,
    // width: '93%',
    // paddingHorizontal : 3
    color: 'black',
    paddingLeft: 10,
    fontSize: 16,
  },
  coupanFielsLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  orderDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 3,
  },
  detailsLabel: {
    color: '#777777',
    fontSize: 15,
  },
  detailsPrice: {
    color: '#222222',
    fontSize: 15,
  },
  devider: {
    height: 2,
    backgroundColor: '#EDEFF4',
    marginVertical: 15,
  },
  amountOut: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom : 20
  },
  return : {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical : 30
  },
  iconOuter : {
    backgroundColor: '#EDEFF473',
    textAlign: 'center',
    height: 45,
    width: 45,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop : 10,
    borderRadius : 50,
    marginLeft : 15,
    marginBottom : 5
  },
  iconText : {
    color: '#222222',
    fontSize : 13
  },
  bottomPrice : {
     flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
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
  }, 
  bottomPriceValue : {
    color : '#222222',
    fontSize : 17
  },
  bottomPriceDetails : {
    color : '#FF4C3B',
    fontSize : 16

  },
  bottomPriceRight : {
    borderRadius : 4,
    backgroundColor : '#FF4C3B',
    textAlign : 'center'
  },
  bottomPriceRightText : {
    color : "#fff",
    fontSize : 16,
    paddingVertical : 10,
    paddingHorizontal : 30
  }
});
