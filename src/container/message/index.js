import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Thumbnail,
  Title,
} from 'native-base';
import Avatar from '../../../assets/img/avatar.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MessageContainer = ({navigation}) => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const onView = () => {
    navigation.navigate('MessageDetail');
  };

  const getMessageOfUser = async () => {
    const userAuth = JSON.parse(await AsyncStorage.getItem('userAuth'));
    if (userAuth) {
      const arrMessage = Array.from(Array(10).keys());
      setMessages(arrMessage);
    }
    setUser(userAuth);
  };

  useEffect(() => {
    getMessageOfUser().then();
  }, []);

  console.log(user, 'giá trị: user');

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
          {messages.map((item, idx) => (
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
