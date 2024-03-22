import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from '../Shared/theme';
import WelcomeScreen from '../Screen/Welcome';
import HomeScreen from '../Screen/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import CategoryScreen from '../Screen/Category';
import EventScreen from '../Screen/Event';
import CATSELECTED from '../../assets/images/cat_select.svg';
import CATUNSELECTED from '../../assets/images/cat_unselect.svg';
import CONTACTUS from '../../assets/images/contact_us.svg';
import DELIVERY from '../../assets/images/delivery.svg';
import CONTACTUSSELECTED from '../../assets/images/contactus_selected.svg';
import DELIVERYSELECTED from '../../assets/images/delivery_selected.svg';
import CategoryMenuDetailScreen from '../Screen/CategoryMenuDetail';
import EventDetailScreen from '../Screen/EventDetail';
import TableReservationScreen from '../Screen/TableReservation';
import FoodPickUpDeliveryScreen from '../Screen/FoodPickUpDelivery';
import NotificationScreen from '../Screen/Notification';
import InformationScreen from '../Screen/Information';
import SearchScreen from '../Screen/Search';
import ContactUs from '../Screen/ContactUs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
interface NavigationPropsType {}

const AppNavigation: React.FC<NavigationPropsType> = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: theme.color.primary,
            },
            headerTitleStyle: {
              fontWeight: 'normal',
              color: theme.color.white,
              fontSize: theme.fontSize.normal,
            },
          }}>
          <Stack.Screen
            name="Login"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Root"
            component={TabsNav}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Notification"
            component={NotificationScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Information"
            component={InformationScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const HomeStackRoot = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryMenuDetail"
        component={CategoryMenuDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const CategoryStackRoot = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryMenuDetail"
        component={CategoryMenuDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const PickupDeliveryRoot = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FoodPickUpDelivery"
        component={FoodPickUpDeliveryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TableReservation"
        component={TableReservationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const EventStackRoot = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Event"
        component={EventScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TableReservation"
        component={TableReservationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabsNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: theme.color.bottomNav,
        tabBarInactiveBackgroundColor: theme.color.bottomNav,
        tabBarActiveTintColor: theme.color.primary2,
        tabBarInactiveTintColor: theme.color.white,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.color.bottomNav,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackRoot}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CategoryStackRoot"
        component={CategoryStackRoot}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            // <FontAwesome name="concierge-bell" color={color} size={size} />
            focused ? (
              <CATSELECTED height={40} width={36} />
            ) : (
              <CATUNSELECTED height={40} width={36} />
            ),
        }}
      />
      <Tab.Screen
        name="EventRoot"
        component={EventStackRoot}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="party-popper"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PickupDeliveryRoot"
        component={PickupDeliveryRoot}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            !focused ? <DELIVERY /> : <DELIVERYSELECTED />,
        }}
      />
      <Tab.Screen
        name="CONTACTUS"
        component={ContactUs}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            !focused ? <CONTACTUS /> : <CONTACTUSSELECTED />,
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigation;
