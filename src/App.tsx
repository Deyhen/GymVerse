import { Routes, Route } from 'react-router-dom';
import { GymversePage } from './pages/Gymverse';

function App() {
  return (
    <Routes>
      <Route element={<GymversePage />} path="/" />
    </Routes>
  );
}

export default App;
