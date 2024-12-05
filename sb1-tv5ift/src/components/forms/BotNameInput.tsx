import React from 'react';

interface BotNameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const BotNameInput: React.FC<BotNameInputProps> = ({ value, onChange }) => (
  <div>
    <label className="block mb-2">
      Bots名称 <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded-md px-3 py-2"
      maxLength={50}
    />
    <div className="text-right text-gray-500 text-sm mt-1">{value.length}/50</div>
  </div>
);