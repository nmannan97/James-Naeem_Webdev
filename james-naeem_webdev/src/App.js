import logo from './logo.svg';
import './App.css';

import Pong from './Pong/Pong'
import Homebuttons from './UserComponents/Homebuttons'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>
          Welcome to Jamess and Naeem's joint website!
        </h4>
        <h1>
          James is the software brain while Naeem is the hardware braun, and together we are looking to make interesting projects!
        </h1>
        <p>
          Stay tuned for more...
          <Homebuttons />
        </p>
        
      </header>
      <Pong />
    </div>
  );
}

export default App;
