import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Water Bill",
        complete: false
      },
      {
        id: 235684680,
        text: "Ggg todo",
        complete: true
      },
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });
    // 1. çıkarmak; 2. yaymak; 3. göndermek;
    // 1. to send out or give off; 2. to send or give out; 3. to dart, let fly, send out, issue out, discharge;
    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch (action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        // this.todos = this.todos.concat(action.todos);
        // component will update
        this.emit("change");
        break;
      }
    }
  }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
