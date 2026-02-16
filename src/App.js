import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Sidebar 1</p>
        <Sidebar initialMenuItems={[
            'Albert Eggstein',
            'Attila the Hen',
            'Dixie Chick',
            'Gregory Peck',
            'Mary Poopins'
          ]}></Sidebar>
      </header>
    </div>
  );
}

export default App;
