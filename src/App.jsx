import './App.css';
import Accordion from './components/accordion/Accordion';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Accordion />
    </>
  );
}

export default App
