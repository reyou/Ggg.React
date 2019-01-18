'use strict';
var response = {
    potentiallyMaliciousInput: "alert(1);"
}
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;



ReactDOM.render(
    element,
    document.getElementById('root')
);