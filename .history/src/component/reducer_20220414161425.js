import React from "react";


let defaultState;

if (!localStorage.getItem('userId')) {
    defaultState = false
}

const loginReducer = function(state = )