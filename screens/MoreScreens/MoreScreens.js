import React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImageComp from '../../components/ImageComp/ImageComp';
import { ProfileHeader } from './ProfileHeader';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './Styles';
import { COLORS } from '../../shared/themes';
import http from '../../config/http';
import { AUTH_ENDPOINTS } from '../../config/api';
import { clearLocalStorage } from '../../shared/functions';
import { showMessage, hideMessage } from 'react-native-flash-message';

const MoreScreens = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <View style={{ marginTop: hp('3%') }}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.optionsStyle}
          onPress={() => {
            navigation.navigate('Quiz');
          }}>
          <View style={styles.optionView}>
            <ImageComp
              source={require('../../assets/images/userActive.png')}
              imageStyle={styles.image}
            />
          </View>
          <Text style={styles.headingsStyle}>Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('My-Favourite-Courses')}
          activeOpacity={0.6}
          style={styles.optionsStyle}>
          <View style={styles.optionView}>
            <ImageComp
              source={require('../../assets/images/playlist.png')}
              imageStyle={styles.image}
            />
          </View>
          <Text style={styles.headingsStyle}>My Favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.optionsStyle}
          onPress={() => {
            navigation.navigate('Settings');
          }}>
          <View style={styles.optionView}>
            <ImageComp
              source={require('../../assets/images/settings.png')}
              imageStyle={styles.image}
            />
          </View>
          <Text style={styles.headingsStyle}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.optionsStyle}
          onPress={async () => {
            Alert.alert('Logout', 'Are you sure you want to Logout?', [
              {
                text: 'Yes',
                onPress: async () => {
                  const logOut = await http.post(AUTH_ENDPOINTS.LOGOUT)
                  showMessage({
                    message: "Logout successfully",
                    type: "info",
                  });
                  if (logOut?.data) {
                    await clearLocalStorage().then(() => {
                      navigation.reset({
                        index: 0,
                        routes: [{ name: 'Sign-in' }],
                      });
                    });
                  }
                },
              },
              { text: 'No', onPress: () => console.log('No') },
            ]);
          }}>
          <View style={styles.optionView}>
            <SimpleLineIcons name="logout" size={20} color={COLORS.sky_blue} />
          </View>
          <Text style={styles.headingsStyle}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoreScreens;
