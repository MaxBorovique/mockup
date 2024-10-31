import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import './assets/styles/main.scss';
import './assets/styles/_theme.scss';


createRoot(document.getElementById('root')!).render(
    <App />
)
