import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from '../Shared/theme';
import WelcomeScreen from '../Screen/Welcome';
import HomeScreen from '../Screen/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Stack = createNativeStackNavigator();
interface NavigationPropsType {}

const AppNavigation: React.FC<NavigationPropsType> = () => {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
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
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home1"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="dinner-dining" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="drink" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home3"
        component={HomeScreen}
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
    </Tab.Navigator>
  );
};
export default AppNavigation;
