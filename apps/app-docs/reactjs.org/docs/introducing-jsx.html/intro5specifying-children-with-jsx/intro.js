'use strict';
var user = {
    avatarUrl: "https://randomuser.me/api/portraits/women/6.jpg"
}
const element = <img src={user.avatarUrl} />;

const element2 = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

ReactDOM.render(
    element2,
    document.getElementById('root2')
);