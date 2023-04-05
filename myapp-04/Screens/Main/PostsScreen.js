import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const PostsScreen = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
          style={ styles.loginLink }
          activeOpacity={0.5} 
        >
          <Feather name="log-out" size={24} color="black" />
        </TouchableOpacity>     
        <Text>PostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PostsScreen;