import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyAzCXzTW4c73bIH-3BtL3l39yol2Xz4JNA",
  authDomain: "memoapp-32e5f.firebaseapp.com",
  projectId: "memoapp-32e5f",
  storageBucket: "memoapp-32e5f.appspot.com",
  messagingSenderId: "897975579215",
  appId: "1:897975579215:web:9e910514ebc9a01c83703a"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='SignUp'
          screenOptions={{
            headerStyle: { backgroundColor: '#467FD3'},
            headerTitleStyle: { color: '#FFF'},
            headerTitle: 'Memo App',
            headerTintColor: '#fff',
            headerBackTitle: 'Back',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen name="MemoList" component={MemoListScreen} />
          <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
          <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
          <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
          <Stack.Screen
            name="LogIn" 
            component={LogInScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }} 
          />
          <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen} 
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
