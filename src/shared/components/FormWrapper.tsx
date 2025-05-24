export function FormWrapper({
  onSubmit,
  children,
}: React.PropsWithChildren<{ onSubmit: React.FormEventHandler }>) {
  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
