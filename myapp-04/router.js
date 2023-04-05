import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from "./Screens/Auth/LoginScreen";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import PostsScreen from "./Screens/Main/PostsScreen";
import CreatePostsScreen from "./Screens/Main/CreatePostsScreen";
import CommentsScreen from "./Screens/Main/CommentsScreen";
import ProfileScreen from "./Screens/Main/ProfileScreen";
import MapScreen from "./Screens/Main/MapScreen";
import Home from "./Screens/Main/Home";

// icons import
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: true,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown:  true,
          }}
          name="Register"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: true,
          }}
          name="Home"
          component={Home}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator tabBarOptions={{ showLabel: true }}>
      <MainTab.Screen
        // options={{
        //   tabBarIcon: ({ focused, size, color }) => (
        //     <MaterialCommunityIcons
        //       name="postage-stamp"
        //       size={size}
        //       color={color}
        //     />
        //   ),
        // }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        // options={{
        //   tabBarIcon: ({ focused, size, color }) => (
        //     <AntDesign name="pluscircleo" size={35} color={color} />
        //   ),
        // }}
        name="Create"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        // options={{
        //   tabBarIcon: ({ focused, size, color }) => (
        //     <MaterialCommunityIcons
        //       name="face-profile"
        //       size={size}
        //       color={color}
        //     />
        //   ),
        // }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
