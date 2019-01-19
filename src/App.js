import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos'
import './App.css';

class App extends Component {
state={
  todos: [
    {
      id: 1,
      title: 'Meet someone',
      completed: false
    },
    {
      id: 2,
      title: 'Meet someone else',
      completed: true
    },
    {
      id: 3,
      title: 'Meet someone new',
      completed: false
    },
  ]
}

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed=!todo.completed
      }
      return todo;
    }) });
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
