import React, {useState} from 'react';
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
  Spinner,
} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {firebase} from '../../firebase';

const LoginContainer = (props) => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgError, setMsgError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSignIn = async () => {
    setLoading(true);
    try {
      const resLogin = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (resLogin) {
        const user = resLogin.user;
        navigation.navigate('MainTab', {user: user});
        setLoading(false);
      }
    } catch (e) {
      setMsgError(e.message);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <Left style={styles.headerLeft} />
        <Body style={styles.headerBody}>
          <Title>Login</Title>
        </Body>
        <Right style={styles.headerRight} />
      </Header>
      <Content>
        {loading && <Spinner style={styles.loading} color="blue" />}
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              name="email"
              onChangeText={(value) => setEmail(value.trim())}
              value={email}
              autoCapitalize="none"
            />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input
              name="password"
              onChangeText={(value) => setPassword(value.trim())}
              value={password}
              secureTextEntry
              autoCapitalize="none"
            />
          </Item>
          <View style={styles.btnLogin}>
            <TouchableOpacity>
              <Button primary onPress={onSignIn}>
                <Text>Sign In</Text>
              </Button>
            </TouchableOpacity>
          </View>
          {msgError && (
            <View style={styles.boxError}>
              <Text style={styles.textError}>{msgError}</Text>
            </View>
          )}
          <View style={styles.boxRegister}>
            <Text>New Member?</Text>
            <Text
              style={styles.textHighlight}
              onPress={() => navigation.navigate('Register')}>
              Sign up now
            </Text>
          </View>
        </Form>
      </Content>
    </Container>
  );
};
export default LoginContainer;

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
  boxRegister: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textHighlight: {
    color: 'blue',
    marginLeft: 5,
  },
  boxError: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textError: {
    color: 'red',
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
