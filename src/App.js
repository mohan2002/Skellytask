import './App.css';
import MainComponent from './Components/MainComponent';
import Navigation from './Components/Navigation';
import ShippingHeader from './Components/ShippingHeader';

function App() {
  return (
    <div className="App">
      {/* Navigation part
          Shiiping and payment header
          Main Section
      */}

      <Navigation/>
      <ShippingHeader/>
      <MainComponent/>
    </div>
  );
}

export default App;
