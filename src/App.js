import './App.css';
import AddTodo from "./components/AddTodo";
import List from './components/List';

function App() {
  return (
    <div className="container">
        <div className="row">
          <h1>todos</h1>
          <AddTodo />
          <List />
        </div>
      </div>
  );
}

export default App;
