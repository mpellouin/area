import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from './Style';

import Login from './src/view/signFiles/login/Login';
import Register from './src/view/signFiles/register/Register';
import ForgotPassword from './src/view/signFiles/forgotPasswd/ForgotPassword';
import ResetPassword from './src/view/signFiles/resetPasswd/ResetPassword';

import Homepage from './src/view/Homepage';
import Create from './src/view/Create';
import Activity from './src/view/Activity';
import User from './src/view/User/User';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const isLoggedIn = 'undefined';

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.backgroundD : Colors.backgroundW}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{
                animation: 'none',
              }}
            />
            <Stack.Screen
              name="Create"
              component={Create}
              options={{
                animation: 'none',
              }}
            />
            <Stack.Screen
              name="Activity"
              component={Activity}
              options={{
                animation: 'none',
              }}
            />
            <Stack.Screen
              name="User"
              component={User}
              options={{
                animation: 'none',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
