import React, {useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeBanner from './banner';
import HomeCategory from './category';
import HomeNews from './news';

const HomeContainer = (props) => {
  const isBoarding = async () => {
    const value = await AsyncStorage.getItem('isBoarding');
    return JSON.parse(value);
  };
  const setBoarding = async () => {
    await AsyncStorage.setItem('isBoarding', JSON.stringify(true));
  };
  if (!isBoarding) {
    setBoarding();
  }

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
        <HomeBanner {...props} />
        <HomeCategory {...props} />
        <HomeNews {...props} />
      </Content>
    </Container>
  );
};

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
});

export default HomeContainer;
