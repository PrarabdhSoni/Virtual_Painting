import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import ModelLoadScreen from './pages/ModelLoadScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/load-model-a" element={<ModelLoadScreen modelName="Virtual Painter" />} />
        <Route path="/load-model-b" element={<ModelLoadScreen modelName="ASL Detection" />} />
        <Route path="/load-model-main" element={<ModelLoadScreen modelName="Main Model" />} />
      </Routes>
    </Router>
  );
}

export default App;