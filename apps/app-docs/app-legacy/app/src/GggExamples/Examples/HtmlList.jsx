import React from "react";
// this renders an HTML list:
export default function HtmlList(props) {
  function Item(props) {
    return <li>{props.message}</li>;
  }
  function ToDoList() {
    const todoList = ["finish doc", "submit pr", "nag dan to review"];
    return (
      <ul>
        {todoList.map(message => <Item key={message} message={message} />)}
      </ul>
    );
  }

  return <ToDoList />;
}
