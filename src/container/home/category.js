import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeCategory = () => (
  <View>
    <View style={styles.iconsList}>
      <View style={styles.iconCategory}>
        <View style={styles.iconItem}>
          <MaterialIcons name="food-bank" size={25} color="#FF6347" />
        </View>
        <Text>Restaurant</Text>
      </View>
      <View style={styles.iconCategory}>
        <View style={styles.iconItem}>
          <MaterialCommunityIcons
            name="food-fork-drink"
            size={25}
            color="#FF6347"
          />
        </View>
        <Text>Fastfood Center</Text>
      </View>
      <View style={styles.iconCategory}>
        <View style={styles.iconItem}>
          <MaterialCommunityIcons name="food" size={25} color="#FF6347" />
        </View>
        <Text>Snacks Corner</Text>
      </View>
    </View>
    <View style={styles.iconsList}>
      <View style={styles.iconCategory}>
        <View style={styles.iconItem}>
          <MaterialIcons name="room-service" size={35} color="#FF6347" />
        </View>
        <Text>Hotels</Text>
      </View>
      <View style={styles.iconCategory}>
        <View style={styles.iconItem}>
          <Ionicons name="md-restaurant" size={25} color="#FF6347" />
        </View>
        <Text>Dine Outs</Text>
      </View>
      <View style={styles.iconCategory}>
        <View style={styles.iconItem}>
          <MaterialIcons name="expand-more" size={40} color="#FF6347" />
        </View>
        <Text>Show More</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  iconsList: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconCategory: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  iconItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdeae7',
    borderWidth: 0,
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
export default HomeCategory;
