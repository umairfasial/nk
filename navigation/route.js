import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeSvg} from '../assets/svg/HomeSvg';
import {JourneySvg} from '../assets/svg/JourneySvg';
import {CoursesSvg} from '../assets/svg/CoursesSvg';
import {MoreSvg} from '../assets/svg/MoreSvg';
import {SheikhSvg} from '../assets/svg/SheikhSvg';
import {navigationRef} from './RootNavigator';
import Signin from '../screens/Signin/Signin';
import Signup from '../screens/Signup/Signup';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Cources from '../screens/Courses/Cources';
import AskSheikh from '../screens/AskSheikh/AskSheikh';
import MoreScreens from '../screens/MoreScreens/MoreScreens';
import MyJourney from '../screens/MyJourney/MyJourney';
import IlmaBytes from '../screens/IlmaBytes/IlmaBytes';
import MyIstiqamah from '../screens/MyIstiqamahfull/MyIstiqamahfull';
import ScheduleIbadah from '../screens/ScheduleIbadah/ScheduleIbadah';
import EditIbadah from '../screens/EditIbadah/EditIbadah';
import Otp from '../screens/Otp/Otp';
import NewPassword from '../screens/NewPassword/NewPassword';
import LessonDetails from '../screens/LessonDetails/LessonDetails';
import ShayookhDetails from '../screens/ShayookhDetails/ShayookhDetails';
import AskSheikhQuestion from '../screens/AskSheikhQuestion/AskSheikhQuestion';
import QuizScreen from '../screens/QuizScreen/QuizScreen';
import StartQuiz from '../screens/StartQuiz/StartQuiz';
import MyFavouritesCourses from '../screens/MyFavouriteCourses/MyFavouritesCourses';
import CreateNewFavourite from '../screens/CreateNewFavourite/CreateNewFavourite';
import IlmaBytesDetails from '../screens/IlmaByteDetails/IlmaByteDetails';
import LastScreen from '../screens/LastScreen/LastScreen';
import Answer from '../screens/Answer/Answer';
import {useDispatch} from 'react-redux';
import {getCategories} from '../redux/reducers/categories/category.actions';
import {COLORS} from '../shared/themes';
import {theme} from '../shared/theme';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import CoursesDetails from '../screens/CoursesDetails/CoursesDetails';
import AskAShiekhQuestions from '../screens/AskAShiekhQuestions/AskAShiekhQuestions';
import QuestionsDetails from '../screens/QuestionsDetails/QuestionsDetails';
import {getShayookh} from '../redux/reducers/askASheikh/askASheikh.action';
import Search from '../screens/Search/Search';
import CourseEpisodes from '../screens/CourseEpisodes/CourseEpisodes';
import ViewEpisode from '../screens/ViewEpisode/ViewEpisode';
import PdfScreen from '../screens/HomeScreen/PdfScreen';
import Splash from '../screens/Splash';
import ViewAll from '../screens/HomeScreen/ViewAll';
import VideoScreen from '../screens/HomeScreen/VideoScreen';

const AuthStack = createNativeStackNavigator();
const IstiqamahStack = createNativeStackNavigator();
const CoursesStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const ShaikhStack = createNativeStackNavigator();
const MoreStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const JourneyStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthScreen() {
  return (
    <AuthStack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Splash" component={Splash} />
      <AuthStack.Screen name="Home" component={MyTabs} />
      <AuthStack.Screen name="Schedule-Ibadah" component={ScheduleIbadah} />
      <AuthStack.Screen name="Ilma-Byte-Details" component={IlmaBytesDetails} />
      <AuthStack.Screen name="Ilma-Bytes" component={IlmaBytes} />
      <AuthStack.Screen name="Pdf" component={PdfScreen} />
      <AuthStack.Screen name="Istiqamah" component={IstiqamahScreens} />
      <AuthStack.Screen name="Answer" component={Answer} />
      <AuthStack.Screen name="Sign-in" component={Signin} />
      <AuthStack.Screen name="Sign-up" component={Signup} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="Otp" component={Otp} />
      <AuthStack.Screen name="New-Password" component={NewPassword} />
      <CoursesStack.Screen name="CourseEpisodes" component={CourseEpisodes} />
      <CoursesStack.Screen name="ViewEpisode" component={ViewEpisode} />
      <CoursesStack.Screen name="ViewAll" component={ViewAll} />
      <CoursesStack.Screen name="VideoScreen" component={VideoScreen} />
      <AuthStack.Screen
        name="My-Favourite-Courses"
        component={MyFavouritesCourses}
      />
      <AuthStack.Screen name="New Favourite" component={CreateNewFavourite} />
    </AuthStack.Navigator>
  );
}

