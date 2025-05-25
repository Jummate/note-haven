import clsx from "clsx";

function NoContent({ text, styles }: { text: string; styles?: string }) {
  return (
    <div
      className={clsx(
        "flex flex-col flex-1 italic justify-center items-center text-center font-semibold text-2xl text-secondary-500 px-6",
        styles
      )}
    >
      <p>{text}</p>
    </div>
  );
}

export default NoContent;
