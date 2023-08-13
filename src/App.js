
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie-detail" element={<MovieDetail />} />
     </Routes>
    </div>
  );
}

export default App;
