import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import Swiper from 'react-native-swiper';

import FoodBanner1 from '../../assets/banners/food-banner1.jpg';
import FoodBanner2 from '../../assets/banners/food-banner2.jpg';
import FoodBanner3 from '../../assets/banners/food-banner3.jpg';
import FoodBanner4 from '../../assets/banners/food-banner4.jpg';
import FoodBanner5 from '../../assets/banners/food-banner5.jpg';

const styles = StyleSheet.create({
  headerLeft: {
    flex: 1,
  },
  headerBody: {
    flex: 1,
    justifyContent: 'center',
  },
  headerRight: {
    flex: 1,
  },
  slideBox: {
    height: 240,
  },
  bannerImage: {
    borderRadius: 5,
    height: 200,
  },
});

const HomeScreen = () => {
  const banners = [
    FoodBanner1,
    FoodBanner2,
    FoodBanner3,
    FoodBanner4,
    FoodBanner5,
  ];
  return (
    <Container>
      <Header>
        <Left style={styles.headerLeft}>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body style={styles.headerBody}>
          <Title>Food Ordering</Title>
        </Body>
        <Right style={styles.headerRight}>
          <Button transparent>
            <Icon name="search-outline" />
          </Button>
        </Right>
      </Header>
      <Content padder>
        <View style={styles.slideBox}>
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
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default HomeScreen;
