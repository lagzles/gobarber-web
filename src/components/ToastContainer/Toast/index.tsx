import React, { useCallback } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { useToast, ToastMessagesTPO } from '../../../hooks/toast';
import { Container } from './styles';

interface ToastProps {
  message: ToastMessagesTPO;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  return (
    <Container type={message.type} hasDescription={!!message.description}>
      <FiAlertCircle size={21} />
      <div>
        <strong> {message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
