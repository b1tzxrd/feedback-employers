import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.scss'
import App from './components/App/App'
import { Provider } from 'react-redux'
import store from './store/index';
import '../firebase'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode >
      <App />
    </StrictMode>
  </Provider>,
)
