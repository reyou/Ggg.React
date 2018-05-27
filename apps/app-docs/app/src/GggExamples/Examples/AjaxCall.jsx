import React from "react";
import $ from "jquery";
export default class AjaxCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
  fetchPosts() {
    // https://jsonplaceholder.typicode.com/posts
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

    let promise = new Promise((resolve, reject) => {
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET"
      })
        .then(resolve)
        .catch(reject);
    });
    return promise;
  }
  fetchComments(success, error) {
    // https://jsonplaceholder.typicode.com/comments
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
    let promise = new Promise((resolve, reject) => {
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/comments",
        method: "GET"
      })
        .then(resolve)
        .catch(reject);
    });
    return promise;
  }
  componentDidMount() {
    this.fetchPosts().then(response => {
      this.setState({
        posts: response
      });
    });
    this.fetchComments().then(response => {
      this.setState({
        comments: response
      });
    });
  }
  componentWillUnmount() {
    console.log("stateUpdatesFun", "componentWillUnmount");
  }
  render() {
    return (
      <div>
        <div>
          <a href="https://jsonplaceholder.typicode.com">
            https://jsonplaceholder.typicode.com
          </a>
        </div>
        <div>
          <span>posts.length: </span>
          <b>{this.state.posts.length}</b>
        </div>
        <div>
          <span>comments.length: </span>
          <b>{this.state.comments.length}</b>
        </div>
      </div>
    );
  }
}
