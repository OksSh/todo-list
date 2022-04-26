import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className='wrapper'>
        <div className='App'>
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
