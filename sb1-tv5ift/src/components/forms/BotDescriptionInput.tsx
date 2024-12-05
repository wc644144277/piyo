import React from 'react';

interface BotDescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const BotDescriptionInput: React.FC<BotDescriptionInputProps> = ({ value, onChange }) => (
  <div>
    <label className="block mb-2">
      Bots描述 <span className="text-red-500">*</span>
    </label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded-md px-3 py-2 h-32 resize-none"
      placeholder="介绍Bots功能和使用场景"
    />
  </div>
);