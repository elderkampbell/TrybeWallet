import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

test('Testa se os campos de email e senha estão na tela.', () => {
  renderWithRouterAndRedux(<App />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
});
test('Testa se o Botão entrar está na tela.', () => {
  renderWithRouterAndRedux(<App />);
  expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
});

test('Testa se ao preencher os campos com informações validas e clicar no botão redireciona para carteira.', () => {
  renderWithRouterAndRedux(<App />);
  userEvent.type(screen.getByRole('textbox'), 'a@a.a');
  userEvent.type(screen.getByPlaceholderText(/senha/i), '123456');
  userEvent.click(screen.getByRole('button', { name: /entrar/i }));
  expect(screen.getByRole('columnheader', { name: /método de pagamento/i })).toBeInTheDocument();
});

test('Testa se ao preencher os campos com informações e clicar no botão limpa os campos.', async () => {
  renderWithRouterAndRedux(<App />);
  userEvent.type(screen.getByRole('textbox'), 'a@a.a');
  userEvent.type(screen.getByPlaceholderText(/senha/i), '123456');
  userEvent.click(screen.getByRole('button', { name: /entrar/i }));
  userEvent.type(screen.getByRole('textbox'), 'Excelente');
  userEvent.click(screen.getByRole('button', { name: /adicionar despesa/i }));
});
