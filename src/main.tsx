import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import the script.js content to ensure it's included in the build
import '../script.js';

// Timeline component will be rendered in the timeline-react-root div
ReactDOM.createRoot(document.getElementById('timeline-react-root')!).render(
  <React.StrictMode>
    <div className="timeline-section">
      <div className="container">
        <h2>Our Journey to Perfecting Cold Email</h2>
        {/* Timeline component will be added here */}
      </div>
    </div>
  </React.StrictMode>,
);
