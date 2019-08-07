import React from 'react'

import { StyledTodoForm, TodoFormButtonContainer } from '../../StyledComp'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            item: ''
        }
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    addNewTodo = event => {
        event.preventDefault()
        if (this.state.item !== '') {
            this.props.addItem(this.state.item)
            this.addInput.value = ''
        }
    }

    clearFinished = event => {
        event.preventDefault()
        this.props.clearCompItems()
    }

    render() {
        return (
            <StyledTodoForm>
                <input
                    type='text'
                    placeholder='Add new task:'
                    value={this.item}
                    name='item'
                    onChange={this.handleChanges}
                    ref={el => {this.addInput = el}}
                />
                <TodoFormButtonContainer>
                    <button onClick={this.addNewTodo}>Add Todo</button>
                    <button onClick={this.clearFinished}>Clear Completed</button>
                </TodoFormButtonContainer>
            </StyledTodoForm>
        )
    }
}

export default TodoForm