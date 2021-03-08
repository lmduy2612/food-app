import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '../../firebase';

const MessageDetailContainer = ({navigation, route}) => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  const createMessage = async (msg) => {
    const data = {...msg[0], createdAt: new Date(msg[0].createdAt).getTime()};
    await firebase.database().ref().child('messages').push(data);
    return true;
  };

  const onSend = useCallback((msg = []) => {
    createMessage(msg).then(() => {});
  }, []);

  const snapshotToArray = (snapshots) => {
    if (!snapshots) {
      return [];
    }
    return Object.keys(snapshots)
      ?.map((key) => snapshots[key])
      .reverse();
  };

  const getMessageOfUser = async () => {
    const userAuth = await AsyncStorage.getItem('userAuth');
    if (userAuth) {
      await firebase
        .database()
        .ref()
        .child('messages')
        .orderByChild('createdAt')
        .limitToLast(40)
        .on('value', (snapshot) => {
          setMessages(snapshotToArray(snapshot.val()));
        });
    }
    setUser(JSON.parse(userAuth));
  };

  const btnSend = (props) => (
    <Send {...props}>
      <View style={styles.btnSend}>
        <Icon name="arrow-redo-outline" />
      </View>
    </Send>
  );

  useEffect(() => {
    getMessageOfUser().then(() => {});
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
      {user && (
        <GiftedChat
          messages={messages}
          onSend={(msg) => onSend(msg)}
          user={{
            _id: user?.uid,
          }}
          renderSend={btnSend}
        />
      )}
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
