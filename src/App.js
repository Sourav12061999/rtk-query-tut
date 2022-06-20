import './App.css';
import store from './app/store';
import { Provider } from 'react-redux';
import List from './Components/List';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <List/>
    </div>
    </Provider>
  );
}

export default App;
