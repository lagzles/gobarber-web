import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="info" hasDescription={false}>
        <FiAlertCircle size={21} />
        <div>
          <strong> pode dar Merda</strong>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="success" hasDescription>
        <FiAlertCircle size={21} />
        <div>
          <strong> Não Deu Merda</strong>
          <p>Não foi possivel fazer login</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="error" hasDescription>
        <FiAlertCircle size={21} />
        <div>
          <strong> Deu Merda</strong>
          <p>Não foi possivel fazer login</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
