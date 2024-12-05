import React from 'react';

interface ModalFooterProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ onCancel, onConfirm }) => (
  <div className="flex justify-end space-x-4 mt-6">
    <button
      onClick={onCancel}
      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
    >
      取消
    </button>
    <button
      onClick={onConfirm}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      确认
    </button>
  </div>
);