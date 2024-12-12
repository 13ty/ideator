import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Home from './pages/Home';
    import IdeaGenerator from './pages/IdeaGenerator';
    import ProjectPlanner from './pages/ProjectPlanner';

    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/idea-generator" element={<IdeaGenerator />} />
            <Route path="/project-planner" element={<ProjectPlanner />} />
          </Routes>
        </Router>
      );
    }

    export default App;
