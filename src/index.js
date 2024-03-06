import ReactDOM from 'react-dom/client';
import './global.css';
import { createBrowserRouter } from 'react-router-dom';
import routes from './routes/routes';
import App from './App';

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App router={router} />);
