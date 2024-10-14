import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import CourseNameCard from '../CourseNameCard/CourseNameCard';
import ItemsList from '../ItemsList/ItemsList';
import {Text14} from '../Text';
import {ASK_A_SHEIKH_STATE} from '../../redux/reducers/askASheikh/getState';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const SheikhList = React.memo(props => {
  const {onPressSheikh = item => {}} = props || {};
  const shayookh = useSelector(ASK_A_SHEIKH_STATE.shayookh);

  if (!shayookh || !shayookh?.length) {
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
        data={shayookh}
        keyExtractor={({item, index}) => index?.toString()}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        renderItem={({item, index}) => {
          return (
            <CourseNameCard
              title={item?.fname + ' ' + item?.lname}
              key={index?.toString()}
              onPress={() => onPressSheikh(item)}
            />
          );
        }}
      />
    </View>
  );
});

SheikhList.propTypes = {
  onPressSheikh: PropTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    marginVertical: 5,
  },
});
