import './App.scss';
import Nav from './nav/Nav';
import Table from './table/Table';

function App() {
  return (
    <div className="App content-container flex-direction--column">
      <Nav />
      <Table />
    </div>
  );
}

export default App;
