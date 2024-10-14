import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';
import ButtonComp from '../../components/Button/ButtonComp';
import styles from './Styles';
import {Text12, Text14, Text20, Text20Bold} from '../../components/Text';
import ProgressCircle from 'react-native-progress-circle';
import http from '../../config/http';
import {CATEGORY_ENDPOINTS} from '../../config/api';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NoContent from '../../components/NoContent';
const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(74, 168, 197,${opacity})`,
  barPercentage: 0.5,
};
const MyJourney = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [labels, setLabels] = useState([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ]);
  const [percentAge, setPercentAge] = useState([]);
  const data = {
    labels: labels,
    datasets: [
      {
        data: percentAge,
      },
    ],
  };
  const [allResults, setAllResults] = useState();

  useEffect(() => {
    _getRsultAssessment();
    navigation.addListener('focus', () => {
      _getRsultAssessment();
    });
  }, []);

  const _getRsultAssessment = async () => {
    const getResults = await http.get(CATEGORY_ENDPOINTS.GET_RESULT_ASSESSMENT);

    if (!getResults.data) {
      setLoading(false);
    } else {
      setAllResults(getResults?.data?.data);
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.6}
        style={styles.topView}>
        <FontAwesome
          name={'chevron-left'}
          size={20}
          color={COLORS.sky_blue}
          style={{marginHorizontal: wp('1%')}}
        />
        <Text20Bold textStyle={styles.journey}>My Knowledge Journey</Text20Bold>
      </TouchableOpacity>

      <ScrollView
        style={{marginTop: hp('2%')}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.boxView}>
          <Image
            source={require('../../assets/images/myjourney.jpg')}
            style={styles.image}
          />
          <Text20 textStyle={styles.text}>Take a Fun Quiz</Text20>
          <Text14 textStyle={{color: COLORS.sky_blue}}>
            to test your Islamic Knowledge
          </Text14>
          <Text12 textStyle={styles.text}>
            Lorem ipsum dolor sit amet consetetur
          </Text12>
          <ButtonComp
            btnName="Take Quiz"
            styleTxt={{color: COLORS.white}}
            onPress={() => {
              navigation.navigate('Quiz');
            }}
          />
        </View>
        {loading ? (
          <View style={styles.indicator}>
            <ActivityIndicator size={'small'} color={COLORS.sky_blue} />
          </View>
        ) : (
          <>
            {allResults?.progress ? (
              <ProgressCircle
                outerCircleStyle={styles.circle}
                percent={allResults?.percentage}
                radius={80}
                borderWidth={10}
                color={'#44DCE0'}
                shadowColor={COLORS.lightGrey}
                bgColor="#fff">
                <Text style={{fontSize: 18}}>
                  {allResults?.percentage + '%'}
                </Text>
              </ProgressCircle>
            ) : (
              <NoContent title={'Results'} />
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyJourney;
