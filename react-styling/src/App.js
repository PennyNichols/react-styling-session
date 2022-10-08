import './App.css';
import Inline from "./components/inline/Inline"
import Stylesheet from './components/stylesheet';
import Button from './components/cssModules/index';

function App() {
  return (
    <div className="App">
      <Inline/>
      <Stylesheet/>
      <Button />
      <Button variant='primary'/>
      <Button variant='secondary'/>
    </div>
  );
}

export default App;
