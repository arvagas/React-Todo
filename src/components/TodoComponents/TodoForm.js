import React from 'react'

import { StyledForm, FormButtonContainer } from '../../StyledComp'

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
        this.props.addItem(this.state.item)
        this.addInput.value = ''
    }

    clearFinished = event => {
        event.preventDefault()
        this.props.clearCompItems()
    }

    render() {
        return (
            <StyledForm>
                <input
                    type='text'
                    placeholder='Add new task:'
                    value={this.item}
                    name='item'
                    onChange={this.handleChanges}
                    ref={el => {this.addInput = el}}
                />
                <FormButtonContainer>
                    <button onClick={this.addNewTodo}>Add Todo</button>
                    <button onClick={this.clearFinished}>Clear Completed</button>
                </FormButtonContainer>
            </StyledForm>
        )
    }
}

export default TodoForm