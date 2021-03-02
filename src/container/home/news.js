import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Text} from 'native-base';

import FoodBanner1 from '../../../assets/banners/food-banner1.jpg';
import FoodBanner2 from '../../../assets/banners/food-banner2.jpg';
import FoodBanner3 from '../../../assets/banners/food-banner3.jpg';

import StarRating from '../../component/StarRating';

const styles = StyleSheet.create({
  recentTitle: {
    alignItems: 'center',
    marginTop: 10,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});

const HomeNews = () => (
  <View>
    <View style={styles.recentTitle}>
      <Text style={styles.textTitle}>Recently Viewed</Text>
    </View>
    <View style={styles.card}>
      <View style={styles.cardImgWrapper}>
        <Image source={FoodBanner1} resizeMode="cover" style={styles.cardImg} />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>Amazing Food Place</Text>
        <StarRating ratings={4} reviews={99} />
        <Text style={styles.cardDetails}>
          Amazing description for this amazing place
        </Text>
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.cardImgWrapper}>
        <Image source={FoodBanner2} resizeMode="cover" style={styles.cardImg} />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>Amazing Food Place</Text>
        <StarRating ratings={4} reviews={99} />
        <Text style={styles.cardDetails}>
          Amazing description for this amazing place
        </Text>
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.cardImgWrapper}>
        <Image source={FoodBanner3} resizeMode="cover" style={styles.cardImg} />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>Amazing Food Place</Text>
        <StarRating ratings={4} reviews={99} />
        <Text style={styles.cardDetails}>
          Amazing description for this amazing place
        </Text>
      </View>
    </View>
  </View>
);

export default HomeNews;
