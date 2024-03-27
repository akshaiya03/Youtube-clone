import Head from './Head';
import Body from './Body';
import './App.css';
import appstore from './utils/store';
import { Provider } from 'react-redux';



function App() {
  return (

    <div className="App">
    <Provider store={appstore}>
      <Head/>
      <Body/>
    </Provider>
    </div>
 
  );
}

export default App;
