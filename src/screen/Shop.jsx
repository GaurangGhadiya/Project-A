import {
  FlatList,
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
import { data } from './Home';
import VerticalProduct from '../components/VerticalProduct';

let data1 = [
  {
    title: 'Filter',
    id: '1',
  },
  {
    title: 'Sort By',
    id: '2',
  },
  {
    title: 'Age Classification',
    id: '3',
  },
  {
    title: 'Gender',
    id: '4',
  },
  {
    title: 'Brand',
    id: '5',
  },
  {
    title: 'Price',
    id: '6',
  },
  {
    title: 'Color',
    id: '7',
  },
  {
    title: 'Ratings',
    id: '8',
  },
  {
    title: 'Discounts',
    id: '9',
  },
  {
    title: 'Clear All',
    id: '10',
  },
];
const Shop = () => {

    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.item} >
            {item.id == '10'?<>
                <Text style={styles.name1} color={"#FF4C3B"}>{item.title}</Text>

<Icon name={'close'} size={18} color={'#FF4C3B'} marginTop={2} marginRight={-5}/>
</> :
            <>
          <Text style={styles.name}>{item.title}</Text>

<Icon name={'chevron-down'} size={20} color={'#222222'} marginTop={2} marginRight={-5}/>
</>
            }
          </TouchableOpacity>
      );

      const renderItemTabs = ({item}) => <VerticalProduct />;

  return (
    <SafeAreaView>
      <ScrollView style={styles.main}>
        <View style={styles.header}>
          <Icon name={'arrow-left'} size={26} color={'#222222'} />
          <View style={styles.outerSearch}>
            <View style={styles.search}>
              <Icon name={'magnify'} size={20} color={'#777777'} />
              <TextInput
                placeholder="Search..."
                placeholderTextColor={'#777777'}
                style={styles.inputbox}
              />
            </View>
          </View>
        </View>

        <View style={styles.filters}>
          <FlatList
            data={data1}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          />
        </View>
       <View backgroundColor="#fff">
       <FlatList
              data={[...data, ...data, ...data, ...data, ...data, ...data]}
              renderItem={renderItemTabs}
              keyExtractor={item => item.id}
              numColumns={2}
              columnWrapperStyle={styles.row}
              nestedScrollEnabled={true} 
            />
       </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;

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
  inputbox: {
    // borderColor :"red",
    // borderWidth: 1,
    width: '89%',
    // paddingHorizontal : 3
    color: '#777777',
    paddingLeft: 10,
    fontSize: 18,
    paddingVertical: 8,
  },
  search: {
    backgroundColor: 'white',
    marginHorizontal: 10,
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
    // height: 50,
  },
  name : {
    color : '#222222',
    fontSize : 13,
    marginRight :1
  
  },
  name1 : {
    color : '#FF4C3B',
    fontSize : 13,
    marginRight :1
  
  },
  item : {
    backgroundColor : '#fff',
    borderColor : '#999999',
    borderWidth : 1,
    borderRadius : 50,
    marginRight : 7,
    paddingHorizontal : 15,
    paddingVertical : 4,
    display : 'flex',
    justifyContent : 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filters : {
    backgroundColor : '#fff',
paddingHorizontal : 15,
marginTop : 10,
paddingVertical : 10
  }
});
