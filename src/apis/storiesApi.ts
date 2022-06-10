import { Story, User } from "../types/stories.type";
import axios from "./axiosSetup";

export const StoriesApi = {
  getTopStories: async (payload: any, errorHandler = () => {}) => {
    return await axios.get("/v0/topstories.json?print=pretty").catch(errorHandler);
  },
  getStoryItemById: async (payload: { id: number }, errorHandler = () => {}) => {
    return await axios.get<Story>(`/v0/item/${payload.id}.json`).catch(errorHandler);
  },
  getUserById: async (payload: { id: string }, errorHandler = () => {}) => {
    return await axios.get<User>(`/v0/user/${payload.id}.json`).catch(errorHandler);
  }
};
