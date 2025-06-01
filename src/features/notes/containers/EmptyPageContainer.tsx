import EmptyPage from '../components/EmptyPage';

type EmptyPageContainerProps = {
  noteType: 'active' | 'archived';
};

function EmptyPageContainer({ noteType }: EmptyPageContainerProps) {
  // const { activeTabText } = useTabText();

  return (
    <EmptyPage
      noteType={noteType}
      // activeTabText={activeTabText}
    />
  );
}

export default EmptyPageContainer;
