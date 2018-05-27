//=============================================================================
var stateUpdatesFun = function () {
    // https://facebook.github.io/react/docs/state-and-lifecycle.html
    class GggHome extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                posts: [],
                comments: []
            }
        }
        fetchPosts() {
            // https://jsonplaceholder.typicode.com/posts
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

            let promise = new Promise((resolve, reject) => {
                $.ajax({
                    url: "https://jsonplaceholder.typicode.com/posts",
                    method: "GET"
                }).then(resolve)
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
                }).then(resolve)
                    .catch(reject);
            });
            return promise;
        }
        render() {
            return <div>
                <div><a href="https://jsonplaceholder.typicode.com" target="_blank">https://jsonplaceholder.typicode.com</a></div>
                <div><span>posts.length: </span><b>{this.state.posts.length}</b></div>
                <div><span>comments.length: </span><b>{this.state.comments.length}</b></div>
            </div>
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
    }
    ReactDOM.render(<GggHome />, document.getElementById("stateUpdatesFun"));
}
//
stateUpdatesFun();
//=============================================================================
var setStateFun = function () {
    // For example, this code may fail to update the counter:
    // Because this.props and this.state may be updated asynchronously
    function setStateWrong() {
        // Wrong
        this.setState({
            counter: this.state.counter + this.props.increment,
        });
    }
    // To fix it, use a second form of setState() that accepts a function rather 
    // than an object. That function will receive the previous state as the first
    // argument, and the props at the time the update is applied as the
    // second argument:
    function setStateCorrect() {
        // Correct
        this.setState((prevState, props) => ({
            counter: prevState.counter + props.increment
        }));
    }
    // We used an arrow function above, but it also works with regular functions:
    function setStateCorrectSecond() {
        // Correct
        this.setState(function (prevState, props) {
            return {
                counter: prevState.counter + props.increment
            };
        });
    }

}
//=============================================================================
// We want to set up a timer whenever the Clock is rendered to the DOM 
// for the first time. This is called "mounting" in React.
// We also want to clear that timer whenever the DOM produced by the Clock is
// removed. This is called "unmounting" in React.
var lifecycleFun = function () {
    class Clock extends React.Component {
        constructor(props) {
            super(props);
            // The only place where you can assign this.state
            // is the constructor.
            this.state = { date: new Date() };
        }
        tick() {
            // Every second the browser calls the tick() method. Inside it, 
            // the Clock component schedules a UI update by calling setState() 
            // with an object containing the current time. 
            // React may batch multiple setState() calls into a
            // single update for performance.
            this.setState({
                date: new Date()
            });
        }
        // These methods are called "lifecycle hooks".
        componentDidMount() {
            this.timerID = setInterval(() => {
                this.tick();
            }), 1000;
        }
        // These methods are called "lifecycle hooks".
        componentWillUnmount() {
            clearInterval(this.timerID);
        }
        render() {
            return (
                <div>
                    <div>The only place where you can assign
                        this.state is the constructor.</div>
                    <div>componentDidMount</div>
                    <div>componentWillUnmount</div>
                    <div>It is {this.state.date.toLocaleTimeString()}.</div>
                </div>
            );
        }
    }
    ReactDOM.render(<Clock />, document.getElementById('lifecycleFun'));
}
// 
lifecycleFun();
//=============================================================================
var clockLooksFun = function () {
    // State is similar to props, but it is private and fully
    // controlled by the component.
    // Clock is now defined as a class rather than a function.
    // This lets us use additional features such as local state 
    // and lifecycle hooks.
    class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                date: new Date()
            }
        }
        render() {
            return (
                <div>
                    <div>clockLooksFun!</div>
                    <div>It is {this.state.date.toLocaleTimeString()}.</div>
                </div>
            );
        }
    }
    function tick() {
        ReactDOM.render(
            <Clock />,
            document.getElementById('clockLooksFun')
        );
    }
    setInterval(tick, 1000);
}
//
clockLooksFun();
//=============================================================================
var impureFunctionFun = function () {
    // React is pretty flexible but it has a single strict rule:
    // All React components must act like pure functions with
    // respect to their props.

    // valid react method
    function sum(a, b) {
        return a + b;
    }
    // this function is impure because it changes its own input
    function withdraw(account, amount) {
        account.total -= amount;
    }
}
// impureFunctionFun();
//=============================================================================
var extractingComponentsFun = function () {
    function UserInfo(props) {
        return (
            <div className="UserInfo">
                <Avatar user={props.user} />
                <div className="UserInfo-name">
                    {props.user.name}
                </div>
            </div>
        );
    }
    function Avatar(props) {
        return (
            <img className="Avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
            />
        );
    }
    function Comment(props) {
        return (
            <div className="Comment">
                <UserInfo user={props.author} />
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        );
    }
}
 // extractingComponentsFun();
