import clsx from 'clsx';
function HorizontalLine({ styles }: { styles?: string }) {
  return (
    <div
      className={clsx(
        'w-full h-1 bg-secondary-50 dark:bg-secondary-50/5',
        styles,
      )}
    ></div>
  );
}

export default HorizontalLine;
