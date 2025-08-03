import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">EA</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Elite Açaí</h1>
          <p className="text-gray-600">Sistema de Delivery</p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Sistema Funcionando</h2>
            <p className="text-gray-600 text-sm">
              A aplicação foi carregada com sucesso. O sistema está pronto para uso.
            </p>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Versão: 2.0</p>
            <p>Status: ✅ Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;