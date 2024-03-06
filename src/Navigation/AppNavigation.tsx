import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from '../Shared/theme';
import Welcome from '../Welcome';

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
          component={Welcome}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
