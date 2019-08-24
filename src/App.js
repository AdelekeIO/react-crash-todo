import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
// import uuid from 'uuid'
import axios from 'axios'


class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.setState({todos: res.data})
    )
  }
// Toggle Complete
  markComplete = (id)=>{
    this.setState({todos: this.state.todos.map(todo =>{
      if (todo.id ===id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  //Delete Todo
  delTodo = (id) =>{
    axios.get(`http://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState(
      {todos:[...this.state.todos.filter(todo => todo.id !==id)]
      }))
    
  }
  

// Add Todo
addTodo  =(title)=>{
//  console.log(title);
// const newTodo = {
//   // id: uuid.v4(),
//   title,
//   completed: false
// }
//  this.setState({todos: [...this.state.todos, newTodo]})
 
axios.post('http://jsonplaceholder.typicode.com/todos',{
    title,
  completed: false
})
.then(res => this.setState({
  todos: [...this.state.todos, res.data]
}))
}
render(){
    return (
      <Router>
    <Route exact path="/" render={props =>(
    <React.Fragment>
    <div className="App">
        <Header />
      <AddTodo addTodo={this.addTodo}/>
       <Todos  todos={this.state.todos} markComplete={this.markComplete}
       delTodo={this.delTodo}
       />
    </div>
    </React.Fragment>
    )}/>
    
    <Route path="/about" component={About}/>
    </Router>
  );
}
}

export default App;
