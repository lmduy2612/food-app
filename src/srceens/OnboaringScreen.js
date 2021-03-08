import React from 'react';
import {Image, StatusBar} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import OnboardingImage1 from '../../assets/onboarding/1.png';
import OnboardingImage2 from '../../assets/onboarding/2.png';
import OnboardingImage3 from '../../assets/onboarding/3.png';

const OnboardingScreen = (props) => (
  <>
    <StatusBar animated={true} barStyle="dark-content" backgroundColor="#fff" />
    <Onboarding
      onSkip={() => props.navigation.navigate('MainTab')}
      onDone={() => props.navigation.navigate('MainTab')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={OnboardingImage1} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={OnboardingImage2} />,
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={OnboardingImage3} />,
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  </>
);
export default OnboardingScreen;
