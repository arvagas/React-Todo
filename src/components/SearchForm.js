import React from 'react'

import { StyledSearchForm } from '../StyledComp'

class SearchForm extends React.Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    searchList = event => {
        event.preventDefault()
        this.props.searchItems(this.state.search)
    }

    render() {
        return (
            <StyledSearchForm onSubmit={this.searchList}>
                <input
                    type='text'
                    placeholder='Search list for...'
                    value={this.search}
                    name='search'
                    onChange={this.handleChanges}
                />
                <button type="submit">Search</button>
            </StyledSearchForm>
        )
    }
}

export default SearchForm