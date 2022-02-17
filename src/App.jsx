import './App.css';
import Header from './components/Header/Header';
import ListProvider from './context/ListContext';
import Main from './views/Main/Main';

function App() {
  return (
    <>
      <ListProvider>
        <Header />
        <div className="App">
          <Main />
        </div>
      </ListProvider>
    </>
  );
}

export default App;
