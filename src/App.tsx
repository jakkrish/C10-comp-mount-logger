import { useState } from 'react';
import Greeting from './Greeting';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => setToggle((prev) => !prev);
  return (
    <>
      {toggle && <Greeting />}
      <input
        type="button"
        value={toggle ? 'Unload' : 'Load'}
        onClick={handleClick}
      />
    </>
  );
}

export default App;
