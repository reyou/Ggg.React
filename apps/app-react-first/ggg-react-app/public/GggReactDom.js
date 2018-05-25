// https://facebook.github.io/react/docs/hello-world.html
//=============================================================================
class GggReactDom {
    renderComponent(component, container) {
        ReactDOM.render(component, document.getElementById(container));
    }
    createElement(tagName, className, htmlContent) {
        const elementCreated = React.createElement(tagName, { className: className },
            htmlContent
        );
        return elementCreated;
    }
}