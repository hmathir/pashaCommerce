import './App.css';
import FetchProducts from './components/FetchProducts/FetchProducts';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FetchProducts></FetchProducts>
    </div>
  );
}

export default App;
