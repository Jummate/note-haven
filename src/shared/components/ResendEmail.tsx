import { useCountdown } from '../hooks/useCountdown';

type ResendEmailProps = {
  email: string;
  callback: React.Dispatch<React.SetStateAction<boolean>>;
};

function ResendEmail({ email, callback }: ResendEmailProps) {
  const countDown = useCountdown(30, () => callback(true));

  return (
    <div className="text-center">
      <p className="mb-4" data-testid="reset-link-message">
        We sent a reset link to <b className="text-primary-500">{email}</b>.
        Please check your inbox and spam folder.
      </p>
      <p className="text-secondary-700">
        Didn't receive it? Click <b>Resend Email</b> to request another link in
        <span className="text-primary-500 font-bold"> {countDown}s</span>
      </p>
    </div>
  );
}

export default ResendEmail;
