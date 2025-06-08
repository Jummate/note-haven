import { render, screen } from '@testing-library/react';
// import userEvent from "@testing-library/user-event";
// import { vi } from "vitest";
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';

describe('Login', () => {
  it('should render email input and initial UI', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText(/please log in to continue/i)).toBeInTheDocument();
  });
});
