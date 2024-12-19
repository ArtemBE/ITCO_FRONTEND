import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';

const defaultState = {
  project_id: -1,
  project_name: '',
  project_description: '',
  project_image: '',
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "edit_id": 
      return {  ...state, project_id: action.payload};
    case "edit_name": 
      return {  ...state, project_name: action.payload};
    case "edit_description": 
      return { ...state, project_description: action.payload};
    case "set_default":
      return defaultState;
    case "edit_image": 
      return state;
    case "edit_project":
      return {
        ...state,
        project_id: action.payload.project_id,
        project_name: action.payload.project_name,
        project_description: action.payload.project_description,
        project_image: action.payload.project_image,
      }
    default: 
      return state;
  }
}
const store = createStore(reducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
