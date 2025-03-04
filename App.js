import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import screens from Components folder
import HomeScreen from "./Components/HomeScreen";
import LoginScreen from "./Components/LoginScreen";
import ReportScreen from "./Components/ReportScreen";
import SignUpScreen from "./Components/SignUpScreen";
import AdoptScreen from "./Components/AdoptScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Adopt" component={AdoptScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
