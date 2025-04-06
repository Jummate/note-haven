type ShowErrorProps = {
  message: string;
};

function ShowError({ message }: ShowErrorProps) {
  return (
    // <div>

    // </div>
    <p className="error-text flex items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-red-500"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          className="stroke-current"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM12.006 15.693v-4.3M12 8.355v-.063"
        />
      </svg>
      {message}
    </p>
  );
}

export default ShowError;
