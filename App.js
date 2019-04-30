import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider } from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './src/redux/reducers'
import TodoList from './src/screens/TodoList/Index'

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app.</Text>
          <TodoList />
        </View>
      </Provider>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
