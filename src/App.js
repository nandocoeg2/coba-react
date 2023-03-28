import './App.css';
import Introduction from './components/introduction';
import Profile from './components/profile';

function App() {
  return (
    <div>
      <h1>React 17</h1>
      <p>React 17 is a major release of React with new features, bugfixes, and new deprecation warnings to help prepare for a future major release.</p>
      <Introduction name ="nando"/>
      <Profile name ="nando"/>
    </div>
  );
}

export default App;
