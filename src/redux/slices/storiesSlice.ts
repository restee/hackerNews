import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StoriesApi } from "../../apis/storiesApi";
import { Story } from "../../types/stories.type";
import { getRandom } from "../../utils/generalUtils";

export const fetchFullStories = createAsyncThunk("topics/fetchTopics", async (thunkAPI) => {
  const news: any = await StoriesApi.getTopStories({});

  const randomedNews = getRandom(news as number[], 10, true);

  const storyItemApiCalls = randomedNews.map((storyId: number) => {
    return StoriesApi.getStoryItemById({ id: storyId });
  });

  const storyItems: any = await Promise.all(storyItemApiCalls);

  const sortedStoryItems: Story[] = storyItems.sort((s1: Story, s2: Story) => s1.score - s2.score);

  const userApiCalls = sortedStoryItems.map((story: any) => {
    return StoriesApi.getUserById({ id: story.by });
  });

  const users = await Promise.all(userApiCalls);

  users.forEach((user: any, index: number) => {
    if (sortedStoryItems[index]) {
      sortedStoryItems[index].user = user;
    }
  });

  return sortedStoryItems;
});

const initialState: { stories: Story[]; loading: boolean } = {
  stories: [],
  loading: false
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFullStories.pending, (state, { payload }) => {
      state.stories = [];
      state.loading = true;
    });
    builder.addCase(fetchFullStories.fulfilled, (state, { payload }) => {
      state.stories = payload;
      state.loading = false;
    });
    builder.addCase(fetchFullStories.rejected, (state, { payload }) => {
      state.stories = [];
      state.loading = false;
    });
  }
});

export default newsSlice.reducer;
