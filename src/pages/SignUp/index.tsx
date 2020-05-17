import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { Container, Content, AnimationContainer, Background } from './styles';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatório'),
          email: Yup.string().required('E-mail Obrigatório').email(),
          password: Yup.string().min(6, 'Mínimo 6 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addToast({
          type: 'success',
          title: 'Cadastrado Realizado!',
          description: '',
        });
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        addToast({
          type: 'error',
          title:
            'Cadastro não realizado. Por favor verifique o preenchimento dos campos necessarios',
          description: '',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="gobarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para LogIn
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignUp;
