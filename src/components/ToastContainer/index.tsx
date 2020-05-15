import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { ToastMessagesTPO, useToast } from '../../hooks/toast';
import { Container, Toast } from './styles';

interface ToastContainerProps {
  messages: ToastMessagesTPO[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  return (
    <Container>
      {messages.map((message) => (
        <Toast type={message.type} hasDescription={!!message.description}>
          <FiAlertCircle size={21} />
          <div>
            <strong> {message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </div>

          <button onClick={() => removeToast(message.id)} type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
