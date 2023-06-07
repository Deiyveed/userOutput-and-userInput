import './App.css';
import { UserInput } from './components/userInput';
import { UserOutput } from './components/userOutput';

// function that will display the App component

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <UserInput />
        <UserOutput />
        <UserOutput />
        <UserOutput />
        <UserOutput />
        <UserOutput />
      </div>
    </div>
  );
}

export default App;
