import React from 'react'
import { Text, View } from 'react-native';

export default ({ obj, toggle, drop }) => {
     const style = {fontSize: obj.completed ? 50 : 20};

    // const StyledTd = styled.td`
    //     cursor: pointer;
    // `
    // const cursorStyle = {
    //     cursor: 'pointer'
    // }

    return <Text style={style} onPress={() => toggle(obj.id)}>{obj.id} - {obj.todo}</Text>
    // return <tr style={style} >
    //         <StyledTd scope="row" onClick={() => toggle(obj.id)}>
    //         <input type="checkbox"  aria-label="Checkbox for following text input" checked={obj.completed} onChange={() => console.log('checked')} />
    //         </StyledTd>
    //         <StyledTd onClick={() => toggle(obj.id)}>{obj.todo}</StyledTd>
    //         <td onClick={() => drop(obj.id)}><FontAwesomeIcon icon="trash" style={cursorStyle}/> </td>
    //     </tr>
}