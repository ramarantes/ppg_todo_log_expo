import React from 'react'
import {connect} from 'react-redux'
import TodoListItem from './TodoListItem'
import {toggleTodo, dropTodo}  from '../../redux/actions/Index'
import { Text, View } from 'react-native';

class TodoList extends React.Component {
    render(){
        return <View>
            {this.props.todos.map(p =>
                  <TodoListItem key={p.id} obj={p} toggle={this.props.vaiteia} drop={this.props.drop}/>
                 )}<Text>opa</Text>
        </View>
    }
}

const mapStateToProps = ({todos}) => ({
    todos
})
const mapDispatchToProps = dispatch => ({
    vaiteia: e => dispatch(toggleTodo(e)),
    drop: e => dispatch(dropTodo(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)