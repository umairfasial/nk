import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {CATEGORY_STATE} from '../../redux/reducers/categories/getState';
import CourseNameCard from '../CourseNameCard/CourseNameCard';
import ItemsList from '../ItemsList/ItemsList';
import {Text14} from '../Text';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Categories = React.memo(props => {
  const {onPressItem = item => {}} = props || {};
  const topics = useSelector(CATEGORY_STATE.categories);

  if (!topics || !topics?.length) {
    return (
      <View>
        <FontAwesome name="folder-open-o" size={24} color="black" />
        <Text14>No Content!</Text14>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <ItemsList
        data={topics}
        keyExtractor={({index}) => index?.toString()}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        renderItem={({item, index}) => {
          if (`${item?.title}`?.toLocaleLowerCase() !== 'uncategorize') {
            return (
              <CourseNameCard
                title={item?.title}
                key={index?.toString()}
                onPress={() => onPressItem(item)}
              />
            );
          }
        }}
      />
    </View>
  );
});

Categories.propTypes = {
  onPressItem: PropTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    marginVertical: 5,
  },
});
