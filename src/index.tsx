import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import GameNew from './components/games/new';
import GamePlay from './components/games/new';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games/new" element={<GameNew />} />
      <Route path="/games/play" element={<GamePlay />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
