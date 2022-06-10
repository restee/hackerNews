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
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import { NewsList } from "./screens/NewsList";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={Colors.lighter}>
        <StatusBar barStyle={"dark-content"} />
        <NewsList />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
