// import React from 'react';
import { useTabText } from "../../hooks/useTabText";

import { useHeaderStore } from "../../stores/headerStore";

type PageHeaderProps = {
  headerText: string;
};

function PageHeader({ headerText }: PageHeaderProps) {
  // const { activeTabText } = useTabText();

  //   const { headerText } = useHeaderStore();
  return (
    <>
      {/* <h1 className="font-bold text-4xl font-inter mb-4">{activeTabText}</h1> */}
      <h1 className="font-bold text-4xl font-inter mb-4">{headerText}</h1>
    </>
  );
}

export default PageHeader;
