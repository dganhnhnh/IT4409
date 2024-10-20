import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import Navbar from './navbar.jsx';


import { Provider } from 'react-redux';
import reduxStore, { persistor } from './redux';

createRoot(document.getElementById('root')).render(
    <Provider store={reduxStore}>
        <Navbar />
        <App />
        
    </Provider>
)
