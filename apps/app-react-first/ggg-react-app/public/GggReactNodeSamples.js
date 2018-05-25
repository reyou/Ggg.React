// https://facebook.github.io/react/docs/jsx-in-depth.html
//=============================================================================
import React from 'react';
import { PhotoStory, VideoStory } from './stories';
//=============================================================================

//=============================================================================
var warningFun = function () {
    function WarningButton() {
        // return React.createElement(CustomButton, {color: 'red'}, null);
        return <CustomButton color="red" />;
    }
}
//=============================================================================
var datePickerFun = function () {
    const MyComponents = {
        DatePicker: function DatePicker(props) {
            return <div>Imagine a {props.color} datepicker here.</div>;
        }
    }
    function BlueDatePicker() {
        return <MyComponents.DatePicker color="blue" />;
    }
}
//=============================================================================