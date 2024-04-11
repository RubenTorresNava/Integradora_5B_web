import { render, screen } from '@testing-library/react';
import Inicio from './Inicio';

test('renders Inicio component', () => {
  render(<Inicio />);
  
  // Check if the component renders without errors
  const inicioElement = screen.getByText(/Inicio/i);
  expect(inicioElement).toBeInTheDocument();

  // Check if the CardObjetos1 components render with correct titles
  const librosElement = screen.getByText(/Libros/i);
  expect(librosElement).toBeInTheDocument();

  const alumnosElement = screen.getByText(/Alumnos/i);
  expect(alumnosElement).toBeInTheDocument();

  const prestamosElement = screen.getByText(/Préstamos/i);
  expect(prestamosElement).toBeInTheDocument();

  // Check if the Bar component renders
  const barElement = screen.getByTestId('bar-chart');
  expect(barElement).toBeInTheDocument();
});