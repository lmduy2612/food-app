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
import {data} from '../../model/data';
import Card from '../../component/Card';

const CategoryContainer = ({navigation, route}) => (
  <Container>
    <Header>
      <Left style={styles.headerLeft}>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" />
        </Button>
      </Left>
      <Body style={styles.headerBody}>
        <Title>{route.params.title}</Title>
      </Body>
      <Right style={styles.headerRight} />
    </Header>
    <Content padder>
      {data.map((item, idx) => (
        <Card item={item} key={idx.toString()} />
      ))}
    </Content>
  </Container>
);

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

export default CategoryContainer;
