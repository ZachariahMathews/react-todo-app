import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc solid',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const {id, title, completed} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this, id)} />
          { title }
          <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle={
  background: 'red',
  color:'white',
  float: 'right'
}

export default TodoItem
