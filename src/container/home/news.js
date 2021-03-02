import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import {data} from '../../model/data';
import Card from '../../component/Card';

const HomeNews = () => {
  const news = data.slice(0, 3);
  return (
    <View>
      <View style={styles.recentTitle}>
        <Text style={styles.textTitle}>Recently Viewed</Text>
      </View>
      {news.map((item, idx) => (
        <Card item={item} key={idx.toString()} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  recentTitle: {
    alignItems: 'center',
    marginTop: 10,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomeNews;
