import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeCategory = ({navigation}) => (
  <View>
    <View style={styles.iconsList}>
      <TouchableOpacity
        style={styles.iconCategory}
        onPress={() => navigation.navigate('Category', {title: 'Restaurant'})}>
        <View>
          <View style={styles.iconItem}>
            <MaterialIcons name="food-bank" size={25} color="#FF6347" />
          </View>
          <Text>Restaurant</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconCategory}
        onPress={() =>
          navigation.navigate('Category', {title: 'Fastfood Center'})
        }>
        <View>
          <View style={styles.iconItem}>
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={25}
              color="#FF6347"
            />
          </View>
          <Text>Fastfood Center</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconCategory}
        onPress={() =>
          navigation.navigate('Category', {title: 'Snacks Corner'})
        }>
        <View>
          <View style={styles.iconItem}>
            <MaterialCommunityIcons name="food" size={25} color="#FF6347" />
          </View>
          <Text>Snacks Corner</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.iconsList}>
      <TouchableOpacity
        style={styles.iconCategory}
        onPress={() => navigation.navigate('Category', {title: 'Hotels'})}>
        <View>
          <View style={styles.iconItem}>
            <MaterialIcons name="room-service" size={35} color="#FF6347" />
          </View>
          <Text>Hotels</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconCategory}
        onPress={() => navigation.navigate('Category', {title: 'Dine Outs'})}>
        <View>
          <View style={styles.iconItem}>
            <Ionicons name="md-restaurant" size={25} color="#FF6347" />
          </View>
          <Text>Dine Outs</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconCategory}
        onPress={() => navigation.navigate('Category', {title: 'Show More'})}>
        <View>
          <View style={styles.iconItem}>
            <MaterialIcons name="expand-more" size={40} color="#FF6347" />
          </View>
          <Text>Show More</Text>
        </View>
      </TouchableOpacity>
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
