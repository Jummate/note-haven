type MyToastContentProps = {
  message: string;
};
function MyToastContent({ message }: MyToastContentProps) {
  return (
    <div>
      {message}
      <button>Retry</button>
      <button onClick={() => console.log('okay')}>Close</button>
    </div>
  );
}

export default MyToastContent;
