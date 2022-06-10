import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchFullStories } from "../redux/slices/storiesSlice";
import { AppDispatch } from "../redux/store";
import { Story } from "../types/stories.type";
import { NewsItem } from "./comp/NewsItem";

export const NewsList = () => {
  const story: any = useSelector((state: any) => state?.story);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch(fetchFullStories());
  };

  return (
    <ScrollView>
      <Text style={styles.headerText}>Hacker News Top Stories</Text>

      {story.loading && <ActivityIndicator />}
      {!story.loading &&
        story?.stories?.length > 0 &&
        story.stories.map((story: Story) => <NewsItem item={story} key={story.id} />)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerText: { width: "100%", textAlign: "center", fontSize: 25 }
});
