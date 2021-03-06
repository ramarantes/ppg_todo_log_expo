import React from 'react'
import { addtodo } from '../../redux/actions/Index'
import {connect} from 'react-redux'
import { Text, View } from 'react-native';
import {Font} from 'expo'
import {Ionicons} from '@expo/vector-icons'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

class TodoForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {todo:''}

    }

    async componentDidMount(){
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
          });
    }

    render(){
        return <Container>
        <Header />
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>{this.state.todo}</Label>
              <Input onChangeText={todo => this.setState({todo})}/>
            </Item>
            <Button onPress={() => this.props.addtodo(this.state.todo)}>
            <Text>Add Todo</Text>
          </Button >
          </Form>
        </Content>
      </Container>
    }
}
const mapDispatchToProps = dispatch => ({
    addtodo: e => dispatch(addtodo(e))
});

export default connect(null,mapDispatchToProps)(TodoForm);