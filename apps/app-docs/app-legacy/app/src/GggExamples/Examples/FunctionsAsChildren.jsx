// https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891
// https://reactjs.org/docs/composition-vs-inheritance.html
// if you have a custom component, you could have it take a callback
// as props.children:
import React from "react";

export default function FunctionsAsChildren() {
  // Calls the children callback numTimes to produce a repeated component
  /*Whenever this component is invoked {props.children} will 
  also be displayed and this is just a reference to what is 
  between the opening and closing tags of the component. */
  function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i, "custom " + i));
    }
    return items;
  }
  return (
    <Repeat numTimes={10}>
      {(index, custom) => (
        <div key={index}>
          This is item {index} in the list. {custom}
        </div>
      )}
    </Repeat>
  );
}
