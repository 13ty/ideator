import { Link } from 'react-router-dom';

    function Home() {
      return (
        <div>
          <h1>Welcome to the App Idea Generator</h1>
          <p>
            This application helps you generate and refine app ideas using AI-powered suggestions.
          </p>
          <nav>
            <ul>
              <li><Link to="/idea-generator">Generate App Idea</Link></li>
              <li><Link to="/project-planner">Project Planner</Link></li>
            </ul>
          </nav>
        </div>
      );
    }

    export default Home;
