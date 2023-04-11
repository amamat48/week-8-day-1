import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Visitors from './components/Visitors';
import Sentiment from './components/Sentiment';
import Ratings from './components/Ratings';
import Reviews from './components/Reviews';

function App() {

  return (
    <div className='analyticsPage'>
      <Sidebar />
      <Reviews />
      <Ratings />
      <Sentiment />
      <Visitors />

    </div>
  )
}

export default App;
