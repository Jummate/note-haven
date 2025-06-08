import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import ForgotPassword from './ForgotPassword';
// import { forgotPassword } from '../services/authService';

vi.mock('../services/authService', () => ({
  forgotPassword: vi.fn().mockImplementation((_, callback) => {
    callback();
    return Promise.resolve({ success: true });
  }),
}));

afterEach(() => {
  vi.clearAllMocks();
});

describe('ForgotPassword', () => {
  it('should render email input and initial UI', () => {
    render(<ForgotPassword />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /send reset link/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/enter your email/i)).toBeInTheDocument();
  });

  it('should not submit form if input is invalid', async () => {
    render(<ForgotPassword />);

    const button = screen.getByRole('button', { name: /send reset link/i });
    await userEvent.click(button);

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  });

  it('should submit and render Resend Email component input is valid', async () => {
    render(<ForgotPassword />);

    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: /send reset link/i });
    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.click(button);

    expect(await screen.findByTestId('reset-link-message')).toBeInTheDocument();
  });

  //   it("should handle failed reset attempt", async () => {
  //     vi.mocked(forgotPassword).mockResolvedValueOnce({
  //       success: false,
  //       error: "Failed to generate a reset link.",
  //     });

  //     render(<ForgotPassword />);
  //     const user = userEvent.setup();

  //     await user.type(screen.getByLabelText(/email/i), "test@example.com");
  //     await user.click(screen.getByRole("button", { name: /send reset link/i }));

  //     // expect(
  //     //   await screen.findByText(/failed to generate a reset link./i),
  //     // ).toBeInTheDocument();

  //     await waitFor(() => {
  //       expect(
  //         screen.getByText(/failed to generate a reset link/i),
  //       ).toBeInTheDocument();
  //     });
  //   });
});