//=============================================================================
var composingComponentsFun = function () {
    function Welcome(props) {
        return <li>Hello, {props.name}</li>;
    }
    function App() {
        return (
            <div>
                <ol>
                    <Welcome name="Sara" />
                    <Welcome name="Cahal" />
                    <Welcome name="Edite" />
                </ol>
            </div>
        );
    }
    ReactDOM.render(<App />, document.getElementById("composingComponentsFun"));
}
//
composingComponentsFun();
//=============================================================================
// https://facebook.github.io/react/docs/components-and-props.html
// Always start component names with a capital letter.
// For example, <div /> represents a DOM tag, but <Welcome /> represents a 
// component and requires Welcome to be in scope.
let componentFun = function () {
    const element = <div />;
    function Welcome(props) {
        return <div>Hello, {props.name}</div>;
    }
    class WelcomeCom extends React.Component {
        render() {
            return <div>Hello, {this.props.name}</div>;
        }
    }
    const elementWelcome = <WelcomeCom name="Sara" />;
    ReactDOM.render(elementWelcome, document.getElementById("componentFun"));
}
//
componentFun();
//=============================================================================
let tickingClockFun = function () {
    function tick() {
        const element = (
            <div>
                <div>It is {new Date().toLocaleTimeString()}.</div>
            </div>
        );
        ReactDOM.render(
            element,
            document.getElementById('tickingClockFun')
        );
    }
    setInterval(tick, 1000);
}
//
tickingClockFun();
//=============================================================================
// React elements are immutable. Once you create an element, you can't change
// its children or attributes. An element is like a single frame in a 
// movie: it represents the UI at a certain point in time.
//=============================================================================
// Applications built with just React usually have a single root DOM node.
// If you are integrating React into an existing app, you may have as many
// isolated root DOM nodes as you like.
//=============================================================================
let elementFun = function () {
    console.log("elementFun", "elementFun");
    // These two examples are identical
    const elementFirst = (
        <h1 className="greeting">
            Hello, world!
        </h1>
    );
    // React.createElement() performs a few checks to help you write bug-free code
    const elementSecond = React.createElement('h1', { className: 'greeting' },
        'Hello, world!'
    );
    console.log("elementFirst", elementFirst);
    console.log("elementSecond", elementSecond);
}
// 
elementFun();
//=============================================================================
// JSX Prevents Injection Attacks
// React DOM escapes any values embedded in JSX before rendering them. 
let inputFun = function () {
    let response = {
        potentiallyMaliciousInput: "<script type='text/javascript'>javascript:alert(1);</script>"
    }
    const title = response.potentiallyMaliciousInput;
    // This is safe:
    const element = <div>{title}</div>;
    ReactDOM.render(element, document.getElementById('inputFun'));
}
//
inputFun();
//=============================================================================
let specifyingAttributesFun = function () {
    console.log("specifyingAttributesFun", "specifyingAttributesFun");
    var user = {
        avatarUrl: "favicon.ico"
    }
    const element = <div tabIndex="0"></div>;
    const elementImg = <img src={user.avatarUrl}></img>;
    const elementDiv = (
        <div>
            <h1>Hello!</h1>
            <h2>Good to see you here.</h2>
            <elementImg></elementImg>
        </div>
    );
    console.log("element", element);
    console.log("elementImg", elementImg);
    console.log("elementDiv", elementDiv);
}
//
specifyingAttributesFun();
 
//=============================================================================
let elementDeclarationFun = function () {
    const element = <h1>Hello, world!</h1>;
}
//=============================================================================