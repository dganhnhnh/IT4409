import { createRoot } from 'react-dom/client'
import './styles/styles.scss';


import App from './containers/App';
import { Provider } from 'react-redux';
import reduxStore, { persistor } from './redux';

createRoot(document.getElementById('root'))
    .render(
        <Provider store={reduxStore}>
            <App />
        </Provider>
    )
