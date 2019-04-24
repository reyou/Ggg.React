'use strict';
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);
const element2 = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
);

ReactDOM.render(
    element,
    document.getElementById('root')
);
ReactDOM.render(
    element2,
    document.getElementById('root2')
);
