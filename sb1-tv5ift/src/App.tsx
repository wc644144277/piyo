import React, { useState } from 'react';
import { CreateBotsModal } from './components/CreateBotsModal';
import { BotFormData } from './types/bot';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirm = (data: BotFormData) => {
    console.log('Bot created:', data);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        创建Bots
      </button>

      {isModalOpen && (
        <CreateBotsModal
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
}

export default App;