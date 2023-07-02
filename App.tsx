import React, { useState, useEffect } from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";
import Main from "./src/components/login/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "./src/components/singUp/Main";
import MainScreen from "./src/components/home/Main";
import "react-native-gesture-handler";
import EditProfile from "./src/components/editProfile/Main";
import SplashScreen from "./src/components/splashScreen/Main";
import Notification from "./src/components/notification/Main";
import News from "./src/components/news/News";
import Treatment from "./src/components/treatments/Main";
import PaymentHistoryScreen from "./src/components/payments/Home";
import AboutScreen from "./src/components/About/Main";
import AppointmentDetails from "./src/components/appointmentDetails/Main";

const Stack = createStackNavigator();

export default function App(): JSX.Element {
  const [isSplashAnimationFinished, setIsSplashAnimationFinished] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const splashAnimation = Animated.timing(new Animated.Value(1), {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    splashAnimation.start(() => {
      setIsSplashAnimationFinished(true);
      setTimeout(() => {
        setIsAppReady(true);
      }, 500);
    });

    return () => {
      splashAnimation.stop();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {!isAppReady && <SplashScreen />}

      {isAppReady && (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Main} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
            <Stack.Screen name="News" component={News} options={{ headerShown: false }} />
            <Stack.Screen name="Treatments" component={Treatment} options={{ headerShown: false }} />
            <Stack.Screen
              name="PaymentHistory"
              component={PaymentHistoryScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Main} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
            <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
            
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
}
