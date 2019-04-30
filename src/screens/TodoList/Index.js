import React from 'react'
import {connect} from 'react-redux'
import TodoListItem from './TodoListItem'
import {toggleTodo, dropTodo,loadTodoBase}  from '../../redux/actions/Index'
import { Text, View, Button } from 'react-native';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.props.loadInitialData();
        console.log('todolist started yahoo')
    }
    render(){
        return <View>
            {this.props.todos.map(p =>
                  <TodoListItem key={p.id} obj={p} toggle={this.props.vaiteia} drop={this.props.drop}/>
                 )}<Text>opaz</Text>
                 {/* <Button
                title="Go to Form"
                onPress={() => this.props.navigation.navigate('TodoForm')}
                /> */}
        </View>
    }
}

const mapStateToProps = ({todos}) => ({
    todos
})
const mapDispatchToProps = dispatch => ({
    vaiteia: e => dispatch(toggleTodo(e)),
    drop: e => dispatch(dropTodo(e)),
    loadInitialData: () => dispatch(loadTodoBase())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)