import React, { useState } from 'react';
import { BotFormData, BotType } from '../types/bot';
import { CloseButton } from './buttons/CloseButton';
import { BotNameInput } from './forms/BotNameInput';
import { BotDescriptionInput } from './forms/BotDescriptionInput';
import { BotTypeSelector } from './forms/BotTypeSelector';
import { ImageUpload } from './forms/ImageUpload';
import { ModalFooter } from './modals/ModalFooter';

interface CreateBotsModalProps {
  onClose: () => void;
  onConfirm: (data: BotFormData) => void;
}

export const CreateBotsModal: React.FC<CreateBotsModalProps> = ({ onClose, onConfirm }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<BotType>('simple');
  const [icon, setIcon] = useState<File | null>(null);

  const handleSubmit = () => {
    onConfirm({ name, description, type, icon });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[600px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">创建Bots</h2>
          <CloseButton onClick={onClose} />
        </div>

        <div className="space-y-6">
          <ImageUpload onChange={setIcon} />
          <BotNameInput value={name} onChange={setName} />
          <BotDescriptionInput value={description} onChange={setDescription} />
          <BotTypeSelector value={type} onChange={setType} />
        </div>

        <ModalFooter onCancel={onClose} onConfirm={handleSubmit} />
      </div>
    </div>
  );
};