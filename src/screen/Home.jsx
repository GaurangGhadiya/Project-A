import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextComponent,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import HorizontalProduct from '../components/HorizontalProduct';
import VerticalProduct from '../components/VerticalProduct';
import { useNavigation } from '@react-navigation/native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';


const images = {
  women: require('../assets/logo.png'),
  man: require('../assets/logo.png'),
  kids: require('../assets/logo.png'),
  beauty: require('../assets/logo.png'),
  footwear: require('../assets/logo.png'),
  kitchen: require('../assets/logo.png'),
  electronics: require('../assets/logo.png'),
};

export const data = [
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

const Home = () => {
  const navigation = useNavigation()
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <View style={styles.imageOuter}>
        <Image
          source={item.img}
          width={50}
          height={50}
          style={styles.categoryImg}
        />
      </View>
      <Text style={styles.name}>{item.title}</Text>
    </View>
  );
  const renderItemBrands = ({item}) => (
    <View style={styles.itemBrands}>
      <View style={styles.imageOuterbrands}>
        <Image
          source={{uri: item.imgBrands}}
          width={50}
          height={50}
          style={styles.brandsImg}
        />
      </View>
    </View>
  );
  const renderItemOffer = ({item}) => (
    <View style={styles.itemOffer}>
      <Text style={styles.offertext}>{item.text}</Text>
    </View>
  );
  const renderItemDeals = ({item}) => <HorizontalProduct />;
  const renderItemTabs = ({item}) => <VerticalProduct />;
  const renderItemTabsKids = ({item}) => (
    <View style={{marginRight: 15}}>
      <VerticalProduct />
    </View>
  );

  return (
    <ScrollView style={styles.main}>
      <SafeAreaView>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Project A</Text>
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
        <View style={styles.outerSearch}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.search}>
            <Icon name={'magnify'} size={20} color={'#777777'} onPress={() => navigation.navigate('Search')}/>
            <Text
              style={styles.inputbox}
            >Search...</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
                scrollEnabled={false} 
          />
        </View>

        <View style={styles.mainContant}>
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
                      top: 215,
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

          <View style={styles.delesOuter}>
            <View style={styles.dealesHeader}>
              <Text style={styles.dealesLeft}>Deals of the Day</Text>
              <Text style={styles.dealesRight}>See all</Text>
            </View>
            <FlatList
              data={data?.slice(1, 4)}
              renderItem={renderItemDeals}
              keyExtractor={item => item.id}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true}
                scrollEnabled={false} 
            />
          </View>
        </View>

        <View style={styles.mainContant}>
          <View style={{paddingHorizontal: 15}}>
            <Text style={styles.styleLeft}>Find your Style</Text>
            <Text style={styles.styleDesc}>Super Summer Sale</Text>

            <View style={styles.tabss}>
              <TouchableOpacity style={styles.clicka}>
                <Text style={styles.tabLabel}>Trending Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.clicka}>
                <Text style={styles.tabLabel}>Top Picks</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.clickab}>
                <Text style={styles.tabLabelb}>Featured Products</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={data?.slice(0, 6)}
              renderItem={renderItemTabs}
              keyExtractor={item => item.id}
              numColumns={2}
              columnWrapperStyle={styles.row}
              nestedScrollEnabled={true}
                scrollEnabled={false} 
            />
          </View>
          <Image
            source={require('../assets/banner.png')}
            width={50}
            height={50}
            style={styles.bannerImg}
          />

          <Text style={styles.styleLeft2}>Biggest Deals on Top Brands</Text>
          <View style={styles.brands}>
            <FlatList
              data={data}
              renderItem={renderItemBrands}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true}
                scrollEnabled={false} 
            />
          </View>
        </View>

        <View style={styles.mainContant}>
          <View style={{paddingHorizontal: 15}}>
            <Text style={styles.styleLeft}>The Kids Courner</Text>
            <Text style={styles.styleDesc}>Clothing for your child</Text>

            <View style={styles.kidsFlat}>
              <FlatList
                data={data}
                renderItem={renderItemTabsKids}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
                scrollEnabled={false} 
              />
            </View>

            <Text style={styles.styleLeft3}>Offer Corner</Text>

            <View style={styles.offfer}>
              <FlatList
                data={data?.slice(0, 4)}
                renderItem={renderItemOffer}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                nestedScrollEnabled={true}
                scrollEnabled={false} 
                />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

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
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#222222',
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
  inputbox: {
    // borderColor :"red",
    // borderWidth: 1,
    width: '93%',
    // paddingHorizontal : 3
    color: '#777777',
    paddingLeft: 10,
    fontSize: 16,
    paddingVertical : 6
  },
  search: {
    backgroundColor: 'white',
    margin: 10,
    marginTop: 0,
    borderColor: '#777777',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    paddingLeft: 10,
  },
  outerSearch: {
    backgroundColor: 'white',
    height: 50,
  },
  category: {
    backgroundColor: 'white',
    padding: 13,
    paddingTop: 0,
    paddingRight: 0,
  },
  brands: {
    backgroundColor: 'white',
    padding: 13,
    paddingTop: 0,
    paddingRight: 0,
    marginVertical: 10,
    marginBottom: 10,
  },
  categoryImg: {
    height: 55,
    width: 55,
    borderRadius: 25,
  },
  brandsImg: {
    height: 23,
    width: 100,
    // borderRadius :  25,
    resizeMode: 'contain',
  },
  item: {
    marginRight: 20,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBrands: {
    marginRight: 15,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemOffer: {
    marginRight: 15,
    textAlign: 'center',
    //  paddingHorizontal : 30,
    width: '50%',
    paddingVertical: 20,
    backgroundColor: '#EDEFF4',
    marginVertical: 10,
    borderRadius: 5,
  },
  offertext: {
    color: '#222222',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  name: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  imageOuter: {
    borderRadius: 25,
    backgroundColor: '#EDEFF4',
    // backgroundColor:"red"
  },
  imageOuterbrands: {
    borderRadius: 4,
    backgroundColor: '#EDEFF4',
    paddingVertical: 13,
    paddingHorizontal: 10,
    // backgroundColor:"red"
  },
  mainContant: {
    marginTop: 10,
    backgroundColor: 'white',
    // paddingHorizontal:10,
  },
  slide: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 7,
    // resizeMode: 'cover',
  },
  slidermain: {
    height: 230,
  },
  delesOuter: {
    paddingHorizontal: 13,
    marginTop: 15,
    marginBottom: 20,
  },
  dealesHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dealesLeft: {
    color: '#222222',
    fontWeight: '600',
    fontSize: 18,
  },
  dealesRight: {
    color: '#FF4C3B',
    fontWeight: '400',
    fontSize: 16,
  },
  styleLeft: {
    color: '#222222',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 20,
  },
  styleLeft2: {
    color: '#222222',
    fontWeight: '500',
    fontSize: 18,
    marginTop: 30,
    marginLeft: 15,
  },
  styleLeft3: {
    color: '#222222',
    fontWeight: '500',
    fontSize: 18,
    marginTop: 5,
    marginBottom: -10,
    // marginTop : 30,
    // marginLeft : 15
  },
  styleDesc: {
    color: '#777777',
    fontWeight: '400',
    fontSize: 17,
  },
  tabss: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 15,
  },
  clicka: {
    backgroundColor: '#EDEFF4',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tabLabel: {
    color: '#222222',
    fontSize: 15,
    fontWeight: '500',
  },
  clickab: {
    backgroundColor: '#FF4C3B',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tabLabelb: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  bannerImg: {
    marginVertical: 10,
    backgroundColor: 'white',
  },
  kidsFlat: {
    marginVertical: 15,
  },
  offfer: {
    marginVertical: 20,
  },
});
