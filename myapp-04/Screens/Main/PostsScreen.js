import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
          style={ styles.loginLink }
          activeOpacity={0.5} 
        >
          <Text style={ styles.loginLinkText }>
            logout
          </Text>
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