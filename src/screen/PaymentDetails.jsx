import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioButton from '../components/RadioButton';
import { useNavigation } from '@react-navigation/native';

const offers = [
  'Get upto 25% discount on Multikart Pay using ICICI Bank Net banking or Cards',
  'Enjoy upto 50% off & free delivery on online orders!',
  'Get upto 25% discount on Multikart Pay using ICICI Bank Net banking or Cards',
  'Enjoy upto 50% off & free delivery on online orders!',
];

const PaymentDetails = () => {
    const navigation = useNavigation()
  const [lessMore, setLessMore] = useState(false);
  return (
    <>
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
              <Text style={styles.title}>Payment Details</Text>
            </View>
            <View style={styles.rightIcon}></View>
          </View>

          <View style={styles.offers}>
            <Text style={styles.heading}>Offers & promotions</Text>

            <View>
              {offers?.slice(0, lessMore ? 4 : 2)?.map(v => (
                <>
                  <View style={styles.offerBox}>
                    <Text style={styles.offerText}>{v}</Text>
                  </View>
                </>
              ))}
            </View>

            <TouchableOpacity onPress={() => setLessMore(!lessMore)}>
              <Text style={styles.moreLess}>
                Show {lessMore ? 'Less' : 'More (4 offers)'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.payment}>
            <Text style={styles.headingPay}>Payment Methods</Text>
            <View style={styles.paymentBox}>
              <View style={styles.paymentLeft}>
                <Icon name={'cash-100'} size={28} color={'#2e2e2e'} />
                <Text style={styles.methodText}>Cash on Delivery</Text>
              </View>
              <View style={styles.paymentRight}>
                <RadioButton
                  key={'1'}
                  label={''}
                  value={'1'}
                  selected={false}
                  //   onPress={() => setSelectedValue(v)}
                />
              </View>
            </View>
            <View style={styles.paymentBox}>
              <View style={styles.paymentLeft}>
                <Icon name={'credit-card-check-outline'} size={28} color={'#2e2e2e'} />
                <Text style={styles.methodText}>Debit/Credit Card</Text>
              </View>
              <View style={styles.paymentRight}>
                <RadioButton
                  key={'1'}
                  label={''}
                  value={'1'}
                  selected={false}
                  //   onPress={() => setSelectedValue(v)}
                />
              </View>
            </View>
            <View style={styles.paymentBox}>
              <View style={styles.paymentLeft}>
                <Icon name={'wallet-outline'} size={28} color={'#2e2e2e'} />
                <Text style={styles.methodText}>Wallets</Text>
              </View>
              <View style={styles.paymentRight}>
                <RadioButton
                  key={'1'}
                  label={''}
                  value={'1'}
                  selected={false}
                  //   onPress={() => setSelectedValue(v)}
                />
              </View>
            </View>
            <View style={styles.paymentBox}>
              <View style={styles.paymentLeft}>
                <Icon name={'cellphone-sound'} size={28} color={'#2e2e2e'} />
                <Text style={styles.methodText}>Net Banking</Text>
              </View>
              <View style={styles.paymentRight}>
                <RadioButton
                  key={'1'}
                  label={''}
                  value={'1'}
                  selected={false}
                  //   onPress={() => setSelectedValue(v)}
                />
              </View>
            </View>
          </View>

          <View style={styles.orderDetailsBox}>
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


        </ScrollView>

        <View style={styles.bottomPrice}>
              <View >
                <Text style={styles.bottomPriceValue}>₹280.00</Text>
                <TouchableOpacity ><Text  style={styles.bottomPriceDetails}>View Details</Text></TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.bottomPriceRight} onPress={() => navigation.navigate('OrderPlaced')}>
                <Text style={styles.bottomPriceRightText}>Pay Now</Text>
              </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default PaymentDetails;

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
  offers: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  heading: {
    color: '#222222',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5,
  },
  offerBox: {
    backgroundColor: '#edeff4',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  offerText: {
    color: '#777777',
    fontSize: 14,
  },
  moreLess: {
    color: '#FF4C3B',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    marginBottom: 20,
  },
  payment: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  headingPay: {
    color: '#222222',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 15,
    marginBottom : 10
  },
  paymentBox: {
    backgroundColor: '#edeff4',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paymentLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  methodText: {
    color: '#222222',
    fontSize: 17,
    marginLeft: 10,
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
  styleLeftLow: {
    color: '#222222',
    fontWeight: '600',
    fontSize: 17,
    // marginTop: 20,
  },
  devider: {
    height: 2,
    backgroundColor: '#EDEFF4',
    marginVertical: 15,
  },
  orderDetailsBox : {
    backgroundColor : '#fff',
    paddingHorizontal : 20,
    paddingTop : 10,
    marginBottom : 90
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
