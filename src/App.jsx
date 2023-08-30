import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage/StartPage';
import GeneratedImageForm from './components/GeneratedImageForm/GeneratedImageForm';
import GeneratedResponseForm from './components/GeneratedResponseForm/GeneratedResponseForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/generate-image" element={<GeneratedImageForm />} />
        <Route path="/generate-response" element={<GeneratedResponseForm />} />
      </Routes>
    </Router>
  );
}

export default App;
