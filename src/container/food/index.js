import React, {useRef} from 'react';
import {StyleSheet, View, Platform, Dimensions} from 'react-native';
import {Text} from 'native-base';
import ImageHeaderScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const FoodDetailContainer = ({navigation, route}) => {
  const {item} = route.params;
  const navTitleView = useRef(null);
  return (
    <ImageHeaderScrollView
      maxHeight={MAX_HEIGHT}
      minHeight={MIN_HEIGHT}
      headerImage={item.image}
      renderForeground={() => (
        <View style={styles.titleContainer}>
          <Text style={styles.imageTitle}>{item.title}</Text>
        </View>
      )}
      renderFixedForeground={() => (
        <Animatable.View style={styles.navTitleView} ref={navTitleView}>
          <Text style={styles.navTitle}>{item.title}</Text>
        </Animatable.View>
      )}>
      <TriggeringView
        style={styles.section}
        onHide={() => navTitleView.current.fadeInUp(200)}
        onDisplay={() => navTitleView.current.fadeOut(100)}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>Overview</Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <FontAwesome name="star" size={16} color="#FF6347" />
            <Text style={{marginHorizontal: 2}}>{item.rating}</Text>
            <Text>({item.reviews})</Text>
          </View>
        </View>
      </TriggeringView>
      <View style={[styles.section, styles.sectionLarge]}>
        <Text style={styles.sectionContent}>{item.description}</Text>
      </View>
      <View style={[styles.section, styles.sectionLarge]}>
        <Text style={styles.sectionTitle}>Keywords</Text>
        <View style={styles.keywords}>
          {item.categories.map((category) => (
            <View style={styles.keywordContainer} key={category}>
              <Text style={styles.keyword}>{category}</Text>
            </View>
          ))}
        </View>
      </View>
    </ImageHeaderScrollView>
  );
};

export default FoodDetailContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {},
  keywords: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  keywordContainer: {
    backgroundColor: '#999999',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  keyword: {
    fontSize: 16,
    color: 'white',
  },
});
