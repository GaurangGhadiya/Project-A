import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const topOption = [
  {
    icon: <Icon name={'package-variant-closed'} size={24} color={'#444444'} />,
    title: 'Orders',
  },
  {
    icon: <Icon name={'cards-heart-outline'} size={24} color={'#444444'} />,
    title: 'Wishlist',
  },
  {
    icon: <Icon name={'gift-outline'} size={24} color={'#444444'} />,
    title: 'Coupons',
  },
  {
    icon: <Icon name={'headphones'} size={24} color={'#444444'} />,
    title: 'Help Center',
  },
];
const bottomOption = [
  {
    icon: <Icon name={'help-circle-outline'} size={24} color={'#444444'} />,
    title: 'FAQs',
  },
  {
    icon: <Icon name={'information-outline'} size={24} color={'#444444'} />,
    title: 'About Us',
  },
  {
    icon: <Icon name={'file-document-outline'} size={24} color={'#444444'} />,
    title: 'Terms & Conditions',
  },
  {
    icon: <Icon name={'shield-lock-outline'} size={24} color={'#444444'} />,
    title: 'Privacy Policy',
  },
];
const options = [
  {
    icon: <Icon name={'credit-card-check-outline'} size={24} color={'#444444'} />,
    title: 'Payment',
desc : "Saved cards, Wallets"  
},
  {
    icon: <Icon name={'map-marker-radius-outline'} size={24} color={'#444444'} />,
    title: 'Saved Address',
desc : "Home, Office etc."  
},
  {
    icon: <Icon name={'google-translate'} size={24} color={'#444444'} />,
    title: 'Language',
desc : "Select your language"  
},
  {
    icon: <Icon name={'bell-outline'} size={24} color={'#444444'} />,
    title: 'Notifications',
desc : "Offer, Order trackking..."  
},
  {
    icon: <Icon name={'cog-outline'} size={24} color={'#444444'} />,
    title: 'Settings',
desc : "Dard Mode, Notification..."  
},
  {
    icon: <Icon name={'account-edit-outline'} size={24} color={'#444444'} />,
    title: 'Profile Settings',
desc : "Name, Email, Password..."  
},
];

const Profile = () => {
  const navigation = useNavigation()
  const renderItemOffer = ({item}) => (
    <View style={styles.itemOffer}>
      <View>{item.icon}</View>
      <Text style={styles.offertext}>{item.title}</Text>
    </View>
  );
  return (
    <ScrollView style={styles.main}>
      <SafeAreaView>
        <View style={styles.header}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon name={'arrow-left'} size={28} color={'#222222'} />
            <Text style={styles.title}>Profile</Text>
          </View>
          <View style={styles.rightIcon}>
            {/* <Icon name={'bell-outline'} size={24} color={'#222222'} /> */}
            {/* <Icon
            name={'cards-heart-outline'}
            size={24}
            color={'#222222'}
            style={styles.iconset}
          /> */}
            {/* <Icon
              name={'cards-heart-outline'}
              size={24}
              color={'#222222'}
              style={styles.iconset}
            /> */}
          </View>
        </View>
        <View style={styles.profile}>
          <View>
            <Image
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
              height={100}
              width={100}
              style={styles.imageProfile}
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={styles.name}>Gaurang Ghadiya</Text>
            <Text style={styles.email}>gaurangghadiya99@gmail.com</Text>
            <View style={styles.edit}>
              <Text style={styles.editText}>Edit</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          {/* <View style={styles.offfer}> */}
          <FlatList
            data={topOption}
            renderItem={renderItemOffer}
            keyExtractor={item => item.title}
            numColumns={2}
            columnWrapperStyle={styles.row}
            nestedScrollEnabled={true}
            scrollEnabled={false} 
          />
          {/* </View> */}
        </View>
        <View style={styles.options}>
          {options?.map(v => (
            <>
            <View style={styles.divider} keyExtractor={v?.title}></View>
              <View style={styles.outerOption}>
                <View style={styles.leftOption}>
                <View>{v?.icon}</View>
                <View style={{marginLeft : 12}}>
                  <Text style={styles.optiontitle}>{v.title}</Text>
                  <Text style={styles.optiondesc}>{v?.desc}</Text>
                </View>
                </View>
                <View>
                <Icon name={'chevron-right'} size={24} color={'#444444'} />
                </View>
              </View>
              
            </>
          ))}
        </View>
        <View style={styles.options}>
          {bottomOption?.map(v => (
            <>
            <View style={styles.divider} keyExtractor={v.title}></View>
              <View style={styles.outerOption}>
              <View style={styles.leftOption}>
                <View>{v?.icon}</View>
                <View style={{marginLeft : 12}}>
                  <Text style={styles.optiontitle}>{v.title}</Text>
                </View>
                </View>

                <View>
                <Icon name={'chevron-right'} size={24} color={'#444444'} />
                </View>
              </View>
              
            </>
          ))}
        </View>

        <View style={styles.logout}>
          <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.navigate('ProfileBrforeLogin')}>
          <Icon name={'power'} size={24} color={'#444444'} />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Profile;

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
  profile: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    height: 170,
  },
  imageProfile: {
    borderRadius: 50,
  },
  name: {
    color: '#222222',
    fontWeight: '600',
    fontSize: 18,
  },
  email: {
    color: '#222222',
    // fontWeight: '500',
    fontSize: 17,
    marginVertical: 3,
  },
  edit: {
    backgroundColor: '#FF4C3B',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: 60,
    marginTop: 7,
  },
  editText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  list: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  itemOffer: {
    marginRight: 15,
    textAlign: 'center',
    //  paddingHorizontal : 30,
    width: '48%',
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 5,
    borderColor: '#EDEFF4',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  offertext: {
    color: '#222222',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    paddingLeft: 10,
  },
  options: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginTop : 10
  },
  outerOption: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical : 20
  },
  leftOption: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    // paddingVertical : 20
  },
  divider : {
    backgroundColor :'#EDEFF4',
    height  : 1
  },
  optiontitle : {
    color : '#222222',
    fontWeight : '500',
    fontSize : 16
  },
  optiondesc : {
    color : '#777777',
    // fontWeight : '500',
    fontSize : 13
  },
  logout : {
    marginTop : 12,
    backgroundColor : '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoutBtn : {
    borderRadius: 5,
    borderColor: '#EDEFF4',
    borderWidth: 1,
    width : '90%',
    marginVertical : 20,
    paddingVertical : 7,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    

},
logoutText : {
    color : '#222222',
    fontWeight : '500',
    fontSize : 17,
    textAlign : 'center',
    paddingLeft : 7
}
});
