import React from 'react'
import {connect} from 'react-redux'
import TodoListItem from './TodoListItem'
import {toggleTodo, dropTodo,loadTodoBase}  from '../../redux/actions/Index'
import { Button } from 'react-native';
import {Container, Header, Content, List} from 'native-base'

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.props.loadInitialData();
        console.log('todolist started')
    }
    render(){
        return <Container>
            <Header />
            <Content>
                <List>
            {this.props.todos.map(p =>
                  <TodoListItem key={p.id} obj={p} toggle={this.props.vaiteia} drop={this.props.drop}/>
                 )}
                 <Button
                title="Go to Form"
                onPress={() => this.props.navigation.navigate('TodoForm')}
                />
                </List>
                </Content>
        </Container>
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