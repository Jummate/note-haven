import clsx from 'clsx';
function HorizontalLine({ styles }: { styles?: string }) {
  return <div className={clsx('w-full h-1 bg-secondary-dark', styles)}></div>;
}

export default HorizontalLine;
