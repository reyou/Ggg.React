// https://facebook.github.io/react/docs/jsx-in-depth.html
//=============================================================================
// if you want a value like false, true, null, or undefined to appear in the
// output, you have to convert it to a string first:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_conversion
let convertStringFun = function () {
    let qf = <div>
        My JavaScript variable is {String(myVariable)}.
    </div>
}
//=============================================================================
// This JSX only renders a <Header /> if showHeader is true:
let conditionalFun = function () {
    let qf = <div>
        {showHeader && <Header />}
        <Content />
    </div>;
    // 0 will be printed when props.messages is an empty array:
    let qs = <div>
        {props.messages.length &&
            <MessageList messages={props.messages} />
        }
    </div>;
    // To fix this, make sure that the expression before && is always boolean:
    let qt = <div>
        {props.messages.length > 0 &&
            <MessageList messages={props.messages} />
        }
    </div>
}
//=============================================================================
// false, null, undefined, and true are valid children. 
// They simply don't render. These JSX expressions will all 
// render to the same thing:
let dontRenderFun = function () {
    let qf = <div />
    let ws = <div></div>
    let et = <div>{false}</div>
    let rf = <div>{null}</div>
    let tf = <div>{undefined}</div>
    let ys = <div>{true}</div>
}
//=============================================================================
// if you have a custom component, you could have it take a callback 
// as props.children:
let functionsAsChildrenFun = function () {
    // Calls the children callback numTimes to produce a repeated component
    function Repeat(props) {
        let items = [];
        for (let i = 0; i < props.numTimes; i++) {
            items.push(props.children(i));
        }
        return <div>{items}</div>;
    }
    function ListOfTenThings() {
        return (
            <Repeat numTimes={10}>
                {(index) => <div key={index}>This is item {index} in the list</div>}
            </Repeat>
        );
    }
}
//=============================================================================
let stringTemplatesFun = function () {
    function Hello(props) {
        return <div>Hello {props.addressee}!</div>;
    }
}
//=============================================================================
// this renders an HTML list:
let htmlListFun = function () {
    function Item(props) {
        return <li>{props.message}</li>;
    }
    function TodoList() {
        const todos = ['finish doc', 'submit pr', 'nag dan to review'];
        return (
            <ul>
                {todos.map((message) => <Item key={message} message={message} />)}
            </ul>
        );
    }
}
//=============================================================================
// these expressions are equivalent:
let javaScriptExpressionsFun = function () {
    let qf = <MyComponent>foo</MyComponent>
    let qs = <MyComponent>{'foo'}</MyComponent>
}
//=============================================================================
// These two components are equivalent
// We recommend that you use this syntax sparingly.
var spreadFun = function () {
    function App1() {
        return <Greeting firstName="Ben" lastName="Hector" />;
    }
    function App2() {
        const props = { firstName: 'Ben', lastName: 'Hector' };
        return <Greeting {...props} />;
    }

}
//=============================================================================
var propsFun = function () {
    // If you pass no value for a prop, it defaults to true.
    // These two JSX expressions are equivalent:
    let acf = <MyTextBox autocomplete />
    let acs = <MyTextBox autocomplete={true} />
}
//=============================================================================
var stringLiteralsFun = function () {
    // These two JSX expressions are equivalent:
    let hw = <MyComponent message="hello world" />
    let hws = <MyComponent message={'hello world'} />
    // these two JSX expressions are equivalent:
    let ltf = <MyComponent message="&lt;3" />
    let lts = <MyComponent message={'<3'} />
}
//=============================================================================
var compileFun = function () {
    let sideBar = <div className="sidebar" />
    // compiles into:
    React.createElement('div', { className: 'sidebar' }, null);
}
//=============================================================================
let jsxFun = function () {
    <MyButton color="blue" shadowSize={2}>
        Click Me
    </MyButton>
    // compiles into:
    React.createElement(MyButton, { color: 'blue', shadowSize: 2 }, 'Click Me');
}
//=============================================================================