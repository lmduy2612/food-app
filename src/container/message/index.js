import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Body,
  Button,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Title,
  List,
  ListItem,
  Text,
  Thumbnail,
} from 'native-base';
import Avatar from '../../../assets/img/avatar.png';

const MessageContainer = ({navigation}) => {
  const arrMessage = Array.from(Array(10).keys());
  const onView = () => {
    navigation.navigate('MessageDetail');
  };
  return (
    <Container>
      <Header>
        <Left style={styles.headerLeft}>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body style={styles.headerBody}>
          <Title>Message</Title>
        </Body>
        <Right style={styles.headerRight} />
      </Header>
      <Content padder>
        <List>
          {arrMessage.map((item, idx) => (
            <ListItem avatar key={idx.toString()} onPress={onView}>
              <Left>
                <Thumbnail source={Avatar} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default MessageContainer;

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
