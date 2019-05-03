import React from 'react'
import {ListItem,Text, CheckBox} from 'native-base'

export default ({ obj, toggle, drop }) => {
    return <ListItem onPress={() => toggle(obj.id)} >
        <CheckBox checked={obj.completed} onPress={() => toggle(obj.id)} />
        <Text>{obj.id} - {obj.todo}</Text>
    </ListItem>
}