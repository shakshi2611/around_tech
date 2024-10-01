// src/App.js
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Decentralized_MLM from './Pages/Decentralized_MLM/Decentralized';
import LeadManagement from './Pages/CRM/LeadManagement';
import ERP from './Pages/ERP/ERP';

function App() {
  return (
    <Router>
      <div>
        {/* Define all the routes here */}
        <Routes>
          <Route path="/leadmanagement" element={<LeadManagement />} />
          <Route path="/" element={<Decentralized_MLM />} />
          <Route path="/erp" element={<ERP />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
