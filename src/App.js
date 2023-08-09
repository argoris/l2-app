import logo from './logo.svg';
import './App.css';
import {f1, f2} from './js/index.js';
import TestComponent from "./components/TestComponent";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
        {
          f1('777')
        }
      <div>
        {
          f2('f2 Test', '7Test')
        }
      </div>
        <div>
          <TestComponent />
        </div>
        <div>
          <Menu />
        </div>
      </div>
  );
}

export default App;

