import React from 'react';
import {
  RouteProps as ReactDomRouteProps,
  Route as ReactDomRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDomRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

// isPrivate/Logado
// true/true = OK
// true/false = Redirecionar para login
// false/false = Redirecionar para Dashboard
// false/false = OK

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDomRoute
      {...rest} // todos as propriedades da rota/pagina
      render={({ location }) => {
        // função que faz a verificação
        return isPrivate === !!user ? (
          <Component /> // caso OK, renderiza o componente
        ) : (
            <Redirect // caso não ok, redireciona para outro endereço
              to={{
                pathname: isPrivate ? '/' : '/dashboard',
                // state pega o historico dos caminhos
                state: { from: location },
              }}
            />
          );
      }}
    />
  );
};

export default Route;
