import React from 'react'
import { addtodo } from '../actions'
import {connect} from 'react-redux'

class TodoForm extends React.Component{


    render(){
        return <div>
            <form onSubmit={e => {
                e.preventDefault(); 
                this.props.addtodo(e); 
                this.props.history.push('/');
                }}>
                <div className="form-group">
                    <label htmlFor="todoText">Descrição</label>
                    <input type="text" id="todoText" className="form-control"/>
                    <small id="help" className="form-text text-muted">Insira aqui sua atividade</small>
                    <input type="submit" value="salvar" className="btn btn-primary"/>
                </div>
            </form>

        </div>
    }
}
const mapDispatchToProps = dispatch => ({
    addtodo: e => dispatch(addtodo(e.target))
});

export default connect(null,mapDispatchToProps)(TodoForm);