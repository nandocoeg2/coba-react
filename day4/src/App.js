import './App.css';
import Home from './components/home';
import NavigationBar from './components/navigation';

function App() {
  const hello = 'Hello World';
  return (
    <div className="App">
      <NavigationBar />
      <Home />
    </div>
  );
}

export default App;
