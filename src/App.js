import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import Axios from 'axios'

import './App.css';

class App extends Component {

  state={
    todos: []
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos').then(res => this.setState({ todos: res.data}))
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
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => 
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  }

  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos',{title, completed: false}).then(res => 
    this.setState({ todos: [...this.state.todos, res.data]}))
  }

  render() {
    return (
      <Router>
        <div className="container">
        <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
                <Route exact path="/" render={props =>(
                  <React.Fragment>
                    <div style={{paddingTop: "30px"}}>
                      <AddTodo addTodo={this.addTodo} />
                    </div>
                    <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
                    <br /><br />
                  </React.Fragment>
                )} />
                <Route path="/about" component={About} />
            </div>
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
