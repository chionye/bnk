import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import SplashScreen from "./Screen/SplashScreen";
import DrawerNavigationRoutes from "./Screen/DrawerNavigationRoutes";

const Stack = createStackNavigator();

const Auth = () => {
    return (
        <Stack.Navigator initialRouteName='LoginScreen'>
            <Stack.Screen 
                name='LoginScreen'
                component={LoginScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen'>
          {/* SplashScreen which will come once for 5 Seconds */}
          <Stack.Screen
            name='SplashScreen'
            component={SplashScreen}
            // Hiding header for Splash Screen
            options={{ headerShown: false }}
          />
          {/* Auth Navigator: Include Login and Signup */}
          <Stack.Screen
            name='Auth'
            component={Auth}
            options={{ headerShown: false }}
          />
          {/* Navigation Drawer as a landing page */}
          <Stack.Screen
            name='DrawerNavigationRoutes'
            component={DrawerNavigationRoutes}
            // Hiding header for Navigation Drawer
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}