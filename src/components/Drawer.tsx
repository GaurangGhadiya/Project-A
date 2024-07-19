import React from 'react';
import {View, StyleSheet, Text, Image, Button, Linking} from 'react-native';
import Share from 'react-native-share';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconM from 'react-native-vector-icons/MaterialIcons';

const DrawerList = [
  {icon: 'home-outline', label: 'Home', navigateTo: 'Home'},
  {icon: 'cog-outline', label: 'Settings', navigateTo: 'Setting'},
  {icon: 'share-variant-outline', label: 'Share', navigateTo: 'Home'},
  {icon: 'information-outline', label: 'About Us', navigateTo: 'AboutUs'},
  {icon: 'shield-check-outline', label: 'Privacy Policy', navigateTo: 'Home'},
  {icon: 'star-outline', label: 'Rate & Reviews', navigateTo: 'Home'},
];
const DrawerLayout = ({icon, label, navigateTo}: any) => {
  const navigation = useNavigation();
  // console.log(userData);
  return (
    <DrawerItem
      icon={({color, size}) => <Icon name={icon} color={color} size={size} />}
      label={label}
      onPress={() => {
        if (label == 'Share') {
          handleShare();
        } else if (label == 'Privacy Policy') {
          Linking.openURL(
            'https://www.termsfeed.com/live/cb1baf40-9914-4c94-a0ab-c3f46bf8c640',
          );
        }
        else if (label == 'Rate & Reviews') {
          Linking.openURL(
            'https://play.google.com/store/apps/details?id=com.project_a',
          );
        } else {
          navigation.navigate(navigateTo);
        }
      }}
    />
  );
};
const handleShare = async () => {
  try {
    const options = {
      message: '',
      url: 'https://play.google.com/store/apps/details?id=com.project_a',
      title: 'EMI Calculator',
    };
    await Share.open(options);
  } catch (error) {}
};
const DrawerItems = props => {
  return DrawerList.map((el, i) => {
    return (
      <DrawerLayout
        key={i}
        icon={el.icon}
        label={el.label}
        navigateTo={el.navigateTo}
        // onPress={() => handleShare()}
      />
    );
  });
};
function DrawerData(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Image
                  source={require('../assets/logo.png')}
                  // size={50}

                  style={{marginTop: 5, height: 50, width: 50}}
                />
                <View
                  style={{
                    marginLeft: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                  <Title style={styles.title}>EMI Calculator</Title>
                  {/* <Text style={styles.caption} numberOfLines={1}>
                    adarshthakur210@gmail.com
                  </Text> */}
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.drawerSection}>
            {/* <Button title="Share" onPress={handleShare} /> */}

            <DrawerItems />
          </View>
        </View>
      </DrawerContentScrollView>

      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="atom" color={color} size={size} />
          )}
          label="Version - 1.1.0"
        />
      </View>
    </View>
  );
}
export default DrawerData;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    // color: '#6e6e6e',
    width: '100%',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    borderBottomWidth: 0,
    borderBottomColor: '#dedede',
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#dedede',
    borderTopWidth: 1,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
