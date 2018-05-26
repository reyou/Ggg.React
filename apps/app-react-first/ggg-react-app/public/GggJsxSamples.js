 //=============================================================================
var correctKeyUsageFun = function () {
    function ListItem(props) {
        // Correct! There is no need to specify the key here:
        return <li>{props.value}</li>;
    }
    function NumberList(props) {
        const numbers = props.numbers;
        // A good rule of thumb is that elements inside the map() 
        // call need keys.
        const listItems = numbers.map((number) =>
            // Correct! Key should be specified inside the array.
            <ListItem key={number.toString()} value={number} />
        );
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
    const numbers = [1, 2, 3, 4, 5];
    ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('correctKeyUsageFun'));

}
//
correctKeyUsageFun();
//=============================================================================
// We don't recommend using indexes for keys if the items can reorder, 
// as that would be slow. 
// Keys only make sense in the context of the surrounding array.
var incorrectKeyUsageFunc = function () {
    function ListItem(props) {
        const value = props.value;
        return (
            // Wrong! There is no need to specify the key here:
            <li key={value.toString()}>
                {value}
            </li>
        );
    }
    function NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
            // Wrong! The key should have been specified here:
            <ListItem value={number} />
        );
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
    const numbers = [1, 2, 3, 4, 5];
    ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('incorrectKeyUsageFunc'));
}
// incorrectKeyUsageFunc();
//=============================================================================
// https://facebook.github.io/react/docs/lists-and-keys.html
// When you don't have stable IDs for rendered items, you may use the item
// index as a key as a last resort:
var indexAsAkeyFun = function () {
    const todoItems = todos.map((todo, index) =>
        // Only do this if items have no stable IDs
        <li key={index}>
            {todo.text}
        </li>
    );
}
// indexAsAkeyFun();
//=============================================================================
// https://facebook.github.io/react/docs/lists-and-keys.html
var basicListComponentFun = function () {
    // Keys help React identify which items have changed, are added, or
    // are removed. Keys should be given to the elements inside the array 
    //to give the elements a stable identity:
    function NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
            <li key={number}>{number}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
    const numbers = [1, 2, 3, 4, 5];
    ReactDOM.render(<NumberList numbers={numbers}></NumberList>, document.getElementById("basicListComponentFun"));
}
//
basicListComponentFun();
//=============================================================================
// https://facebook.github.io/react/docs/lists-and-keys.html
var listFun = function () {
    console.log("listFun", "listFun");
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number) => number * 2);
    console.log(doubled);
    const listItems = numbers.map((number) => {
        return <li key={number}>{number}</li>
    });
    ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("listFun"));
}
//
listFun();
//=============================================================================
// https://facebook.github.io/react/docs/conditional-rendering.html
let preventingRenderingFun = function () {
    // In rare cases you might want a component to hide itself even though 
    // it was rendered by another component. To do this return null instead 
    // of its render output.
    // Returning null from a component's render method does not affect the
    // firing of the component's lifecycle methods. For instance, 
    // componentWillUpdate and componentDidUpdate will still be called.
    function WarningBanner(props) {
        if (!props.warn) {
            return null;
        }
        return (<div className="warning">
            Warning!
            </div>);
    }

    class Page extends React.Component {
        constructor(props) {
            super(props);
            this.state = { showWarning: true }
            this.handleToggleClick = this.handleToggleClick.bind(this);
        }

        handleToggleClick() {
            this.setState(prevState => ({
                showWarning: !prevState.showWarning
            }));
        }

        render() {
            return (
                <div>
                    <WarningBanner warn={this.state.showWarning} />
                    <button onClick={this.handleToggleClick}>
                        {this.state.showWarning ? 'Hide' : 'Show'}
                    </button>
                </div>
            );
        }
    }
    ReactDOM.render(<Page />, document.getElementById('preventingRenderingFun'));
}
//
preventingRenderingFun();
//=============================================================================
// https://facebook.github.io/react/docs/conditional-rendering.html
// condition ? true : false
let conditionalOperatorFun = function () {
    class GggGame extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                isLoggedIn: props.isLoggedIn
            }
        }
        render() {
            const isLoggedIn = this.state.isLoggedIn;
            return (
                <div>
                    The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
                </div>
            );
            // return (
            //     <div>
            //         {isLoggedIn ? (
            //             <LogoutButton onClick={this.handleLogoutClick} />
            //         ) : (
            //                 <LoginButton onClick={this.handleLoginClick} />
            //             )}
            //     </div>
            // );
        }
    }
    ReactDOM.render(<GggGame isLoggedIn={true}></GggGame>, document.getElementById("conditionalOperatorFun"));
}
//
conditionalOperatorFun();
//=============================================================================
// https://facebook.github.io/react/docs/conditional-rendering.html
let inlineFun = function () {
    function Mailbox(props) {
        const unreadMessages = props.unreadMessages;
        return (<div>
            {unreadMessages.length > 0 &&
                <div>You have {unreadMessages.length} unread messages.</div>}
        </div>);
    }
    const messages = ['React', 'Re: React', 'Re:Re: React'];
    ReactDOM.render(<Mailbox unreadMessages={messages} />,
        document.getElementById('inlineFun'));
}
//
inlineFun();
//=============================================================================
// https://facebook.github.io/react/docs/conditional-rendering.html
let elementVariablesFun = function () {
    function GuestGreeting(props) {
        return <div>
            Please sign up.
        </div>;
    }
    function UserGreeting(props) {
        return <div>Welcome back!</div>;
    }
    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;
    }
    function LoginButton(props) {
        return (
            <button onClick={props.onClick}>
                Login
            </button>
        );
    }
    function LogoutButton(props) {
        return (
            <button onClick={props.onClick}>
                Logout
            </button>
        );
    }
    class LoginControl extends React.Component {
        constructor(props) {
            super(props);
            this.handleLoginClick = this.handleLoginClick.bind(this);
            this.handleLogoutClick = this.handleLogoutClick.bind(this);
            this.state = { isLoggedIn: false }
        }
        handleLoginClick() {
            this.setState({
                isLoggedIn: true
            });
        }
        handleLogoutClick() {
            this.setState({
                isLoggedIn: false
            });
        }
        render() {
            const isLoggedIn = this.state.isLoggedIn;
            let button = null;
            if (isLoggedIn) {
                button = <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
            }
            else {
                button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
            }
            return (<div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
            );
        }
    }
    ReactDOM.render(<LoginControl></LoginControl>, document.getElementById("elementVariablesFun"));
}
//
elementVariablesFun();
//=============================================================================
// https://facebook.github.io/react/docs/conditional-rendering.html
let conditionalRenderingFun = function () {
    function UserGreeting(props) {
        return <div>Welcome back!</div>;
    }
    function signUp() {
        ReactDOM.render(<Greeting isLoggedIn={true} />,
            document.getElementById('conditionalRenderingFun'));
    }
    function GuestGreeting(props) {
        return <div>
            Please sign up.
            <button onClick={signUp}>Sign Up Here</button>
        </div>;
    }
    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;
    }
    // Try changing to isLoggedIn={true}:
    ReactDOM.render(<Greeting isLoggedIn={false} />,
        document.getElementById('conditionalRenderingFun'));
}
//
conditionalRenderingFun();
//=============================================================================
// We generally recommend binding in the constructor or using the
// property initializer syntax, to avoid this sort of performance problem.
// https://facebook.github.io/react/docs/handling-events.html
var arrowFunctionFun = function () {
    class LoggingButton extends React.Component {
        handleClick() {
            console.log('this is:', this);
        }
        render() {
            // This syntax ensures `this` is bound within handleClick
            // If you aren't using property initializer syntax,
            // you can use an arrow function in the callback:
            return (
                <button onClick={(e) => this.handleClick(e)}>
                    Click me
                </button>
            );
        }
    }
    ReactDOM.render(<LoggingButton></LoggingButton>, document.getElementById("arrowFunctionFun"));
}
// 
arrowFunctionFun();
//=============================================================================
// https://facebook.github.io/react/docs/handling-events.html
var callbacksFun = function () {
    class LoggingButton extends React.Component {
        // This syntax ensures `this` is bound within handleClick.
        // Warning: this is *experimental* syntax.
        // If calling bind annoys you, there are two ways you can get 
        // around this. If you are using the experimental property initializer 
        // syntax, you can use property initializers to correctly bind callbacks:
        handleClick = () => {
            console.log('this is:', this);
        }
        render() {
            return (
                <button onClick={this.handleClick}>
                    Click me
                 </button>
            );
        }
    }
    ReactDOM.render(<LoggingButton></LoggingButton>, document.getElementById("callbacksFun"));
}
// 
callbacksFun();
//=============================================================================
// https://facebook.github.io/react/docs/handling-events.html
var toggleFun = function () {
    class Toggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = { isToggleOn: true };
            // This binding is necessary to make `this` work in the callback
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            // previous state callback
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }
        render() {
            return (<button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>);
        }
    }
    ReactDOM.render(<Toggle></Toggle>, document.getElementById("toggleFun"));
}
//
toggleFun();
//=============================================================================
var handlingEventsFun = function () {
    class GggEventHandler extends React.Component {
        componentDidMount() {

        }
        componentWillUnmount() {

        }
        activateLasers() {
            alert("lasers activated!");
        }
        // Here, e is a synthetic event. React defines these synthetic 
        // events according to the W3C spec, so you don't need to worry
        // about cross-browser compatibility.
        // When using React you should generally not need to call addEventListener 
        // to add listeners to a DOM element after it is created.
        // Instead, just provide a listener when the element is initially rendered.
        handleClick(e) {
            e.preventDefault();
            alert("thanks for clicking to me!");
        }
        render() {
            return <div>
                <div>
                    <button onClick={this.activateLasers}>Activate Lasers</button>
                </div>
                <div>
                    <a href="#" onClick={this.handleClick}>Click me</a>
                </div>
            </div>
        }
    }
    ReactDOM.render(<GggEventHandler></GggEventHandler>, document.getElementById('handlingEventsFun'));
}
//
handlingEventsFun();
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