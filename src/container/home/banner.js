import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import Swiper from 'react-native-swiper';

import FoodBanner1 from '../../../assets/banners/food-banner1.jpg';
import FoodBanner2 from '../../../assets/banners/food-banner2.jpg';
import FoodBanner3 from '../../../assets/banners/food-banner3.jpg';
import FoodBanner4 from '../../../assets/banners/food-banner4.jpg';
import FoodBanner5 from '../../../assets/banners/food-banner5.jpg';

const HomeBanner = () => {
  const banners = [
    FoodBanner1,
    FoodBanner2,
    FoodBanner3,
    FoodBanner4,
    FoodBanner5,
  ];

  return (
    <View style={styles.slideBox}>
      <View style={styles.slideBoxWrapper}>
        <Swiper autoplay autoplayTimeout={5} showsPagination={false}>
          {banners.map((banner, idx) => (
            <Image
              source={banner}
              key={idx.toString()}
              style={styles.bannerImage}
            />
          ))}
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slideBox: {
    alignItems: 'center',
  },
  slideBoxWrapper: {
    height: 180,
    width: '95%',
  },
  bannerImage: {
    borderRadius: 10,
    height: 170,
  },
});

export default HomeBanner;
