import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      color: this.props.todo.completed ? 'grey' : '#000000'
    }
  }

  render() {
    const {id, title, completed} = this.props.todo;
    return (
      <div style={{width: "100%", padding: '5px 0'}}>
        <div class="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text" style={{marginRight: "-3px", zIndex: "5"}}>
              <input type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this, id)} />
            </div>
          </div>
          <input className="form-control" name="title" placeholder="Add Todo" value={title} style={this.getStyle()}/>
          <div className="input-group-append">
            <button  className="btn btn-danger" onClick={this.props.deleteTodo.bind(this, id)}>X</button>
          </div>
        </div>
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
