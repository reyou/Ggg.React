import React from "react";
const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
};
export default function NestedComponent() {
  return <MyComponents.DatePicker color="blue" />;
}
