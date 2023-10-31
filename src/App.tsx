import Main from './components/main/Main';
import { GlobalProvider } from './CreateContext';
import './App.css';


function App() {


  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
}

export default App;
