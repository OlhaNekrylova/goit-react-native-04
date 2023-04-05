import React from "react";
// import { Button } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather  } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from "./Screens/Auth/LoginScreen";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import PostsScreen from "./Screens/Main/PostsScreen";
import CreatePostsScreen from "./Screens/Main/CreatePostsScreen";
import CommentsScreen from "./Screens/Main/CommentsScreen";
import ProfileScreen from "./Screens/Main/ProfileScreen";
import MapScreen from "./Screens/Main/MapScreen";
import HomeScreen from "./Screens/Main/HomeScreen";

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
          component={HomeScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
<MainTab.Navigator
    tabBarOptions={{ showLabel: false }} >
    <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={24} color="black" />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="plus" size={24} color="black" />
          ),
        }}
        name="Create"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color="black" />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
</MainTab.Navigator> 




//     <MainTab.Navigator 
//     tabBarOptions={{ showLabel: false }}
//     initialRouteName="PostsScreen"
//       screenOptions={({ route: { name } }) => ({
//         tabBarIcon: ({ color }) => (
//           <Feather name={icons[name]} size={24} color={color} />
//         ),
//         tabBarStyle: {
//           width: "100%",
//           height: 83,
//           paddingTop: 9,
//           borderTopColor: "#BDBDBD",
//           borderTopWidth: 1,
//           alignItems: "center",
//         },
//         tabBarItemStyle: {
//           height: 40,
//           borderRadius: 50,
//           maxWidth: 70,
//           marginHorizontal: 5,
//         },
//         tabBarActiveBackgroundColor: "#FF6C00",
//         tabBarActiveTintColor: "#FFFFFF",
//         tabBarInactiveTintColor: "#BDBDBD",
//         tabBarShowLabel: false,
//         tabBarOptions: { style: { display: "none" } },
//       })}
//     >
//       <MainTab.Group
//       screenOptions={{
//         headerStyle: {
//           borderBottomWidth: 1,
//           borderBottomColor: "#BDBDBD",
//           backgroundColor: "#FFFFFF",
//         },
//         headerTitleStyle: {
//           // fontFamily: "Roboto-Bold",
//           fontSize: 17,
//           color: "#212121",
//         },
//         headerStatusBarHeight: 44,
//         headerTitleAlign: "center",
//       }}>
// <MainTab.Screen
//           name="Posts"
//           component={PostsScreen}
//           options={{
//             headerTitle: "Posts",
//             headerRight: () => (
//               <HeaderButton
//               name={"log-out"}
//                 onPress={() => navigation.navigate("Login")}
//               />
//             ),
//             headerRightContainerStyle: { paddingRight: 16 },
//           }}
//         />
//         <MainTab.Screen
//           name="Create"
//           component={CreatePostsScreen}
//           options={{
//             headerTitle: "Create post",
//             headerLeft: () => (
//               <HeaderButton
//               name={"arrow-left"}
//                 onPress={() => navigation.navigate("PostsScreen")}
//               />
//             ),
//             headerLeftContainerStyle: { paddingLeft: 16 },
//             tabBarStyle: { display: "none" },
//             unmountOnBlur: true,
//           }}
//         />
//       </MainTab.Group>
//       <MainTab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{ headerShown: false }}
//       />
    // </MainTab.Navigator>
  );
};
