import logo from './logo.svg';
import './App.css';
import Homebuttons from './UserComponents/Homebuttons';
import SpaceInvaders from './Pong/Pong';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>
          Welcome to Jamess and Naeem's joint webpage!
        </h4>
        <h2>
          James is the software brain while Naeem is the hardware braun, and together we are looking to make interesting projects!
        </h2>
        <p>
          Stay tuned for more...
        </p>

        <Homebuttons/>

      </header>
      <SpaceInvaders />
    </div>
  );
}

export default App;
