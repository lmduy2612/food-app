import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Icon, Button, FooterTab, Text, Badge, Footer} from 'native-base';
const FooterElement = (props) => {
  const {navigation} = props;
  const route = useRoute();

  const navigationBottom = [
    {
      title: 'Home',
      icon: 'home',
      navigate: 'Home',
    },
    {
      title: 'Message',
      icon: 'chatbox-outline',
      navigate: 'Message',
      badge: 10,
    },
    {
      title: 'Navigate',
      icon: 'navigate',
      navigate: 'Navigate',
    },
    {
      title: 'Contact',
      icon: 'person',
      navigate: 'Contact',
    },
  ];
  return (
    <Footer>
      <FooterTab>
        {navigationBottom.map((item, idx) => (
          <Button
            vertical
            badge={!!item?.badge}
            onPress={() => navigation.navigate(item.navigate)}
            active={route.name === item.navigate}
            key={idx.toString()}>
            {item?.badge && (
              <Badge>
                <Text>{item.badge}</Text>
              </Badge>
            )}
            <Icon name={item.icon} />
            <Text>{item.title}</Text>
          </Button>
        ))}
      </FooterTab>
    </Footer>
  );
};

export default FooterElement;
