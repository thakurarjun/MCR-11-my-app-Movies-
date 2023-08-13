
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import WatchList from './pages/WatchList';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie-detail" element={<MovieDetail />} />
      <Route path="/watchlist" element={<WatchList />} />
     </Routes>
    </div>
  );
}

export default App;
