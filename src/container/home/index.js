import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from 'native-base';
import HomeBanner from './banner';
import HomeCategory from './category';
import HomeNews from './news';

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

const HomeContainer = () => {
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
        <HomeBanner />
        <HomeCategory />
        <HomeNews />
      </Content>
    </Container>
  );
};

export default HomeContainer;
