import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () =>{
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed?
            'line-through':'none'
        }
        // if (this.props.todo.completed) {
        //     return{
        //         textDecoration: 'line-through'
        //     }
        // } else {
        //     return{
        //         textDecoration: 'none'
        //     }
        // }
    }

    markComplete =(e)=>{
        console.log(this.props);
    }
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p> 
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
                {/* <input type="checkbox" onChange={this.markComplete.bind(this)}/>{' '} */}
                {title}
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.PropType = {
    addTodo: PropTypes.func.isRequired
  }
//PropTypes

  const btnStyle ={
      background: '#ff0000',
      color: '#fff',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '50%',
      corsor: 'pointer',
      float: 'right'
  }
  
export default TodoItem