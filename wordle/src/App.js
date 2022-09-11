import logo from './logo.svg';
import './App.css';
import Cell from './Cell';
import Keyboard from './Keyboard';
import { useState } from 'react';

function App() {
  let [word, setWord] = useState('');
  

  return (
    <div className="App">
     <table>
      <tbody>
        <tr>
          <Cell row={0} col={0}/>
          <Cell row={0} col={1}/>
          <Cell row={0} col={2}/>
          <Cell row={0} col={3}/>
          <Cell row={0} col={4}/>
        </tr>
        <tr>
          <Cell row={1} col={0}/>
          <Cell row={1} col={1}/>
          <Cell row={1} col={2}/>
          <Cell row={1} col={3}/>
          <Cell row={1} col={4}/>
        </tr>
        <tr>
          <Cell row={2} col={0}/>
          <Cell row={2} col={1}/>
          <Cell row={2} col={2}/>
          <Cell row={2} col={3}/>
          <Cell row={2} col={4}/>
        </tr>
        <tr>
          <Cell row={3} col={0}/>
          <Cell row={3} col={1}/>
          <Cell row={3} col={2}/>
          <Cell row={3} col={3}/>
          <Cell row={3} col={4}/>
        </tr>
        <tr>
          <Cell row={4} col={0}/>
          <Cell row={4} col={1}/>
          <Cell row={4} col={2}/>
          <Cell row={4} col={3}/>
          <Cell row={4} col={4}/>
        </tr>
        <tr>
          <Cell row={5} col={0}/>
          <Cell row={5} col={1}/>
          <Cell row={5} col={2}/>
          <Cell row={5} col={3}/>
          <Cell row={5} col={4}/>
        </tr>
      </tbody>
     </table>
     <Keyboard currentWord={word} />
    </div>
  );
}

export default App;
