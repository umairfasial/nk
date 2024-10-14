import React from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Pdf from 'react-native-pdf';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text15Bold} from '../../components/Text';
import {COLORS} from '../../shared/themes';
import {getHTTPSURL} from '../../utils/functions';

const PdfScreen = props => {
  const illmaPdfLink = props.route.params.item.file;
  const illmaPdfTitle = props.route.params.item.title;
  const pdfSource = {
    uri: getHTTPSURL(illmaPdfLink),
    cache: true,
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.goBack()}
        style={styles.topView}>
        <FontAwesome
          name={'chevron-left'}
          size={20}
          color={COLORS.sky_blue}
          style={{marginHorizontal: wp('1%')}}
        />
        <Text15Bold style={styles.headingTxt}>{illmaPdfTitle}</Text15Bold>
      </TouchableOpacity>
      <Pdf
        trustAllCerts={false}
        source={pdfSource}
        onLoadComplete={numberOfPages => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onError={error => {
          console.log(error);
        }}
        style={styles.pdf}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  topView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('3%'),
    marginTop: hp('2%'),
  },
  headingTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: COLORS.sky_blue,
    marginHorizontal: wp('1%'),
  },
});

export default PdfScreen;
