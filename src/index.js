import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { store, /* persistor */ } from "./components/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
/* import { PersistGate } from 'redux-persist/integration/react'; */


const theme = {
  colors: {
    text: '#041934',
    textAccent: '#ff9944',
    buttonColor: '#c3f5bf',
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/goit-react-hw-06-phonebook">
        <Provider store={store}>
          {/* <PersistGate loading={null} persistor={persistor}> */}
            <App />
          {/* </PersistGate> */}
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
