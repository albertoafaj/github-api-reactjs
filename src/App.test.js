import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';


describe('App', ()=>{
  test('should render a input whitin placeholder "Digite o username" and a button "buscar" ', () => {
    render(<App />);

    const inputUsername = screen.getByPlaceholderText('Digite o username para pesquisa...');
    const buttonEl = screen.getByText('Buscar');
    expect(inputUsername).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();

  });

});

