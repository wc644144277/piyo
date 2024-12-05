import React from 'react';
import { BotType, BOT_TYPES } from '../../types/bot';

interface BotTypeSelectorProps {
  value: BotType;
  onChange: (type: BotType) => void;
}

export const BotTypeSelector: React.FC<BotTypeSelectorProps> = ({ value, onChange }) => (
  <div>
    <label className="block mb-4">Bots类型</label>
    <div className="grid grid-cols-2 gap-4">
      {BOT_TYPES.map((type) => (
        <button
          key={type.id}
          onClick={() => onChange(type.id)}
          className={`p-4 rounded-lg border ${
            value === type.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
        >
          <div className="font-medium mb-2">{type.title}</div>
          <div className="text-gray-500 text-sm">{type.description}</div>
        </button>
      ))}
    </div>
  </div>
);