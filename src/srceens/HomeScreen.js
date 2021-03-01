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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FoodBanner1 from '../../assets/banners/food-banner1.jpg';
import FoodBanner2 from '../../assets/banners/food-banner2.jpg';
import FoodBanner3 from '../../assets/banners/food-banner3.jpg';
import FoodBanner4 from '../../assets/banners/food-banner4.jpg';
import FoodBanner5 from '../../assets/banners/food-banner5.jpg';
import StarRating from '../component/StarRating';

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

        <View>
          <View style={styles.recentTitle}>
            <Text style={styles.textTitle}>Recently Viewed</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={FoodBanner1}
                resizeMode="cover"
                style={styles.cardImg}
              />
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
              <Image
                source={FoodBanner1}
                resizeMode="cover"
                style={styles.cardImg}
              />
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
              <Image
                source={FoodBanner2}
                resizeMode="cover"
                style={styles.cardImg}
              />
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
