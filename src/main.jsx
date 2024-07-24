import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import './app/assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>
)
