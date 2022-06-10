/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { NewsList } from "./screens/NewsList";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar />
        <NewsList />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
