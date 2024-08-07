import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import VerticalProduct from '../components/VerticalProduct';
import { data } from './Home';

const renderItemTabsKids = ({item}) => (
  <View style={{marginRight: 15}}>
    <VerticalProduct />
  </View>
);

const renderItemOffer = ({item}) => (
  <View style={styles.itemOffer}>
    {/* <Text style={styles.offertext}>{item.text}</Text> */}
      <Image
        source={{uri: item.imgBrands}}
        width={50}
        height={50}
        style={styles.brandsImg}
      />
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
const recentSearch = ['Pink Hoodie t-shirt', 'Man Blue Denim jacket', 'Travaling Bag']
const Search = () => {
  return (
    <SafeAreaView>
    <ScrollView style={styles.main}  >
      <View style={styles.header}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon name={'arrow-left'} size={28} color={'#222222'} />
        </View>
        <View style={styles.outerSearch}>
          <View  style={styles.search}>
            <Icon name={'magnify'} size={20} color={'#777777'} />
            <TextInput
              style={styles.inputbox}
              placeholder="Search..."
              placeholderTextColor="#777777"
              selectionColor="#ff4c3b"
              
            />
          </View>
        </View>
      </View>


      <View style={styles.recentSearch}>
          <Text style={styles.title}>Recent Search</Text>
          {recentSearch?.map(v => (<>
          <View style={styles.list}>
            <View style={styles.leftSearch}>
            <Icon name={'clock-outline'} size={20} color={'#777777'} />
            <Text style={styles.searchtext}>{v}</Text>
            </View>
            <Icon name={'close'} size={20} color={'#777777'} />

          </View>
          </>))}
      </View>
      <View style={styles.recentSearch} marginTop={10} paddingTop={7}>
          <Text style={styles.title} >Tranding Category</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled
          />
      </View>
      <View style={styles.recentSearch} marginTop={10} paddingTop={7}>
          <Text style={styles.title} >Recommended for you</Text>
              <FlatList
                data={data}
                renderItem={renderItemTabsKids}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled
              />
      </View>
      <View style={styles.recentSearch} marginTop={10} paddingTop={7}>
          <Text style={styles.title} >Popular Products</Text>
              <FlatList
                data={data}
                renderItem={renderItemTabsKids}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled
              />
      </View>
      <View style={styles.recentSearch} marginTop={10} paddingTop={7}>
          <Text style={styles.title} >Biggest Deals on Top Brands</Text>
              <FlatList
                data={data?.slice(0, 4)}
                renderItem={renderItemOffer}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                nestedScrollEnabled
              />
      </View>
      <View style={styles.recentSearch} marginTop={10} paddingTop={7}>
         <View style={styles.lastTitle}>
         <Icon name={'trending-up'} size={22} marginTop={2} color={'#222222'} />

         <Text style={styles.title} marginLeft={5} >Discover More</Text>
         </View>
            <View style={styles.outerMain}>
            {['Mobiles', 'Shoes', 'T-shirts', 'Laptops', 'Watches', 'Headphones', 'Jeans','Mobiles', 'Shoes', 'T-shirts', 'Pent']?.map(v => (<>
              {/* <View key={v} style={styles.outerMoreText}> */}
                <Text style={styles.moreText}>{v}</Text>
              {/* </View> */}
              </>))}
            </View>
      </View>
     
      </ScrollView>
      </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EDEFF4',
  },
  header: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  inputbox: {
    color: 'black',
    paddingLeft: 10,
    fontSize: 16,
  },
  search: {
    backgroundColor: 'white',
    // margin: 10,
    marginTop: 0,
    borderColor: '#777777',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    paddingLeft: 10,
    marginLeft : 10
  },
  outerSearch: {
    backgroundColor: 'white',
    height: 40,
    flex : 1
  },
  recentSearch : {
    backgroundColor: 'white',
    paddingHorizontal : 15,
    // paddingVertical : 20,
    paddingBottom : 10
  },
  title  :{
    color:'#222222',
    fontWeight : '500',
    fontSize : 17,
    marginBottom : 10
  },
  list : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical : 5
  },
  leftSearch : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchtext : {
    color : '#777777',
    fontSize : 15,
    marginLeft : 10
  },
  imageOuter: {
    borderRadius: 25,
    backgroundColor: '#EDEFF4',
    // backgroundColor:"red"
  },
  categoryImg: {
    height: 55,
    width: 55,
    borderRadius: 25,
  },
  item: {
    marginRight: 20,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  brands: {
    backgroundColor: 'white',
    padding: 13,
    paddingTop: 0,
    paddingRight: 0,
    marginVertical: 10,
    marginBottom: 10,
  },
  brandsImg: {
    height: 27,
    width: 100,
    // borderRadius :  25,
    resizeMode: 'contain',
  },
  itemBrands: {
    marginRight: 15,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageOuterbrands: {
    borderRadius: 4,
    backgroundColor: '#EDEFF4',
    paddingVertical: 13,
    paddingHorizontal: 10,
    // backgroundColor:"red"
  },
  itemOffer: {
    marginRight: 15,
    textAlign: 'center',
    //  paddingHorizontal : 30,
    width: '50%',
    paddingVertical: 15,
    backgroundColor: '#EDEFF4',
    marginVertical: 7,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  offertext: {
    color: '#222222',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  lastTitle : {
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'row',
  } ,
  moreText : {
    color: '#222222',
    fontSize : 14,
    width : 'auto',
    backgroundColor: '#EDEFF4',
    borderRadius : 50,
    paddingHorizontal : 15,
    paddingVertical : 7,
    marginRight : 10,
    marginBottom : 10
  },
  outerMoreText : {
    backgroundColor: '#EDEFF4',
    borderRadius : 50,
    // width : '',
  },
  outerMain : {
    display : 'flex',
    justifyContent : 'flex-start',
    alignItems : 'center',
    flexDirection : 'row',
    flexWrap : 'wrap',
  }
})