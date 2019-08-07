// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo'

import { StyledList } from '../../StyledComp'

const TodoList = ({ todoData, toggleItem, searchData }) => {
    
    if (searchData === null) { 
        if (todoData.length === 0) return <p>Add a task to your todo list!</p>
        else return (
        <StyledList>
            {todoData.map(item => (
                <Todo key={item.id} item={item} toggleItem={toggleItem}/>
            ))}
        </StyledList>
        )
    }
    else return (
        <StyledList>
            {searchData.map(item => (
                <Todo key={item.id} item={item} toggleItem={toggleItem}/>
            ))}
        </StyledList>
    )
}

export default TodoList