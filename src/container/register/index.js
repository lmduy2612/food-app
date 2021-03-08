import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Left,
  Body,
  Title,
  Right,
  Button,
  Text,
  View,
  Icon,
  Spinner,
} from 'native-base';
import {firebase} from '../../firebase';

const RegisterContainer = (props) => {
  const {navigation} = props;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgError, setMsgError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSignUp = async () => {
    setLoading(true);
    try {
      const resCreate = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      if (resCreate) {
        const resLogin = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (resLogin) {
          const user = resLogin.user;
          navigation.navigate('MainTab', {user: user});
          setLoading(false);
        }
      }
    } catch (e) {
      setMsgError(e.message);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <Left style={styles.headerLeft}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" />
          </Button>
        </Left>
        <Body style={styles.headerBody}>
          <Title>Register</Title>
        </Body>
        <Right style={styles.headerRight} />
      </Header>
      <Content>
        {loading && <Spinner style={styles.loading} color="blue" />}
        <Form>
          <Item>
            <Label>Full name</Label>
            <Input
              name="fullname"
              onChangeText={(value) => setFullName(value.trim())}
              value={fullName}
              autoCapitalize="none"
            />
          </Item>
          <Item>
            <Label>Email</Label>
            <Input
              name="email"
              onChangeText={(value) => setEmail(value.trim())}
              value={email}
              autoCapitalize="none"
            />
          </Item>
          <Item last>
            <Label>Password</Label>
            <Input
              name="password"
              onChangeText={(value) => setPassword(value.trim())}
              value={password}
              secureTextEntry
              autoCapitalize="none"
            />
          </Item>
          {msgError && (
            <View style={styles.boxError}>
              <Text style={styles.textError}>{msgError}</Text>
            </View>
          )}
          <View style={styles.btnLogin}>
            <TouchableOpacity>
              <Button primary onPress={onSignUp}>
                <Text>Sign Up </Text>
              </Button>
            </TouchableOpacity>
          </View>
        </Form>
      </Content>
    </Container>
  );
};
export default RegisterContainer;

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
  btnLogin: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boxError: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textError: {
    color: 'red',
    paddingVertical: 15,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 45,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
