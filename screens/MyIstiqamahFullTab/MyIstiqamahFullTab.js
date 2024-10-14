import React, {useEffect} from 'react';
import {View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import ItemsList from '../../components/ItemsList/ItemsList';
import styles from './Styles';
import {ISTIQAMAS_STATE} from '../../redux/reducers/Istiqamah/getState';
import RenderIstiqamah from '../HomeScreen/MyIstiqamah/RenderIstiqamah';

const MyIstiqamahFullTab = ({navigation}) => {
  const istiqamas = useSelector(ISTIQAMAS_STATE.istiqamas);
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: wp('4%'), marginVertical: hp('0.5%')}}>
        <ItemsList
          data={istiqamas}
          renderItem={props => {
            return <RenderIstiqamah {...props} />;
          }}
        />
      </View>
    </View>
  );
};

export default MyIstiqamahFullTab;