function IstiqamahScreens() {
  return (
    <IstiqamahStack.Navigator screenOptions={{headerShown: false}}>
      <IstiqamahStack.Screen name="Istiqamah-full" component={MyIstiqamah} />
      <IstiqamahStack.Screen
        name="Schedule-Ibadah"
        component={ScheduleIbadah}
      />
      <IstiqamahStack.Screen name="Edit-Ibadah" component={EditIbadah} />
    </IstiqamahStack.Navigator>
  );
}

function CoursesScreens() {
  return (
    <CoursesStack.Navigator screenOptions={{headerShown: false}}>
      <CoursesStack.Screen name="Courses1" component={Cources} />
      <CoursesStack.Screen name="CoursesDetails" component={CoursesDetails} />
      <CoursesStack.Screen name="Lesson-Details" component={LessonDetails} />
      <CoursesStack.Screen name="CourseEpisodes" component={CourseEpisodes} />
      <CoursesStack.Screen name="ViewEpisode" component={ViewEpisode} />
    </CoursesStack.Navigator>
  );
}
function SearchScreen() {
  return (
    <SearchStack.Navigator screenOptions={{headerShown: false}}>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
}

function JourneyScreens() {
  return (
    <JourneyStack.Navigator screenOptions={{headerShown: false}}>
      <JourneyStack.Screen name="My Journey1" component={MyJourney} />
      <JourneyStack.Screen name="Quiz" component={QuizScreen} />
      <JourneyStack.Screen name="Start Quiz" component={StartQuiz} />
      <MoreStack.Screen name="Last Screen" component={LastScreen} />
    </JourneyStack.Navigator>
  );
}

function ShaikhScreens() {
  return (
    <ShaikhStack.Navigator screenOptions={{headerShown: false}}>
      <ShaikhStack.Screen name="AskSheikh1" component={AskSheikh} />
      <ShaikhStack.Screen name="Shayookh-Details" component={ShayookhDetails} />
      <ShaikhStack.Screen
        name="Ask-Sheikh-Question"
        component={AskSheikhQuestion}
      />
      <ShaikhStack.Screen
        name="AskASheikhQuestions"
        component={AskAShiekhQuestions}
      />
      <ShaikhStack.Screen
        name="askASheikh_Discussions"
        component={QuestionsDetails}
      />
    </ShaikhStack.Navigator>
  );
}

function MoreScreensStack() {
  return (
    <MoreStack.Navigator screenOptions={{headerShown: false}}>
      <MoreStack.Screen name="More1" component={MoreScreens} />
      <MoreStack.Screen name="Quiz" component={QuizScreen} />
      <MoreStack.Screen name="Settings" component={SettingsScreen} />
    </MoreStack.Navigator>
  );
}

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const Icon = route.params.Icon;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <SafeAreaView key={index} style={{flex: 1}}>
            <TouchableOpacity
              activeOpacity={0.6}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                paddingVertical: 10,
                backgroundColor: COLORS.white,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon fill={isFocused ? COLORS.sky_blue : theme.ui.gray2} />

              <Text
                numberOfLines={1}
                style={{
                  color: isFocused ? COLORS.sky_blue : COLORS.grey,
                  marginTop: 2,
                  fontSize: 12,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          </SafeAreaView>
        );
      })}
    </View>
  );
}

function MyTabs() {
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, [dispatch]);

  const getData = async () => {
    return await Promise.all(
      dispatch(getCategories()),
      dispatch(getShayookh()),
    );
  };

  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          color: COLORS.sky_blue,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        initialParams={{
          Icon: HomeSvg,
        }}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Courses"
        component={CoursesScreens}
        initialParams={{
          Icon: CoursesSvg,
        }}
        options={{
          tabBarLabel: 'Courses',
        }}
      />
      <Tab.Screen
        name="AskSheikh"
        component={ShaikhScreens}
        initialParams={{
          Icon: SheikhSvg,
        }}
        options={{
          tabBarLabel: 'Q&A',
        }}
      />

      <Tab.Screen
        name="My Journey"
        component={JourneyScreens}
        initialParams={{
          Icon: JourneySvg,
        }}
        options={{
          tabBarLabel: 'Journey',
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreensStack}
        initialParams={{
          Icon: MoreSvg,
        }}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

function Route() {
  const dispatch = useDispatch();
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Main" component={AuthScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
