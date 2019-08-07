import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    border: solid lightgrey 1px;
    box-shadow: 0 1px 1px grey;
    padding: 10px;
    margin: 0 5%;
`

export const StyledList = styled.div`
    text-align: center;
`
// @@@@@@@@@@ Todo Form Styles @@@@@@@@@@

export const StyledTodoForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
`

export const TodoFormButtonContainer = styled.div`
    margin: 5px;
    
    button {
        margin: 5px;
    }
`

// @@@@@@@@@@ Search Form Styles @@@@@@@@@@

export const StyledSearchForm = styled.form`
    margin-bottom: 1rem;

    button {
        margin-left: 1rem;
    }
`