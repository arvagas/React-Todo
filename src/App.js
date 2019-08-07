import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import SearchForm from './components/SearchForm'

// import { dummyData } from './DummyData'

import { StyledContainer } from './StyledComp'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      // todoData: dummyData,
      todoData: [],
      searchData: null,
    }
  }

  componentDidMount() {
    if (JSON.parse(window.localStorage.getItem('todoList')) !== null) {
      this.setState({
        todoData: JSON.parse(window.localStorage.getItem('todoList'))
      })
    }    
  }

  componentDidUpdate() {
    window.localStorage.setItem('todoList', JSON.stringify(this.state.todoData))
  }

  toggleItem = id => {
    this.setState({
      todoData: this.state.todoData.map(item => {
        if (item.id === id) {
          if (item.completed === false) return {...item, completed: true}
          else return {...item, completed: false}
        }
        else return item
      }),
    })
    if (this.state.searchData !== null) {
      this.setState({
        searchData: this.state.searchData.map(item => {
          if (item.id === id) {
            if (item.completed === false) return {...item, completed: true}
            else return {...item, completed: false}
          }
          else return item
        })
      })
    }
  }

  addItem = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todoData: [...this.state.todoData, newTask]
    })
  }

  clearCompItems = () => {
    this.setState({
      todoData: this.state.todoData.filter(item => !item.completed)
    })
    if (this.state.searchData !== null) {
      this.setState({
        searchData: this.state.searchData.filter(item => !item.completed)
      })
    }
  }

  searchItems = searchName => {
    if (searchName === '') this.setState({searchData: null})
    else this.setState({
      searchData: this.state.todoData.filter(item => {
        if (item.task.toLowerCase().includes(searchName.toLowerCase())) return [...this.state.todoData, item]
      })
    })
  }

  render() {

    return (
      <StyledContainer>
        <h2>Welcome to your Todo App!</h2>
        <SearchForm searchItems={this.searchItems}/>
        <TodoList todoData={this.state.todoData} toggleItem={this.toggleItem} searchData={this.state.searchData}/>
        <TodoForm addItem={this.addItem} clearCompItems={this.clearCompItems}/>
      </StyledContainer>
    );
  }
}

export default App;
