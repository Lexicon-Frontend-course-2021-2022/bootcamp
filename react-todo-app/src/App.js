/******************************************************************************
 @file App.js
 @brief Class App

 Let's try to tag this source and see if we can wrangle Doxygen to generate a
 decent documentation for JavaScript. That would be cool!
 *****************************************************************************/
import React from 'react';
import './App.css';
import axios from 'axios';

import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';

/******************************************************************************
 @brief App Class
 *****************************************************************************/
class App extends React.Component {

  /** @brief Component state */
  state = {
    todos: [],

  };

  /** @brief Lifecycle */
  componentDidMount() {
    axios.get
      (
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
      )
      .then(res => {
        this.setState
          (
            {
              todos: res.data
            }
          )
      }
      );
  }

  /** @brief Add Todo */
  addTodo = title => {
    axios.post
      (
        'https://jsonplaceholder.typicode.com/todos',
        {
          title, completed: false
        }
      )
      .then(res => {
        this.setState(
          {
            todos:
              [
                ...this.state.todos,
                res.data
              ]
          });
      });
  };

  /** @brief Toggle completed state */
  toggleCompleted = id => {

    this.setState
      (
        {
          todos: this.state.todos.map
            (
              todo => {
                if (todo.id === id) {
                  todo.completed = !todo.completed;
                }
                return todo;
              }
            )
        }
      )

  };

  /** @brief Delete todo */
  deleteTodo = id => {
    axios.delete
      (
        'https://jsonplaceholder.typicode.com/todos/' + id
      )
      .then(res => {
        this.setState
          (
            {
              todos: [...this.state.todos.filter(todo => todo.id !== id)]
            }
          )
      });
  }

  /** @brief Render component */
  render() {
    return (
      <div className="App">
        <div className="container">

          <Todos
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
            deleteTodo={this.deleteTodo}
          />

          <AddTodo
            addTodo={this.addTodo}
          />

        </div>
      </div>
    );

  }

};

export default App;
