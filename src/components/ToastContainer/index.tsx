import React from 'react';
import { useTransition } from 'react-spring';
import Toast from './Toast';

import { ToastMessagesTPO } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessagesTPO[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', transform: 'rotateZ(0deg)' },
      enter: { right: '0%', transform: 'rotateZ(720deg)' },
      leave: { right: '-120%', transform: 'rotateZ(360deg)' },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
