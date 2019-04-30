import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider } from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './src/redux/reducers'
import TodoList from './src/screens/TodoList/Index'
import TodoForm from './src/screens/TodoForm/Index'
import thunk from 'redux-thunk'
import {createStackNavigator, createAppContainer} from 'react-navigation'

const store = createStore(rootReducer,applyMiddleware(thunk));

const MainNavigator = createStackNavigator({
  Home:{screen:TodoList}
  ,  TodoForm:{screen:TodoForm}
},
  {
    initialRouteName: "Home"
  }
);

const App2 = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App2 />
      </Provider>
    );
  }
}
