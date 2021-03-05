import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {GiftedChat, Send} from 'react-native-gifted-chat';
import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base';

import mesData from '../../model/message';

const MessageDetailContainer = ({navigation, route}) => {
  const [messages, setMessages] = useState([]);

  const btnSend = (props) => (
    <Send {...props}>
      <View style={styles.btnSend}>
        <Icon name="arrow-redo-outline" />
      </View>
    </Send>
  );

  useEffect(() => {
    setMessages(mesData);
  }, []);

  const onSend = useCallback((msg = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, msg));
  }, []);

  return (
    <Container>
      <Header>
        <Left style={styles.headerLeft}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" />
          </Button>
        </Left>
        <Body style={styles.headerBody}>
          <Title>Kumar Pratik</Title>
        </Body>
        <Right style={styles.headerRight}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="call-outline" />
          </Button>
        </Right>
      </Header>
      <GiftedChat
        messages={messages}
        onSend={(msg) => onSend(msg)}
        user={{
          _id: 1,
        }}
        renderSend={btnSend}
      />
    </Container>
  );
};

export default MessageDetailContainer;

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
  messageBox: {
    height: 500,
  },
  btnSend: {
    marginRight: 15,
    marginBottom: 5,
  },
});
