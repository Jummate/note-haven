type FormWrapperProps = React.FormHTMLAttributes<HTMLFormElement>;

export function FormWrapper({
  onSubmit,
  children,
  ...props
}: React.PropsWithChildren<FormWrapperProps>) {
  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
}
