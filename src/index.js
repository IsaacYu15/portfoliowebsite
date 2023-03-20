//links our app component to our html file
import ReactDOM from 'react-dom/client'
import App from './App'; //import app.jsx
import './index.css'

//selecting id root from index.html to be rendered
const root = ReactDOM.createRoot(document.querySelector('#root'));
//render app component
root.render(<App/>);