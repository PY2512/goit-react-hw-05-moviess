import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css'

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App />);

// ReactDOM.render( <React.StrictMode >
//     <App / >
//     </React.StrictMode>,
//     document.getElementById('root')
// );





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render( 

    < BrowserRouter >
    < App / >
    </BrowserRouter> 
    

    
);