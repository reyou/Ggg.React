'use strict';
var user = {
    avatarUrl: "https://randomuser.me/api/portraits/women/6.jpg"
}
const element = <div tabIndex="0">tab index here</div>;
const element2 = <img src={user.avatarUrl}></img>;

ReactDOM.render(
    element,
    document.getElementById('root')
);

ReactDOM.render(
    element2,
    document.getElementById('root2')
);