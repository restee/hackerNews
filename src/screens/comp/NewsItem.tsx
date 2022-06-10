import { Story } from "../../types/stories.type";
import React from "react";
import { Text, View, TouchableOpacity, Linking, StyleSheet } from "react-native";

export const NewsItem = ({ item }: { item: Story }) => {
  const openUrl = () => {
    if (item.url) Linking.openURL(item.url);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text>Date: {new Date(item.time).toLocaleString()}</Text>
          <Text>Score: {item.score}</Text>
          <Text>
            By: {item.user.id} ({item.user.karma} karma)
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={openUrl}>
            <Text style={styles.buttonText}>Read</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#d4d3d4",
    borderRadius: 5
  },
  infoContainer: { padding: 5, width: "80%" },
  titleText: { fontWeight: "bold", fontSize: 18 },
  buttonContainer: {
    width: "20%"
  },
  button: {
    backgroundColor: "green",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  buttonText: { color: "white" }
});
