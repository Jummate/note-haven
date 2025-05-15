import EmptyPage from "../components/EmptyPage";
import { useTabText } from "../hooks/useTabText";

type EmptyPageContainerProps = {
  noteType: string;
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
